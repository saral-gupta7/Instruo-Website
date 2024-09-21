import { NavLink } from "react-router-dom";

const navItems = [
  { item: "Home", key: "homepage", route: "/" },
  { item: "About Us", key: "about", route: "about" },
  { item: "Sponsors", key: "sponsor", route: "sponsor" },
];

const Navbar = () => {
  const navitems = navItems;
  return (
    <nav className="fixed top-0 left-0 right-0 p-10 bg-black text-gray-200">
      {/* <img src="public/assets/images.jpeg" alt="" height={48} width={48} /> */}
      <ul className="flex gap-8 justify-center items-center text-[1.3rem] font-sans">
        {navitems.map(({ item, key, route }) => (
          <NavLink
            to={route}
            key={key}
            className="hover:text-gray-400 transition-colors duration-300"
            activeClassName="text-gray-300"
          >
            <li key={key} className="mx-4">
              {item}
            </li>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
