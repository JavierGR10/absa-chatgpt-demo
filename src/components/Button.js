import React from "react";

export default function Button({
  children,
  onClick,
  color = "#0066b3",
  className = "",
  Icon,
  ...props
}) {
  return (
    <button
      {...props}
      onClick={onClick}
      className={`bg-[${color}] text-white rounded-full hover:bg-[#005092] disabled:bg-grey transition-colors px-4 py-2 flex items-center justify-center space-x-4 ${className}`}
    >
      {Icon && <Icon className="h-5 w-5" />}
      {children}
    </button>
  );
}
