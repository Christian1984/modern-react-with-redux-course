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
  return <button>{children}</button>;
};

export { Button, ButtonPurpose };
