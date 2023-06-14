import { NavLink } from "react-router-dom";
const Header = () => {
    return ( 
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/list">Liste</NavLink>
        </nav>
     );
}
 
export default Header;