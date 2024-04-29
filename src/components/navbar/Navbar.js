import { useNavigate } from "react-router-dom";
import { IconBack } from "../../assets/IconsSvg";
import './navbar.css';
const Navbar = ({ title }) => {
    const navigate = useNavigate();
    return (
        <nav>
            <button onClick={() => navigate('/', {replace:true})} className="nav-icon-back">
                <IconBack />
            </button>
            <span className="title">{title}</span>
        </nav>
    );
}
export default Navbar;