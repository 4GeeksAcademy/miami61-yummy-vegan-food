import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
	// const [user, setUser] = useState('');
	// const [pwd, setPwd] = useState('');
	// const [success, setSuccess] = useState(false);
	const { store, actions } = useContext(Context)
	const [credentials, setCredentials] = useState({ email: '', password: '' });
	const [errMsg, setErrMsg] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		setErrMsg('');
	}, [credentials.email, credentials.password])

	function handleSubmit(event) {
		event.preventDefault();
		// const email = event.target.email.value;
		// const password = event.target.password.value;
		actions.login(credentials.email, credentials.password)
		navigate('/');
		// const { email, password } = credentials;

		// // Check if email and password are provided
		// if (email && password) {
		// 	// Make a request to check if email and password are in the database
		// 	fetch(process.env.BACKEND_URL + "/api/login", {
		// 		method: "POST",
		// 		headers: { 'Content-Type': "application/json" },
		// 		body: JSON.stringify({
		// 			email: email,
		// 			password: password
		// 		})
		// 	}).then(response => {
		// 		if (response.status === 200) {
		// 			// Email and password are valid, navigate to main tab
		// 			navigate('/');
		// 		} else if (response.status === 400) {
		// 			// Email or password are incorrect
		// 			return response.json().then(data => {
		// 				throw new Error(data.message || "Incorrect email or password");
		// 			});
		// 		} else {
		// 			// Other server errors
		// 			throw new Error("Something went wrong with the server.");
		// 		}
		// 	}).catch(error => {
		// 		// Handle errors
		// 		// setSucMsg(null);
		// 		setErrMsg(error.message);
		// 	});
		// } else {
		// 	// Email or password is missing
		// 	setErrMsg("Please enter both email and password.");
		// }
	}

	function handleChange(e) {
		setCredentials({ ...credentials, [e.target.id]: e.target.value });
	}
	return (
		<section className="container mb-auto">
			<div className="container row">
				<div className="align-self-center">
					<h1>Login</h1>
				</div>
				<div className="col-md-12 col-lg-6 align-self-center">
					<h1>Welcome to Yummy vegan food</h1></div>
				<div className="col-md-12 col-lg-6">
					<form className="mb-auto" onSubmit={handleSubmit}>
						<h1 className="account align-items-center">Log In</h1>
						<div className="mb-3">
							<label className="form-label" htmlFor="email">email</label>
							<input className="form-control" id="email" type="email" placeholder="email" value={credentials.email} onChange={handleChange} />
						</div>
						<div className="mb-3">
							<label className="form-label" htmlFor="password">Password</label>
							<input className="form-control" id="password" type="password" placeholder="password" value={credentials.password} onChange={handleChange} />
						</div>

						<div className="form-check">
							<input className="form-check-input " type="checkbox" value="" id="flexCheckChecked" />
							<label className="form-check-label" htmlFor="flexCheckChecked">
								Remember me
							</label>
						</div>

						<div className="col-auto d-flex gap-5 align-items-center">
							<button type="submit" className="btn submitbtn mb-3">Submit</button>
							<button type="submit" className="btn submitbtn mb-3">Forget Password</button>
						</div>
						<Link to="/registration" className="account">Create new account</Link>
					</form>
				</div>
			</div>
		</section>
	);
};
