import React from "react"
import SEO from "./SEO"
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="flex flex-col min-h-screen bg-gray-200 relative">
        <Header />
        <main>{children}</main>
        <footer className="py-2 text-center text-gray-600 text-xs">
          &copy; Melanie Nolan 2020
        </footer>
      </div>
    </>
  )
}

export default Layout
