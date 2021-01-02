import axios from "axios";
import React from "react";
import { API_AUTH, API_CHECK, API_GET_ID } from "../../API_endpoints";

export const UserCheck = async () => {
  const res = await axios({
    method: "GET",
    withCredentials: true,
    url: API_AUTH,
  });
  console.log(res);
  // change the redux store state HERE
  return res.data.logInStatus;
};

export const getUserID = async () => {
  const res = await axios({
    method: "GET",
    withCredentials: true,
    url: API_GET_ID,
  });
  console.log(res);

  return res.data.id;
};
