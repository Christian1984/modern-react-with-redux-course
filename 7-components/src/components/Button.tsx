import React from "react";

enum ButtonPurpose {
  primary,
  secondary,
  success,
  warning,
  danger,
}

type ButtonProps = {
  children?: React.ReactNode;
  rounded?: boolean;
  outlined?: boolean;
  purpose: ButtonPurpose;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 border border-blue-600 text-white font-bold py-1.5 px-3 m-2 rounded">
      {children}
    </button>
  );
};

export { Button, ButtonPurpose };
