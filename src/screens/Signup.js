import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";

export default function Signup() {
  const [credential, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geoLocation: "",
  });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/createUser", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: credential.name,
        email: credential.email,
        password: credential.password,
        location: credential.geoLocation,
      }),
    });
    const data = await response.json();
    console.log(data);
    if (!data.status) {
      alert("Enter valid credentials");
    }
    if (data.status) {
      navigate('/login');
    }
  };

  const onChange = (event) => {
    setCredentials({
      ...credential,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={credential.name}
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={credential.email}
              onChange={onChange}
              required
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={credential.password}
              onChange={onChange}
              minLength="8"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              name="geoLocation"
              value={credential.geoLocation}
              onChange={onChange}
              required
            />
          </div>
          <button type="submit" className="m-3 btn btn-primary">
            Submit
          </button>
          <Link to="/login" className="m-3 btn btn-danger">
            Already a user
          </Link>
        </form>
      </div>
    </>
  );
}
