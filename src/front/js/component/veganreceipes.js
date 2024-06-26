import React from "react";
import { Link } from "react-router-dom";


export const VeganReceipes = (props) => {
	let receipe = props.receipe;


	return (
		<div className="learn-more-item2 vegan-card-receipe" key={receipe.id}>
			<i id="NY2" className="fa-solid fa-leaf"></i>
			<h1 className="receipe_name">{receipe.name}</h1>
			<h1>{props.getNewReceipes}</h1>
			{/* <h6> NYC's vegan ramen, found at spots like Ramen Hood, 
				is a standout. Rich broth, noodles, tofu, and veggies 
				make it a creative and comforting dish, highlighting the city's vegan scene.
			</h6> */}
			<img className="pictures" src={receipe.thumbnail_url} alt={receipe.name} />
			<Link to={`/receipes?id=${receipe.id}`}>
				<button type="button" className="btn btn-warning" style={{ color: 'white' }}>Get Recipe</button>
			</Link>
		</div>
	);

};