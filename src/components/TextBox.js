import React from "react"

const TextBox = ({ children }) => {
  return (
    <div className="p-4 mx-auto max-w-screen-sm bg-white text-gray-800">
      {children}
    </div>
  )
}

export default TextBox
