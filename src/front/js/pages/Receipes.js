import React from "react";
import "../../styles/receipe.css";


export const Receipes = () =>{

    return(
        <body>
        <div className = "body">
             <h1 className = "vegan title">Vegan Receipe</h1>
             <div className="image">
            <img src = "https://talisa.progressionstudios.com/wp-content/uploads/2014/09/Fotolia_6221608_Subscription_L-1200x715.jpg"/>
             </div>

            <div className="learn-more">
					<div className="learn-more-item">
						<h1 className="ingredients"><i class="fa-solid fa-kitchen-set"></i>Ingredients</h1>
						<h6> NYC's vegan ramen, found at spots like Ramen Hood,
							is a standout. Rich broth, noodles, tofu, and veggies
							make it a creative and comforting dish, highlighting the city's vegan scene.
						</h6>

						<a href="#New-York1"><button type="button" className="btn btn-warning">Learn More</button></a>

					</div>

					<div className="learn-more-item">
                        <h1 className="ingredients"><i class="fa-regular fa-clock"></i>Cook Time</h1>
						<h6>In Los Angeles, vegan sushi at spots like Shojin or Sushi Roku shines.
							Innovative ingredients like tofu and avocado wrapped in seaweed and rice
							offer a delicious take on traditional sushi, showcasing the city's vibrant vegan scene.
						</h6>


						<a href="#Los-Angeles2"><button type="button" className="btn btn-warning">Learn More</button></a>

					</div>

					<div className="learn-more-item">
                        <h1 className="ingredients"><i class="fa-solid fa-sheet-plastic"></i>Directions</h1>
						<h6>In Houston, vegan BBQ at places like Green Seed Vegan or
							BBQ Revolution stands out. Plant-based versions of classic BBQ dishes
							offer a flavorful twist, showcasing the city's diverse vegan scene.</h6>

						<a href="#Houston3"><button type="button" className="btn btn-warning">Learn More</button></a>

					</div>
				</div>

        
        </div>

       
       </body>

    );

};