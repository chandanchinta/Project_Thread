import axios from "axios";
import React from "react";
import { API_AUTH, API_CHECK } from "../../API_endpoints";

const UserCheck = async () => {
  const res = await axios({
    method: "GET",
    withCredentials: true,
    url: API_AUTH,
  });
  console.log(res);
  // change the redux store state HERE
  return res.data.logInStatus;
};

export default UserCheck;
