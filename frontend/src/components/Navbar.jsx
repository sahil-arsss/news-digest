import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      
      {/* Logo */}
      <h1 className="text-xl font-bold text-blue-600">
        NewsAI
      </h1>

      {/* Links */}
      <div className="space-x-6">
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <Link to="/dashboard" className="hover:text-blue-500">Dashboard</Link>
        <Link to="/subscribe" className="hover:text-blue-500">Subscribe</Link>
        <Link to="/preferences" className="hover:text-blue-500">Preferences</Link>
      </div>
    </nav>
  );
}

export default Navbar;