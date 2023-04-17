import { useState } from "react";

type DropdownItemProps = {
  label: string;
  value: string;
};

type DropdownProps = {
  items: DropdownItemProps[];
};

const Dropdown = ({ items }: DropdownProps) => {
  return <div>Dropdown</div>;
};

export { Dropdown };
export type { DropdownItemProps };
