import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Registration = () => {
	const [errMsg, setErrMsg] = useState(null)
	const [sucMsg, setSucMsg] = useState(null)
	const navigate = useNavigate()


	function handleSubmit(event) {
		event.preventDefault()
		if (event.target.password.value === event.target.confirm_password.value) {
			fetch(process.env.BACKEND_URL + "/api/register", {
				method: "POST",
				headers: { 'Content-Type': "application/json" },
				body: JSON.stringify({
					username: event.target.name.value,
					email: event.target.email.value,
					password: event.target.password.value
				})
			}).then(response => {
				if (response.status == 400) {
					return response.json().then(data => {
						throw new Error(data.message || "Something went wrong");
					});
				}
				return response.json()
			}).then(result => {
				setErrMsg(null)
				setSucMsg(result.message)
				setTimeout(() => {
					navigate('/login')
				}, 2000)
			}).catch(error => {
				setSucMsg(null)
				setErrMsg(error.message)
			})
		} else {
			setErrMsg("password does not match")
		}

	}
	return (
		<div className="container row">
			<div className="row align-self-center">
				<h1>Registration</h1>
			</div>
			<div className="col-md-12 col-lg-6 align-self-center">
				<h1>Welcome to Yummy vegan food</h1>
			</div>
			<div className="col-md-12 col-lg-6">
				<div className="container">
					<form className="mb-auto" onSubmit={handleSubmit}>
						<div className="mb-3">
							<label className="form-label" htmlFor="name" >Name</label>
							<input className="form-control" id="name" type="text" placeholder="name" name="name" />
						</div>
						<div className="mb-3">
							<label className="form-label" htmlFor="email">Email</label>
							<input className="form-control" id="email" type="email" placeholder="email" name="email" />
						</div>
						<div className="mb-3">
							<label className="form-label" htmlFor="password">Password</label>
							<input className="form-control" id="password" type="password" placeholder="password" name="password" />
						</div>
						<div className="mb-3">
							<label className="form-label" htmlFor="confirm_password">Confirm Password</label>
							<input className="form-control" id="confirm_password" type="password" placeholder="please confirm your password" name="confirm_password" />
						</div>
						{errMsg && <div class="alert alert-danger" role="alert">{errMsg}</div>}
						{sucMsg && <div class="alert alert-success" role="alert">{sucMsg}</div>}
						<div class="col-auto">
							<button type="submit" className="btn submitbtn mb-3">Submit</button>
						</div>
						<Link to="/login" className="account">Already have account</Link>
					</form>
				</div>
			</div>
		</div>
	);
};
