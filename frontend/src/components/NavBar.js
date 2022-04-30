import {Link } from "react-router-dom";

const NavBar = () => {
    return(
        <div className="sidenav">
            <h1>Inventory Management</h1>
            <Link to="/" >Current Items</Link>
            <Link to="/addItems">Add Item</Link>
        </div>
    )
}
export default NavBar;