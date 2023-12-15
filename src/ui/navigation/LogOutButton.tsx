import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

interface DropdownItemprops {
  onCloseFunction: () => void;
}

function LogOutButton({ onCloseFunction }: DropdownItemprops) {
  const queryClient = useQueryClient();

  function logout() {
    queryClient.removeQueries();
    localStorage.removeItem("accessToken");
    onCloseFunction();
    toast.success("Log out successfully");
    location.reload();
  }

  return (
    <Link
      to="homepage"
      className="block bg-white hover:bg-slate-100 w-60 rounded-lg dark:bg-bgDark1 dark:hover:bg-bgDark1Hover transition-colors duration-500 mb-3"
      onClick={logout}
    >
      <div className="w-full flex justify-start items-center">
        <div className="w-full flex flex-col items-start">
          <p className="w-full p-3 flex justify-between items-center text-rose-600">
            Logout <IoIosArrowForward />
          </p>
        </div>
      </div>
    </Link>
  );
}

export default LogOutButton;
