import { Link } from "react-router-dom";
import Header from "../styles-components/Header";
import Nav from "../styles-components/Nav";
import Logo from "./Logo";

const Menu = () => {
    return(
        <Header>
            <Logo/>
            <Nav>
                <Link to="/">Home</Link>
                <Link to="/">Acerca</Link>
                <Link to="/">Servicios</Link>
                <Link to="/">Agenda tu cita</Link>
                <Link to="/">Contactanos</Link>
            </Nav>
        </Header>
    )
}

export default Menu