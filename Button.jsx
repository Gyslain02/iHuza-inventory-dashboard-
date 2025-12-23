
import React from "react";
import clsx from "clsx";

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "px-4 py-2 rounded-xl font-medium text-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-[#2563eb] text-white hover:bg-[#1d4ed8] focus:ring-[#2563eb]",
    outline:
      "border border-[#2563eb] text-[#2563eb] hover:bg-blue-50 focus:ring-[#2563eb]",
  };

  return (
    <button className={clsx(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
