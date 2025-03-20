import { NavLink } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const NavArr = [
  { to: "/", navBar: "Home" },
  { to: "/frontend", navBar: "Frontend" },
  { to: "/backend", navBar: "Backend" },
  { to: "/fullStack", navBar: "Full Stack" },
  { to: "/dsa", navBar: "DSA RoadMap" },
];

const NavBar = () => {
  return (
    <div className="flex justify-end items-center gap-3">
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-4">
          {NavArr?.map(({ to, navBar }) => (
            <NavigationMenuItem key={navBar} className="list-none">
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `block rounded-md transition-colors duration-300 ${
                    isActive
                      ? "font-bold text-purple-500 border border-purple-500" // Active link style
                      : "text-white-700 font-semibold hover:text-purple-500" // Inactive link style
                  }`
                }
              >
                <NavigationMenuLink className="p-2">
                  {navBar}
                </NavigationMenuLink>
              </NavLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavBar;
