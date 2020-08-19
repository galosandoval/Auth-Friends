import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const initialFriends = [];

const initialFormValues = {
  id: new Date(),
  name: "",
  age: "",
  email: "",
};

export const Friends = () => {
  const [illBeThereForYou, SetIllBeThereForYou] = useState(initialFriends);
  const [form, setForm] = useState(initialFormValues);

  const addFriend = {
    ...form,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("api/friends", addFriend)
      .then((res) => {
        SetIllBeThereForYou([...illBeThereForYou, addFriend]);
      })
      .catch((err) => {
        console.log(err, "lolol");
      });
    setForm(initialFormValues);
  };

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    axiosWithAuth()
      .get("api/friends")
      .then((res) => {
        console.log(res);
        SetIllBeThereForYou(res.data);
      });
  }, []);

  return (
    <div>
      {illBeThereForYou.map((friend) => {
        return <p key={friend.id}>{friend.name}</p>;
      })}
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={1000}
      />
      <div>
        <form onSubmit={onSubmit}>
          <input
            name="name"
            type="text"
            placeholder="new friend's name"
            value={illBeThereForYou.name}
            onChange={onChange}
          />
          <input
            name="age"
            type="text"
            placeholder="new friend's age"
            value={illBeThereForYou.age}
            onChange={onChange}
          />
          <input
            name="email"
            type="text"
            placeholder="new friend's email"
            value={illBeThereForYou.email}
            onChange={onChange}
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};
