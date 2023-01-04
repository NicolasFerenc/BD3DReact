import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <div className="navbar">
        <div>
            logo
        </div>
        <div>
            <ul className="lista">
                <li>Mesas</li>
                <li>Sillas</li>
                <li>Sillones</li>
            </ul>
        </div>
        <div>
            <CartWidget />
        </div>
    </div>
  )
}

export default NavBar