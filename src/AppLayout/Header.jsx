import NavBar from "./NavBar";
import ThemeToggleButton from "./ThemeToggleButton";
import { FaBookReader } from "react-icons/fa";

const Header = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-[1fr_auto_1fr] px-8 py-5 items-center sticky top-0 shadow-lg bg-white-1 dark:bg-gray-950 dark:shadow-indigo-500/50 bg-slate-100 ">
      {/* First Div - Align to Start */}
      <div className="text-[18px] text-purple-600 font-semibold text-center flex gap-2 items-center justify-start">
        <span className="text-xl">
          <FaBookReader />
        </span>
        Web Development
      </div>

      {/* Second Div - Center Aligned (Hidden on small screens, shown on medium and above) */}
      <div className="hidden lg:flex lg:justify-end px-2">
        <NavBar />
      </div>

      {/* Third Div - Align to End */}
      <div className="flex justify-end">
        <ThemeToggleButton />
      </div>
    </div>
  );
};

export default Header;
