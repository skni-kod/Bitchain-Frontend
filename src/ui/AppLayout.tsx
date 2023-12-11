import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./navigation/Navigation";

export default function AppLayout() {
  return (
    <div id="app" className="grid grid-rows-layout absolute h-full w-full top-0 left-0 overflow-x-hidden">
      <Navigation />
      <div className="overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}
