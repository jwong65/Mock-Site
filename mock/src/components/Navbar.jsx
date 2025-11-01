import { Link } from 'react-router-dom'
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="relative bg-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <ul className="flex items-center gap-6 text-sm font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </nav>
  )
}
