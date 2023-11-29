import Header from "./Header";
import {Outlet} from "react-router-dom";

//Layout of entire website
export default function Layout() {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}