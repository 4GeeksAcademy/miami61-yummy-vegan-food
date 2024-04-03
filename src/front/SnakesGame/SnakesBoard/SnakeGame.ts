import Snake from "./Snake";

type Cell = "snake" | "food" | null;

export interface Coordinate {
  row: number;
  col: number;
}

export class SnakeGameEngine {
  private context: CanvasRenderingContext2D;
  private boardSidesLength: number;
  private numOfRowsAndCols: number;
  private _gameBoard: Cell[][];
  private _foodCoordinate: Coordinate;
  // these two sets how often the re-render is
  private readonly staggerFrame: number;
  private currentFrameCount: number;

  private externalScore: number;
  private setScore: React.Dispatch<React.SetStateAction<number>>;
  private setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;

  private internalPlayState: boolean;

  snake: Snake;

  constructor(
    context: CanvasRenderingContext2D,
    boardSidesLength: number,
    externalScore: number,
    setScore: React.Dispatch<React.SetStateAction<number>>,
    setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>,
    isPlaying: boolean
  ) {
    this.context = context;

    this.snake = new Snake();
    this._foodCoordinate = {
      row: -1,
      col: -1,
    };

    this.boardSidesLength = boardSidesLength;
    this.numOfRowsAndCols = 26;
    this._gameBoard = [];
    this.externalScore = externalScore;
    this.setScore = setScore;
    this.setIsGameOver = setIsGameOver;

    // these 2 properties set how often the re-render is
    this.currentFrameCount = 0;
    this.staggerFrame = 8;

    this.internalPlayState = isPlaying;
  }

  get score() {
    if (this.snake.length === 0) {
      return 0;
    }
    return this.snake.length * 10 - this.snake.defaultlength * 10;
  }

  private get gameBoard(): Cell[][] {
    if (this._gameBoard.length === 0) {
      const nRows = this.numOfRowsAndCols;
      const nCols = this.numOfRowsAndCols;

      for (let i = 0; i < nRows; i++) {
        this._gameBoard.push(Array.from(Array(nCols)).fill(null));
      }
    }

    return this._gameBoard;
  }

  private set gameBoard(newGameBoard: Cell[][]) {
    this._gameBoard = newGameBoard;
  }

  private get foodCoordinate() {
    const foodCoordInSnakeCoords = (foodRow: number, foodCol: number) => {
      const match = this.snake.bodyCoordinates.find((snakeCoord) => {
        return snakeCoord.col === foodCol && snakeCoord.row === foodRow;
      });

      return match !== undefined;
    };

    if (this._foodCoordinate.row < 0 || this._foodCoordinate.col < 0) {
      let randRow = Math.floor(Math.random() * this.numOfRowsAndCols);
      let randCol = Math.floor(Math.random() * this.numOfRowsAndCols);

      while (foodCoordInSnakeCoords(randRow, randCol)) {
        randRow = Math.floor(Math.random() * this.numOfRowsAndCols);
        randCol = Math.floor(Math.random() * this.numOfRowsAndCols);
      }

      this._foodCoordinate = {
        row: randRow,
        col: randCol,
      };
    }

    return this._foodCoordinate;
  }

  private set foodCoordinate(newCoord: Coordinate) {
    const foodCoordInSnakeCoords = (foodRow: number, foodCol: number) => {
      const match = this.snake.bodyCoordinates.find((snakeCoord) => {
        return snakeCoord.col === foodCol && snakeCoord.row === foodRow;
      });

      return match !== undefined;
    };

    if (newCoord.row < 0 || newCoord.col < 0) {
      let randRow = Math.floor(Math.random() * this.numOfRowsAndCols);
      let randCol = Math.floor(Math.random() * this.numOfRowsAndCols);

      while (foodCoordInSnakeCoords(randRow, randCol)) {
        randRow = Math.floor(Math.random() * this.numOfRowsAndCols);
        randCol = Math.floor(Math.random() * this.numOfRowsAndCols);
      }

      this._foodCoordinate = {
        row: randRow,
        col: randCol,
      };
    } else {
      this._foodCoordinate = newCoord;
    }
  }

  private snakeImage!: HTMLImageElement;
  private foodImage!: HTMLImageElement;
  private imagesLoaded: boolean = false;
  
