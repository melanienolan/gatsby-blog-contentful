import React from "react"
import { Link } from "gatsby"
import Logo from "./Logo"

const Header = () => {
  return (
    <header className="p-4 bg-purple-500 text-white font-semibold uppercase tracking-widest flex justify-between font-suez">
      <Link to="/" className="flex justify-center items-center">
        <Logo className="w-10 h-10" />
      </Link>
      <nav>
        <ul className="flex items-center">
          <li className="p-4 text-white">
            <Link
              to="/about"
              className="border-current hover:border-b-2"
              activeClassName="border-b-2"
            >
              About
            </Link>
          </li>
          <li className="p-4 text-white">
            <Link
              to="/blog"
              className="border-current hover:border-b-2"
              activeClassName="border-b-2"
            >
              Blog
            </Link>
          </li>
          <li className="p-4 text-white">
            <Link
              to="/contact"
              className="border-current hover:border-b-2"
              activeClassName="border-b-2"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
