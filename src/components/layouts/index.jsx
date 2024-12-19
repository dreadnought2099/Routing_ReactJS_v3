import { Outlet } from "react-router-dom";
import Header from "../headers";
import Footer from "../footer/Footer";

export default function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-custom">
      <Header />
      <div className="container flex-grow-1 mt-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
