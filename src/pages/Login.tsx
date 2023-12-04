import React, { useEffect } from "react";
import { getUser, login } from "../services/apiAuth";
import { useLogin } from "../features/Authentication/useLogin";

export default function Login() {
  const { login, isPending } = useLogin();
  useEffect(
    function () {
      login({ email: "test@judi.com", password: "pawel" });
      // console.log(isPending);
    },
    [login]
  );
  // getUser();
  return <div className="bg-white dark:bg-bgDark">
    
  </div>;
}
