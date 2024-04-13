import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login = ({ setisLoggedIn }) => {
	const [credentials, setCredentials] = useState({ email: '', password: '' });
	const [errMsg, setErrMsg] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		setErrMsg('');
	}, [credentials.email, credentials.password])

	function handleSubmit(event) {
		event.preventDefault();
		const { email, password } = credentials;

		if (email && password) {
			fetch(process.env.BACKEND_URL + "/api/login", {
				method: "POST",
				headers: { 'Content-Type': "application/json" },
				body: JSON.stringify({
					email: email,
					password: password
				})
			}).then(response => {
				if (response.status === 200) {
					localStorage.setItem('token', response.token)
					setisLoggedIn(true)
					alert("Welcome to Yummy Vegan Foods")
					navigate('/');
				} else if (response.status === 400) {
					return response.json().then(data => {
						throw new Error(data.message || "Incorrect email or password");
					});
				} else {
					throw new Error("Something went wrong with the server.");
				}
			}).catch(error => {
				setErrMsg(error.message);
			});
		} else {
			setErrMsg("Please enter both email and password.");
		}
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
							<Link to="/forgetpassword">
								<button type="submit" className="btn submitbtn mb-3">Forget Password</button>
							</Link>
						</div>
						<Link to="/registration" className="account">Create new account</Link>
					</form>
				</div>
			</div>
		</section>
	);
};
