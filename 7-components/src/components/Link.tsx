import { useContext, useState } from "react";
import { NavigationContext, NavigationContextType } from "../context/Navigation";

type LinkProps = {
  label: string;
  to: string;
};

const Link = ({ to, label }: LinkProps) => {
  const { navigate } = useContext(NavigationContext) as NavigationContextType;
  return (
    <a
      className="p-3 text-blue-500 cursor-pointer hover:underline"
      href={to}
      onClick={(e) => {
        e.preventDefault();
        navigate(to);
      }}
    >
      {label}
    </a>
  );
};

export { Link };
