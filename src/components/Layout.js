import React from "react"
import { Link } from "gatsby"
import SEO from "./SEO"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="flex flex-col min-h-screen bg-gray-200 relative">
        <header className="p-4 bg-teal-500 text-white font-semibold flex justify-between">
          <div>Logo</div>
          <button className="sm:hidden">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20">
              <path
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              />
            </svg>
          </button>
          {/* <nav
            className="hidden px-6 absolute right-0 w-full"
            style={{ top: "50px" }}
          >
            <ul className="flex flex-col items-center bg-white text-gray-700 shadow">
              <li className="pt-4">
                <Link to="/about">About</Link>
              </li>
              <li className="py-4">
                <Link to="/articles">Articles</Link>
              </li>
              <li className="pb-4">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav> */}
          <nav className="hidden sm:block">
            <ul className="flex text-white">
              <li className="p-4">
                <Link to="/about">About</Link>
              </li>
              <li className="p-4">
                <Link to="/articles">Articles</Link>
              </li>
              <li className="p-4">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="py-2 text-center text-gray-600 text-xs">
          &copy; Melanie Nolan 2020
        </footer>
      </div>
    </>
  )
}

export default Layout
