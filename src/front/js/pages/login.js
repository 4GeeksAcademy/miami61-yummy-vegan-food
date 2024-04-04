import React from "react";
import { Link } from "react-router-dom";

import opt1Logo from "../../img/opt1Logo.png";



export const Login = () => {
	return (
		<div className="container mb-auto">
			<form className="mb-auto">

				<div className="mb-3">
					<label className="form-label" htmlFor="email">email</label>
					<input className="form-control" id="email" type="email" placeholder="email" />
				</div>
				<div className="mb-3">
					<label className="form-label" htmlFor="password">Password</label>
					<input className="form-control" id="password" type="password" placeholder="password" />
				</div>

				<div class="form-check">
					<input class="form-check-input " type="checkbox" value="" id="flexCheckChecked" />
					<label class="form-check-label" for="flexCheckChecked">
						Remember me
					</label>
				</div>

				<div class="col-auto d-flex gap-5 align-items-center">
					<button type="submit" className="btn submitbtn mb-3">Submit</button>
					<Link to="/forgetpassword">
						<button type="submit" className="btn submitbtn mb-3">Forget Password</button>
					</Link>
				</div>
				<Link to="/registration" className="account">Create new account</Link>
			</form>
		</div>
	);
};
