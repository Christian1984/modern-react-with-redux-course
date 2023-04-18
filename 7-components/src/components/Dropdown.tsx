import React, { useEffect, useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

type DropdownItemProps = {
  label: string;
  value: string;
};

type DropdownProps = {
  label: string;
  value: DropdownItemProps | null;
  handleSelect: (selected: DropdownItemProps | null) => void;
  items: DropdownItemProps[];
} & React.HTMLAttributes<HTMLDivElement>;

const Dropdown = ({ label, items, value, handleSelect, className, ...rest }: DropdownProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const hide = () => setIsExpanded(false);

  useEffect(() => {
    document.addEventListener("click", hide);
    return () => document.removeEventListener("click", hide);
  }, []);

  return (
    <div className={className + " relative"} {...rest}>
      <div>{label}</div>
      <div
        className="cursor-pointer flex items-center justify-between border p-3"
        onClick={(e) => {
          e.stopPropagation();
          setIsExpanded((prev) => !prev);
        }}
      >
        <span>
          {value && value.label}
          {!value && "Color..."}
        </span>
        <span className="text-xl">
          <GoChevronDown />
        </span>
      </div>
      {isExpanded && (
        <div className="border absolute bg-white w-full">
          {items.map((item) => (
            <div
              key={item.value}
              className="cursor-pointer p-3 hover:bg-gray-50"
              onClick={() => {
                handleSelect(item);
                // setIsExpanded(false);
              }}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { Dropdown };
export type { DropdownItemProps };
