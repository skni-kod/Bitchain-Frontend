import React, { useEffect } from "react";
import { getUser, login } from "../services/apiAuth";
import { useLogin } from "../features/Authentication/useLogin";
import { CiLock } from "react-icons/ci";
import FormInput from "../ui/FormInput";
import { GoPerson } from "react-icons/go";
import LoginCard from "../ui/login/LoginCard";
import { Link } from "react-router-dom";

export default function Login() {
  const { login, isPending } = useLogin();
  useEffect(
    function () {
      login({ email: "olaochal@pawel.com", password: "judijuddsi" });
      // console.log(isPending);
    },
    [login]
  );
  // getUser();
  return (
    <div className="flex justify-center items-center bg-white dark:bg-bgDark h-screen  ">
      {/* <div className="flex "> */}
        {/* <div className="absolute top-[20%] left-20 h-40 w-40 rotate-[10deg]">
          <img src="/logo-icon-white.svg" />
        </div> */}
        <LoginCard />
        {/* <div>sd</div> */}
      {/* </div> */}
    </div>
  );
}