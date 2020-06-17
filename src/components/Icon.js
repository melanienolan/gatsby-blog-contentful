import React from "react"

const Icon = ({ children }) => {
  return (
    <svg
      viewBox="0 0 16 16"
      className="fill-current w-8 h-8"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  )
}

export default Icon
