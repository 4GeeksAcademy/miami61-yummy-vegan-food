import React, { useState, useEffect } from "react";
import "../../styles/receipe.css";


export const Receipes = () => {
	const [recipe, setRecipe] = useState(null);
	const [error, setError] = useState('');

	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const recipeId = urlParams.get('id');

	useEffect(() => {
		const fetchRecipe = async () => {
			const url = `https://tasty.p.rapidapi.com/recipes/get-more-info?id=${recipeId}`;
			const options = {
				method: 'GET',
				headers: {
					'X-RapidAPI-Key': process.env.RAPID_KEY,
					'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
				}
			};

			try {
				const response = await fetch(url, options);
				if (!response.ok) {
					throw new Error(`API call failed with status: ${response.status}`);
				}
				const result = await response.json();
				console.log(`Recipe details: ${result.name}`, result);
				setRecipe(result);
			} catch (error) {
				console.error("Failed to fetch data:", error.message);
				setError(error.message);
			}
		};

		if (recipeId) {
			fetchRecipe();
		} else {
			setError('No recipe ID provided in the URL.');
		}
	}, [recipeId]);

	if (error) {
		return <div>Error: {error}</div>;
	}

	if (!recipe) {
		return <div>Please be patient, loading...</div>;
	}

	// Assuming recipe is directly the object as received from the API
	const { name, description, thumbnail_url, instructions, sections, nutrition } = recipe;

	return (
		<div className="background">
			<h1 className="title">{name}</h1>
			<p dangerouslySetInnerHTML={{ __html: description }}></p>
			{thumbnail_url && <img className="image" src={thumbnail_url} alt={name} />}

			<div className="vegna-mix">
				<div className="vegan-item">
					<h2>Ingredients</h2>
					{sections.map((section, index) =>
						section.components.map((component, idx) => (
							<p key={idx}>{component.raw_text} ({component.measurements.map(measure => `${measure.quantity} ${measure.unit.name}`).join(", ")})</p>
						))
					)}
				</div>

				<div className="vegan-item">
					<h2>Instructions</h2>
					{instructions.map((instruction, index) => (
						<p key={index}>{instruction.display_text}</p>
					))}
				</div>

				{nutrition && (
					<div className="vegan-item">
						<h2>Nutrition</h2>
						<ul>
							<li>Calories: {nutrition.calories}</li>
							<li>Carbohydrates: {nutrition.carbohydrates}</li>
							<li>Fat: {nutrition.fat}</li>
							<li>Fiber: {nutrition.fiber}</li>
							<li>Protein: {nutrition.protein}</li>
							<li>Sugar: {nutrition.sugar}</li>
							<li>Last Updated: {new Date(nutrition.updated_at).toLocaleDateString()}</li>
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};