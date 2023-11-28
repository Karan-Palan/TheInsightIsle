import Header from "./Header";
import {Outlet} from "react-router-dom";

// This is the layout of the entier website
export default function Layout() {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}