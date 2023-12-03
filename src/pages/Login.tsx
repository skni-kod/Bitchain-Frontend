import React from "react";
import { getUser, login } from "../services/apiAuth";

export default function Login() {
    login({email: "olaochal@pawel.com", password: "judijudi"})
  // getUser();
  return <div>Login</div>;
}
