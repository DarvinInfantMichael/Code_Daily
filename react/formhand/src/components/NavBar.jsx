
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-amber-200 p-4 flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default NavBar;