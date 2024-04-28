import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"

export const Forgetpassword = () => {
	const [hastoken, setHastoken] = useState(false)
	const [email, setEmail] = useState('')
	const [error, setErrMsg] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const { token } = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		if (token) {
			setHastoken(true)
		}
	}, [token])

	function handleSubmit(event) {
		event.preventDefault()
		if (!hastoken) {
			fetch(process.env.BACKEND_URL + "/api/forget_password", {
				method: "POST",
				headers: { 'Content-Type': "application/json" },
				body: JSON.stringify({
					email: email,
					// password: password
				})
			}).then(response => {
				if (response.status === 200) {
					console.log("email sent to reset password")
					console.log("response", response.message)
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
			if (password === confirmPassword) {
				fetch(process.env.BACKEND_URL + "/api/change_password", {
					method: "PUT",
					headers: { 'Content-Type': "application/json" },
					body: JSON.stringify({
						// email: email,
						password: password,
						secrete: token
					})
				}).then(response => {
					if (response.status === 200) {
						console.log("response", response.message)
						navigate('/login')
					} else if (response.status === 400) {
						return response.json().then(data => {
							throw new Error(data.message || "Password is not provided");
						});
					} else {
						throw new Error("Something went wrong with the server.");
					}
				}).catch(error => {
					setErrMsg(error.message);
				});
			}
		}
	}
	return (
		<div className="container">
			<form onSubmit={handleSubmit}>
				{!hastoken &&
					<div className="mb-3">
						<label className="form-label" htmlFor="email">email</label>
						<input onChange={(e) => {
							setEmail(e.target.value)
						}} className="form-control" id="email" type="email" placeholder="email" />
					</div>
				}
				{hastoken &&
					<div>
						<div className="mb-3">
							<label className="form-label" htmlFor="password">New Password</label>
							<input onChange={(e) => {
								setPassword(e.target.value)
							}} className="form-control" id="password" type="password" placeholder="new password" />
						</div>
						<div className="mb-3">
							<label className="form-label" htmlFor="confirm_password">Confirm New Password</label>
							<input onChange={(e) => {
								setConfirmPassword(e.target.value)
							}} className="form-control" id="confirm_password" type="password" placeholder="please confirm your new password" />
						</div>
					</div>
				}
				<div class="col-auto">
					<button type="submit" className="btn submitbtn mb-3">Submit</button>
				</div>
				{error && error.length && <div class="alert alert-danger" role="alert">{error}</div>}
			</form>
		</div>
	);
};
