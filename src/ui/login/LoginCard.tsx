import FormInput from "../FormInput";
import { GoPerson } from "react-icons/go";
import { CiLock } from "react-icons/ci";
import Button from "../Button";
import { Link } from "react-router-dom";

export default function LoginCard() {
  function login() {}

  return (
    <div className="relative flex items-center justify-center gap-5 z-10 w-full h-5/6 rounded-lg  bg-white dark:bg-bgDark dark:text-white text-bgDark sm:h-[500px] sm:w-full">
      <div className="flex flex-col justify-center items-center w-5/6 sm:w-3/4 gap-5 sm:p-10 bg-white dark:bg-bgDark ">
        <h3 className="text-2xl">Login Your Account</h3>
        <FormInput placeholder="Email" icon={<GoPerson />} />
        <FormInput placeholder="Password" icon={<CiLock />} />
        <Link
          to=""
          className="self-end text-sm p-1 hover:text-main transition-colors duration-300"
        >
          Forgot password?
        </Link>
        <Button size="medium" to="" type="button" onClick={login}>
          Log in
        </Button>
        <Link
          to="/signup"
          className=" text-sm p-1 hover:text-main transition-colors duration-300"
        >
          Dont't have account?
        </Link>
      </div>
      <div className="hidden sm:block absolute top-[20%] left-20 h-40 w-40 rotate-[10deg]">
        <img src="/logo-icon-white.svg" />
      </div>
      <div className="hidden sm:bl ock">
        <img src="/img2.jpg" />
      </div>
    </div>
  );
}
