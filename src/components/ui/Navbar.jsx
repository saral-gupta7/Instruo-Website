import { Link, NavLink } from "react-router-dom";

const navItems = [
  { item: "Home", key: "homepage", route: "/" },
  { item: "About Us", key: "about", route: "about" },
  { item: "Sponsors", key: "sponsor", route: "sponsor" },
];

const Navbar = () => {
  const navitems = navItems;
  return (
    <nav className="p-5 text-black bg-slate-700">
      <ul className="flex gap-12 justify-center items-center text-2xl">
        {navitems.map(({ item, key, route }) => (
          <NavLink to={route} key={key}>
            <li key={key}>{item}</li>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
