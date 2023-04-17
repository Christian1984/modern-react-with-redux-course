import React from "react";
import classnames from "classnames";

enum ButtonPurpose {
  primary,
  secondary,
  success,
  warning,
  danger,
}

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  rounded?: boolean;
  outlined?: boolean;
  purpose?: ButtonPurpose;
};

const Button = ({ rounded, outlined, purpose, onClick, children }: ButtonProps) => {
  const className = classnames(
    "font-bold",
    "py-1.5",
    "px-3",
    "m-2",
    "inline-flex",
    "items-center",
    {
      "rounded-full": rounded,
    },
    {
      "bg-white hover:bg-gray-200 border text-black": !outlined && purpose === undefined,
      "bg-blue-500 hover:bg-blue-700 text-white": !outlined && purpose === ButtonPurpose.primary,
      "bg-gray-900 hover:bg-gray-700 text-white": !outlined && purpose === ButtonPurpose.secondary,
      "bg-green-500 hover:bg-green-700 text-white": !outlined && purpose === ButtonPurpose.success,
      "bg-yellow-400 hover:bg-yellow-600 text-white": !outlined && purpose === ButtonPurpose.warning,
      "bg-red-500 hover:bg-red-700 text-white": !outlined && purpose === ButtonPurpose.danger,
    },
    {
      "border bg-white hover:text-white": outlined,
      "border border-blue-500 text-blue-500": outlined && purpose === ButtonPurpose.primary,
      "border border-gray-900 text-gray-900": outlined && purpose === ButtonPurpose.secondary,
      "border border-green-500 text-green-500": outlined && purpose === ButtonPurpose.success,
      "border border-yellow-400 text-yellow-400": outlined && purpose === ButtonPurpose.warning,
      "border border-red-500 text-red-500": outlined && purpose === ButtonPurpose.danger,
    }
  );

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export { Button, ButtonPurpose };
