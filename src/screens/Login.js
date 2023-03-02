import { useState } from "react";
import React from "react";
import { Link , useNavigate} from "react-router-dom";

export default function Login() {
  const [credential, setCredentials] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: credential.email,
        password: credential.password,
      }),
    });
    const data = await response.json();
    console.log(data);
    if (!data.status) {
      alert("Enter valid credentials");
    }
    if (data.status) {
      localStorage.setItem('data',data.token);
      navigate('/');
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
          <button type="submit" className="m-3 btn btn-primary">
            Submit
          </button>
          <Link to="/createUser" className="m-3 btn btn-danger">
            I'm a new user 
          </Link>
        </form>
      </div>
    </>
  );
}
