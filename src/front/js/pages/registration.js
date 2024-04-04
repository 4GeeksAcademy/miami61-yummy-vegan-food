import React from "react";
import { Link } from "react-router-dom";

import opt1Logo from "../../img/opt1Logo.png";



export const Registration = () => {
	return (
		<div className="container">
			<form className="mb-auto">

				<div className="mb-3">
					<label className="form-label" htmlFor="name">Name</label>
					<input className="form-control" id="name" type="text" placeholder="name"/>
				</div>
				<div className="mb-3">
					<label className="form-label" htmlFor="email">email</label>
					<input className="form-control" id="email" type="email" placeholder="email"/>
				</div>
				<div className="mb-3">
					<label className="form-label" htmlFor="password">Password</label>
					<input className="form-control" id="password" type="password" placeholder="password"/>
				</div>
				<div className="mb-3">
					<label className="form-label" htmlFor="confirm_password">Confirm Password</label>
					<input className="form-control" id="confirm_password" type="password" placeholder="please confirm your password"/>
				</div>
				
				<div class="col-auto">
					<button type="submit" className="btn submitbtn mb-3">Submit</button>					
				</div>
				<Link to="/login" className="account">Already have account</Link>
			</form>
		</div>
	);
};
