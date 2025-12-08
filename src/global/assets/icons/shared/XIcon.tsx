import React from "react";

interface XIconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const XIcon: React.FC<XIconProps> = ({
  width = 24,
  height = 24,
  color = "currentColor",
  onClick,
  className = "",
  style,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 24 24"
    onClick={onClick}
    className={`cursor-pointer ${className}`}
    style={style}
  >
    <path
      fill={color}
      d="M6.06 16.667a.9.9 0 1 0 1.272 1.273L12 13.273l4.667 4.667a.9.9 0 0 0 1.273-1.273L13.272 12l4.667-4.667a.9.9 0 0 0-1.273-1.273L12 10.727 7.332 6.06A.9.9 0 1 0 6.06 7.333L10.726 12z"
    />
  </svg>
);

export default XIcon;
