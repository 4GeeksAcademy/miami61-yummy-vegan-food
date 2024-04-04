import React from "react";
import { userRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";


export const Login = () => {
	const userRef = useRef();
	const errRef = useRef();

	const [user, setUser] = useState('');
	const [pwd, setPwd] = useState('');
	const [errMsg, setErrMsg] = useState('');
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		userRef.current.focus();
	}, [])

	useEffect(() => {
		setErrMsg('');
	}, [user, pwd])

	return (
		<section className="container mb-auto">
			<p ref={errRef} className={errMsg ? "errmsg" : "offscreen" } aria-live="assertive">{errMsg}</p>
			<form className="mb-auto">
					<h1 className="account align-items-center">Log In</h1>
				<div className="mb-3">
					<label className="form-label" htmlFor="email">Email</label>
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
					<button type="submit" className="btn submitbtn mb-3">Forget Password</button>
				</div>
				<Link to="/registration" className="account">Create new account</Link>
			</form>
		</section>
	);
};
