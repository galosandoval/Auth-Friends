import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const initialValue = {
  username: "",
  password: "",
};

export const Login = () => {
  const [credentials, setCredentials] = useState(initialValue);

  const history = useHistory();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        history.push("/friends");
      })
      .catch((err) => console.log(err, "lol"));
    setCredentials(credentials);
  };

  return (
    <form onSubmit={login}>
      <input
        name="username"
        type="text"
        placeholder="Username"
        value={credentials.username}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={credentials.password}
        onChange={handleChange}
      />
      <button>Log In</button>
    </form>
  );
};