  private preloadImages() {
    const snakeImageUrl = 'https://png.pngtree.com/png-vector/20201206/ourmid/pngtree-cute-baby-cow-icon-design-png-image_2515695.jpg';
    const foodImageUrl = 'https://clipart-library.com/images_k/transparent-grass-clipart/transparent-grass-clipart-21.jpg';
  
    this.snakeImage = new Image();
    this.snakeImage.src = snakeImageUrl;
  
    this.foodImage = new Image();
    this.foodImage.src = foodImageUrl;
  
    return new Promise<void>((resolve, reject) => {
      Promise.all([
        new Promise((resolve) => { this.snakeImage.onload = resolve; }),
        new Promise((resolve) => { this.foodImage.onload = resolve; })
      ]).then(() => {
        this.imagesLoaded = true;
        resolve();
      }).catch(reject);
    });
  }
  
  private async generateGrid() {
    if (!this.imagesLoaded) {
      await this.preloadImages();
    }
  
    const cellWidth = this.boardSidesLength / this.numOfRowsAndCols;
    const cellHeight = this.boardSidesLength / this.numOfRowsAndCols;
  
    this.gameBoard.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        const x = colIndex * cellWidth;
        const y = rowIndex * cellHeight;
  
        switch (cell) {
          case "snake":
            // Draw snake image
            this.context.drawImage(this.snakeImage, x, y, cellWidth, cellHeight);
            break;
          case "food":
            // Draw food image
            this.context.drawImage(this.foodImage, x, y, cellWidth, cellHeight);
            break;
          case null:
            this.context.fillStyle = "white";
            this.context.fillRect(x, y, cellWidth, cellHeight);
            break;
        }
      });
    });
  }
  

  private setFoodOnBoard() {
    // if snake just ate, reset food position by setting the food coords to negative
    // this will trigger the change in food position coordinate
    if (this.snake.justAte) {
      this.foodCoordinate = {
        row: -1,
        col: -1,
      };
    }

    this.gameBoard[this.foodCoordinate.row][this.foodCoordinate.col] = "food";
  }

  private setSnakeOnBoard() {
    const newBoard = this.gameBoard.map((row) => row.fill(null));
    this.snake.bodyCoordinates.forEach((snakeCoord) => {
      newBoard[snakeCoord.row][snakeCoord.col] = "snake";
    });
    this.gameBoard = newBoard;
  }

  private renderBoard() {
    this.setSnakeOnBoard();
    this.setFoodOnBoard();
    this.generateGrid();
  }

  private snakeIsOutOfBounds() {
    // check if the snake head's coord is out of bounds

    const snakeHead = this.snake.headCoordinate;
    const boundingArea = {
      min: 0,
      max: this.numOfRowsAndCols - 1,
    };
    const rowOutOfBounds =
      snakeHead.row > boundingArea.max || snakeHead.row < boundingArea.min;
    const columnOutOfBounds =
      snakeHead.col > boundingArea.max || snakeHead.col < boundingArea.min;

    return rowOutOfBounds || columnOutOfBounds;
  }

  private snakeHitsBody() {
    // check if head has similar coord with existing body coords

    const snakeBody = this.snake.bodyCoordinates.slice(
      0,
      this.snake.length - 1
    );
    const snakeHead = this.snake.headCoordinate;
    const match = snakeBody.find((bodyCoord) => {
      const matchingRow = bodyCoord.row === snakeHead.row;
      const matchingCol = bodyCoord.col === snakeHead.col;
      return matchingRow && matchingCol;
    });

    return match !== undefined;
  }

  private isGameOver() {
    return this.snakeHitsBody() || this.snakeIsOutOfBounds();
  }

  animate(isPlaying: boolean) {
    this.internalPlayState = isPlaying;

    if (this.currentFrameCount < this.staggerFrame) {
      this.currentFrameCount++;
    } else {
      this.currentFrameCount = 0;

      if (this.externalScore !== this.score) {
        this.setScore(this.score);
      }

      if (this.isGameOver()) {
        this.setIsGameOver(true);
        return;
      }

      this.context.clearRect(
        0,
        0,
        this.boardSidesLength,
        this.boardSidesLength
      );
      this.renderBoard();
      this.snake.move(this.foodCoordinate);
    }

    this.internalPlayState &&
      requestAnimationFrame(() => this.animate(this.internalPlayState));
  }
}