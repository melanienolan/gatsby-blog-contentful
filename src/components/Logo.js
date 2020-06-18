import React from "react"

const Logo = ({ fill = "#ffffff", className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="10.222" cy="12.727" rx="5.556" ry="5.682" fill={fill} />
      <ellipse cx="9.333" cy="3.636" rx="3.556" ry="3.636" fill={fill} />
      <ellipse cx="5.778" cy="16.364" rx="3.556" ry="3.636" fill={fill} />
      <ellipse cx="14" cy="6.364" rx="3.556" ry="3.636" fill={fill} />
      <ellipse cx="3.556" cy="11.591" rx="3.556" ry="3.636" fill={fill} />
      <ellipse cx="5.778" cy="6.364" rx="3.556" ry="3.636" fill={fill} />
      <ellipse cx="16.444" cy="11.591" rx="3.556" ry="3.636" fill={fill} />
    </svg>
  )
}

export default Logo
