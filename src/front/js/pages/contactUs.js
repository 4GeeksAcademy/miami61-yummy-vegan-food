import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const ContactUs = ({ setisLoggedIn }) => {
  const [contactInfo, setcontactInfo] = useState({ email: '', comment: '' });
  const [errMsg, setErrMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setErrMsg('');
  }, [contactInfo.email, contactInfo.password])

  function handleSubmit(event) {
    event.preventDefault();
    const { email, comment } = contactInfo;

    if (email && comment) {
      setisLoading(true)
      fetch(process.env.BACKEND_URL + "/api/contactUs", {
        method: "POST",
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify({
          email: email,
          comment: comment
        })
      }).then(response => {
        if (response.status === 200) {
          setisLoading(false)
          setSuccessMsg('Thank you')
        } else if (response.status === 400) {
          return response.json().then(data => {
            setisLoading(false)
            throw new Error(data.message || "Please Insert your email and comment");
          });
        } else {
          setisLoading(false)
          throw new Error("Something went wrong with the server.");
        }
      }).catch(error => {
        setErrMsg(error.message);
      });
    } else {
      setisLoading(false)
      setErrMsg("Enter both email and the comment");
    }
  }
  function resetInput() {
    setcontactInfo({})
  }
  function handleChange(e) {
    setcontactInfo({ ...contactInfo, [e.target.id]: e.target.value });
  }
  return (
    <section className="container mb-auto nearMeDiv">
      <div className="container row">

        <div className="col mt-5">
          {!successMsg && !isLoading &&
            <form className="mb-auto" onSubmit={handleSubmit}>
              <h1 className="account align-items-center">Contact us</h1>
              <div className="mb-3">
                <label className="form-label" htmlFor="name">Name</label>
                <input className="form-control" id="name" type="text" placeholder="name" value={contactInfo.name} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">Email</label>
                <input className="form-control" id="email" type="email" placeholder="email" value={contactInfo.email} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="comment">Comment</label>
                <textarea className="form-control" id="comment" type="text" placeholder="Give us your comment" value={contactInfo.comment} onChange={handleChange} />
              </div>

              <div className="col-auto d-flex gap-5 align-items-center">
                <button type="submit" className="btn submitbtn mb-3">Submit</button>
              </div>

            </form>
            || isLoading &&
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }

          {successMsg &&
            <div>
              <h2 className="text-center">{successMsg}!!!</h2>
              <Link to="/" className="btn submitbtn mb-3"> Return to Home page.</Link>
            </div>
          }

          {errMsg && errMsg}

        </div>
      </div>
    </section>
  );
};
