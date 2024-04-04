import React, { useState } from "react";
import { Link } from "react-router-dom";




export const Registration = () => {
	const[ errMsg, setErrMsg]= useState(null) 
	function handleSubmit(event){
		event.preventDefault()
		fetch(process.env.BACKEND_URL + "/register", {
			method:"POST", 
			headers:{'Content-Type':"application/json"},
			mode:"cors",
			body:{
				username:event.target.name.value,
				email:event.target.email.value,
				password:event.target.password.value
				}
		}).then(response => {
			if (response.status == 400){
				throw new Error(response.json().message)
			}
			return response.json()
		}).then(result => {
			console.log(result)
		}).catch(error => {
			setErrMsg(error.message)
		})
	}
	return (
		<div className="container">
			<form className="mb-auto" onSubmit={handleSubmit}>				
				<div className="mb-3">
					<label className="form-label" htmlFor="name" >Name</label>
					<input className="form-control" id="name" type="text" placeholder="name"  name="name"/>
				</div>
				<div className="mb-3">
					<label className="form-label" htmlFor="email">Email</label>
					<input className="form-control" id="email" type="email" placeholder="email" name="email"/>
				</div>
				<div className="mb-3">
					<label className="form-label" htmlFor="password">Password</label>
					<input className="form-control" id="password" type="password" placeholder="password" name="password"/>
				</div>
				<div className="mb-3">
					<label className="form-label" htmlFor="confirm_password">Confirm Password</label>
					<input className="form-control" id="confirm_password" type="password" placeholder="please confirm your password" name="confirm_password"/>
				</div>
				{errMsg && <div class="alert alert-danger" role="alert">{errMsg}</div>}
				<div class="col-auto">
					<button type="submit" className="btn submitbtn mb-3">Submit</button>					
				</div>
				<Link to="/login" className="account">Already have account</Link>
			</form>
		</div>
	);
};
