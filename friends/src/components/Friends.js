// for friends GET
// getData = () => {
//   axiosWithAuth()
//   .get('/friends/')
//   .then(res => {
//     this.setState({
//       friends: res.data
//     })
//   })
// }

import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialFriends = [];

const initialFormValues = {
  name: "",
  age: "",
  email: "",
};

export const Friends = () => {
  const [illBeThereForYou, SetIllBeThereForYou] = useState(initialFriends);
  const [form, setForm] = useState(initialFormValues);

  const addFriend = {
    ...form
  }

  const onSubmit = e => {
    e.preventDefault()
    axiosWithAuth()
    .post('api/friends', addFriend)
    .then(res => {
      SetIllBeThereForYou([
        ...illBeThereForYou, addFriend
      ])
    })
  }

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

  return null;
};
