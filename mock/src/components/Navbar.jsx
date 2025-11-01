import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 w-full fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">
      
        <div className="text-white font-bold text-lg">Logo</div>

        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-300">About</Link>
          <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
