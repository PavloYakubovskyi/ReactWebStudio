import { NavLink } from "react-router-dom";

function Header() {
  //   const [count, setCount] = useState(0);

  return (
    <nav>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/portfolio"}>Portfolio</NavLink>
    </nav>
  );
}

export default Header;
