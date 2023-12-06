import React, { useEffect } from "react";
import { getUser, login } from "../services/apiAuth";
import { useLogin } from "../features/Authentication/useLogin";
import FormInput from "../ui/FormInput";

export default function Login() {
  const { login, isPending } = useLogin();
  useEffect(
    function () {
      login({ email: "olaochal@pawel.com", password: "judijudi" });
      // console.log(isPending);
    },
    [login]
  );
  // getUser();
  return (
    <div className="flex justify-center items-center bg-white dark:bg-bgDark h-screen  ">
      <div className="w-96">
        <h3>Login Yout Account</h3>
        <input className="w-full h-7 border-none text-black" type="text" />
        <FormInput />
      </div>
    </div>
  );
}
