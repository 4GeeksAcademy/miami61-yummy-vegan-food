import React from 'react';

const PhotoCarousel = ({ photos, maxWidth, height }) => {
    return (
        photos && photos.length > 0 && (
            <div
                id="photoCarousel"
                className="carousel carousel-dark slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    {photos.map((photo, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === 0 ? 'active' : ''}`}
                        >
                            <img
                                src={photo.getUrl()}
                                className="d-block mx-auto"
                                alt={`Photo ${index}`}
                                style={{ 
                                    maxWidth: maxWidth, 
                                    height: height
                                }}
                            />
                        </div>
                    ))}
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#photoCarousel"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#photoCarousel"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        )
    );
};

export default PhotoCarousel;
