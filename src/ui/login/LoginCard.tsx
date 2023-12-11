import FormInput from "../FormInput";
import { GoPerson } from "react-icons/go";
import { CiLock } from "react-icons/ci";
import Button from "../Button";
import { Link } from "react-router-dom";

export default function LoginCard() {

    function login(){}
    
  return (
    <div className="relative flex flex-col items-center justify-center gap-5 z-10 w-full h-5/6 rounded-lg  sm:border-solid sm:border-[2px] sm:border-main bg-white dark:bg-bgDark dark:text-white text-bgDark sm:h-[500px] sm:w-96">
      <h3 className="text-2xl">Login Your Account</h3>
      <div className="flex flex-col justify-center items-center w-5/6 sm:w-3/4 gap-5">
        <FormInput placeholder="Email" icon={<GoPerson />} />
        <FormInput placeholder="Password" icon={<CiLock />} />
        <Link to='' className="self-end text-sm p-1 hover:text-main transition-colors duration-300">Forgot password?</Link>
        <Button size="medium" to="" type="button" onClick={login}>Log in</Button>
      </div>
    </div>
  );
}
