import { useState } from "react";
import "./LoginComponent.css";

const LoginComponent = () => {
  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(userName);
    console.log(password);
  };
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container login-container">
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            value={userName}
            onChange={handleUserName}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            value={password}
            onChange={handlePassword}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        <button type="submit" className="btn btn-primary login-button-padding">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginComponent;
