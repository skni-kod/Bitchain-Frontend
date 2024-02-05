import { Link } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";
import { GoDotFill } from "react-icons/go";

function Footer() {
  const date = new Date().getFullYear();
  const { isDarkMode } = useDarkMode();

  return (
    <footer className="py-8 text-gray flex justify-center items-center gap-6 dark:bg-bgDark border-solid bord er-t-[1px] border-slate-200 dark:border-stone-700 pl-16  max-w-7xl">
      <div className="flex gap-2 justify-center items-center">
        <img className="h-5" src="/logo-icon-gray.svg" alt="" />
        <p>{date} BitChain Project</p>
      </div>
      <Link
        to="https://kod.prz.edu.pl/"
        className="hover:text-main transition-colors duration-300"
      >
        Skni kod
      </Link>
      <Link
        to="/about"
        className="hover:text-main transition-colors duration-300"
      >
        About Us
      </Link>
    </footer>
  );
}

export default Footer;
