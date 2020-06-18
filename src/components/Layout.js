import React from "react"
import SEO from "./SEO"
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div
        className="flex flex-col justify-between min-h-screen bg-white"
        style={{
          backgroundColor: "#faf5ff",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%23e9d8fd' fill-opacity='0.46'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <footer className="py-2 text-center text-gray-600 text-xs">
          &copy; Melanie Nolan 2020
        </footer>
      </div>
    </>
  )
}

export default Layout
