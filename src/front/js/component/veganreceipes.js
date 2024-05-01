import React from "react";




export const VeganReceipes = (props) => {
	
	let receipe = props.receipe

    return (
		<div className="learn-more-item2 vegan-card-receipe"> 
			<i id="NY2" class="fa-solid fa-leaf"></i>
			<h1 className="receipe_name">{receipe.name}</h1>
			<h1>{props.getNewReceipes}</h1>
			{/* <h6> NYC's vegan ramen, found at spots like Ramen Hood, 
				is a standout. Rich broth, noodles, tofu, and veggies 
				make it a creative and comforting dish, highlighting the city's vegan scene.
			</h6> */}
			<img className ="pictures"src={receipe.thumbnail_url}/>	
			<a href={`http://localhost:3000/receipes?id=${receipe.id}`}><button type="button" className="btn btn-warning">Get Recipe</button></a>
		</div>
    );

};