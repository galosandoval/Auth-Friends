import React, { useState } from "react";
import axios from "axios";

const initialValue = {
  username: "Lambda School",
  password: "i<3Lambd4",
};

export const Login = (props) => {
  const [credentials, setCredentials] = useState(initialValue);

  const handleChange = (e) => {
    setCredentials({
      credentials: {
        ...credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch((err) => console.log(err, "lol"));
  };

  return (
    <form onSubmit={login}>
      <input type="text" placeholder="Username" onChange={handleChange} />
      <input type="password" placeholder="Password" onChange={handleChange} />
      <button>Log In</button>
    </form>
  );
};
