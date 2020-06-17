import React from "react"

const ContactLink = ({ href, children }) => {
  return (
    <a href={href} className="m-2 text-purple-500">
      {children}
    </a>
  )
}

export default ContactLink
