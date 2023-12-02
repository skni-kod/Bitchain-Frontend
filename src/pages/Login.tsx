import React from "react";
import { getUser, login } from "../services/apiAuth";

export default function Login() {
    login()
//   getUser();
  return <div>Login</div>;
}
