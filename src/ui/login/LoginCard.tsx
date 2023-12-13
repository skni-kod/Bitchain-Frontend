import FormInput from "../FormInput";
import { GoPerson } from "react-icons/go";
import { CiLock } from "react-icons/ci";
import Button from "../Button";
import { Link } from "react-router-dom";
import useDarkMode from "../../hooks/useDarkMode";
import React, { useEffect, useState } from "react";
import { useLogin } from "../../features/Authentication/useLogin";
import toast from "react-hot-toast";

export default function LoginCard() {
  const { login, isPending, errors } = useLogin();
  const { isDarkMode } = useDarkMode();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // const emailErr = errors?.email.at(0)
  // const errorsApi = errors as ApiError

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    login({ email, password });
    console.log(isPending);
    console.log(errors);
    console.log(isPending);
  }

  useEffect(function(){
    console.log(errors);
  },[isPending])

  return (
    <div className="relative flex items-center justify-center gap-5 z-10 w-full h-5/6 rounded-lg  bg-white dark:bg-bgDark dark:text-white text-bgDark sm:h-[500px] sm:w-full overflow-hidden">
      <form
        className="flex flex-col justify-center items-center w-5/6 sm:w-[400px] gap-5 sm:p-10  bg-white dark:bg-bgDark "
        onSubmit={(e: React.FormEvent) => onSubmit(e)}
      >
        <h3 className="text-xl xs:text-2xl">Login Your Account</h3>
        <FormInput
          placeholder="Email"
          icon={<GoPerson />}
          type="email"
          input={email}
          setInput={setEmail}
          error={errors?.email?.[0]}
        />
        <FormInput
          placeholder="Password"
          icon={<CiLock />}
          type="password"
          input={password}
          setInput={setPassword}
          error={errors?.password?.[0]}
        />
        <Link
          to=""
          className="self-end text-sm p-1 hover:text-main transition-colors duration-300"
        >
          Forgot password?
        </Link>
        <Button size="medium" to="" type="button">
          Log in
        </Button>
        <Link
          to="/signup"
          className=" text-sm p-1 hover:text-main transition-colors duration-300"
        >
          Dont't have account? Click here
        </Link>
      </form>
      <div className="hidden sm:block absolute top-[0%] -left-10 h-40 w-40 rotate-[10deg]">
        {isDarkMode ? (
          <img src="/logo-icon-dark.svg" />
        ) : (
          <img src="/logo-icon-white.svg" />
        )}
      </div>
      <div className="hidden sm:block absolute top-[60%] left-[85%] h-40 w-40 rotate-[-10deg]">
        {isDarkMode ? (
          <img src="/logo-icon-dark.svg" />
        ) : (
          <img src="/logo-icon-white.svg" />
        )}
      </div>
    </div>
  );
}
