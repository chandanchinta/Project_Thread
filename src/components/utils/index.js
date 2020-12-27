import axios from "axios";
import React from "react";
import { API_AUTH } from "../../API_endpoints";

const UserCheck = async () => {
  const res = await axios({
    method: "GET",
    withCredentials: true,
    url: API_AUTH,
  });
  // change the redux store state HERE
  return res.data.logInStatus;
};

export default UserCheck;
