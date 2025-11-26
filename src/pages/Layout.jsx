import { Outlet } from "react-router";
import Header from "../components/Header";

const Layout = () => {
  return (
    <main className="font-inter min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
      <Header />
      <div className="mx-auto px-5 md:mx-10 md:px-0 lg:mx-20">
        <Outlet />
      </div>
    </main>
  );
};
export default Layout;
