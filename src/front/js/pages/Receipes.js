import React from "react";
import "../../styles/receipe.css";


export const Receipes = () =>{

    return(
        <body>
        <div>
             <h1><i class="fa-solid fa-bowl-food"></i>Vegan Receipe</h1>
            <img src = "https://talisa.progressionstudios.com/wp-content/uploads/2014/09/Fotolia_6221608_Subscription_L-1200x715.jpg"/>
            <div>
                <h1 className="ingredients"><i class="fa-solid fa-kitchen-set"></i>Ingredients</h1>
                <h1 className="ingredients"><i class="fa-regular fa-clock"></i>Cook Time</h1>
                <h1 className="ingredients"><i class="fa-solid fa-sheet-plastic"></i>Directions</h1>
            </div> 


        
        </div>

       
       </body>

    );

};