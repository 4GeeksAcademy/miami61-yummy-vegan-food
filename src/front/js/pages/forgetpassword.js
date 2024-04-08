import React from "react";

export const Forgetpassword = () => {
	return (
		<div className="container">
			<form>

				<div className="mb-3">
					<label className="form-label" htmlFor="email">email</label>
					<input className="form-control" id="email" type="email" placeholder="email"/>
				</div>
				<div className="mb-3">
					<label className="form-label" htmlFor="password">New Password</label>
					<input className="form-control" id="password" type="password" placeholder="new password"/>
				</div>
				<div className="mb-3">
					<label className="form-label" htmlFor="confirm_password">Confirm New Password</label>
					<input className="form-control" id="confirm_password" type="password" placeholder="please confirm your new password"/>
				</div>
				<div class="col-auto">
					<button type="submit" className="btn submitbtn mb-3">Submit</button>
				</div>
			</form>
		</div>
	);
};
