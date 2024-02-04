import { Outlet } from "react-router-dom";
import Navigation from "./navigation/Navigation";

export default function AppLayout() {
  return (
    <div
      id="app"
      className="grid grid-rows-[64px] absolute h-full w-full top-0 left-0 overflow-x-hidden bg-white dark:bg-bgDark place-items-center"
    >
      <Navigation />
      <div className="overflow-x-auto h-full w-full flex justify-center">
        <div className="w-full max-w-7xl ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
