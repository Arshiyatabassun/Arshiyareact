import { LOGO_URL } from "../../utils/constants";
const Header=()=>{
    return (
        <div className="Header">
        <div className="logo-container">
<img src={LOGO_URL}/>
        </div>

    <div className="nav-item">
<ul>
   <li>Home</li>
   <li>About Us</li>
   <li> Contact us</li>
   <li>Cart</li>
</ul>
    </div>
    </div>
    )
}

export default Header;