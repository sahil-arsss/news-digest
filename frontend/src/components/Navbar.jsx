
import { NavLink } from "react-router-dom";
function Navbar() {
    return (
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">

            {/* Logo */}
            <h1 className="text-xl font-bold text-blue-600">
                NewsAI
            </h1>

            {/* Navlink */}
            <div className="space-x-6">
                <NavLink to="/" className={({isActive})=> isActive ? "text-blue-600 font-semibold" : "hover:text-blue-500"  }>Home</NavLink>
                <NavLink to="/dashboard" className={({isActive})=> isActive ? "text-blue-600 font-semibold" : "hover:text-blue-500"  }>Dashboard</NavLink>
                <NavLink to="/subscribe" className={({isActive})=> isActive ? "text-blue-600 font-semibold" : "hover:text-blue-500"  }>Subscribe</NavLink>
                <NavLink to="/preferences" className={({isActive})=> isActive ? "text-blue-600 font-semibold" : "hover:text-blue-500"  }>Preferences</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;