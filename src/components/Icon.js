import React from "react"

const Icon = ({ children }) => {
  return (
    <svg
      viewBox="0 0 16 16"
      className="fill-current w-12 h-12"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  )
}

export default Icon
