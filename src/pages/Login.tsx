import React, { useEffect } from "react";
import { getUser, login } from "../services/apiAuth";
import { useLogin } from "../features/Authentication/useLogin";
import { CiLock } from "react-icons/ci";
import FormInput from "../ui/FormInput";
import { GoPerson } from "react-icons/go";

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
  return (
    <div className="flex justify-center items-center bg-white dark:bg-bgDark h-screen  ">
      <div className="absolute top-[20%] left-1/4 h-60 w-60 rotate-[10deg]">
        <img src="/logo-icon-white.svg" />
      </div>
      <div className="relative flex flex-col items-center justify-around z-10 p-10 w-96 h-96 rounded-lg  border-solid border-[1px] border-main bg-white dark:bg-bgDark">
        <h3 className="dark:text-white text-bgDark">Login Yout Account</h3>
        <div className="w-5/6">
          <FormInput placeholder="Email" icon={<GoPerson />} />
          <FormInput placeholder="Password" icon={<CiLock />} />
        </div>
      </div>
    </div>
  );
}
