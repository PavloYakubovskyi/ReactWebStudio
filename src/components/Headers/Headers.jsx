import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./Headers.styled";
// import { Contacts, Navigation } from "./Headers.styled";

function Header() {
  //   const [count, setCount] = useState(0);

  return (
    <HeaderContainer>
      <nav>
        <NavLink to={"/"}>
          Web<span style={{ color: "red" }}>Studio</span>
        </NavLink>
        <NavLink to={"/"}>Studio</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/portfolio"}>Portfolio</NavLink>
      </nav>
      <ul>
        <li className="first">UPS</li>
        <li>PPP</li>
      </ul>
      <NavLink to={"/autorization"}>Autorization</NavLink>
    </HeaderContainer>
  );
}

export default Header;
