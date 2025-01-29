import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const NotFound = () => {
  return (
    <>
      <div className="max-w-7xl font-kurale mx-auto font-poppins">
        <Navbar></Navbar>
      </div>
      <div className="font-kurale h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
        <h1 className="text-9xl font-extrabold text-white tracking-widest">
          404
        </h1>
        <div className="bg-orange-500 px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
        <button className="mt-5">
          <Link
            to="/"
            className="relative inline-block text-sm font-medium text-orange-500 group active:text-orange-500 focus:outline-none focus:ring"
          >
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-orange-500 group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
              Go Home
            </span>
          </Link>
        </button>
      </div>
      <Footer></Footer>
    </>
  );
};

export default NotFound;
