import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./navigation/Navigation";

export default function AppLayout() {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
}
