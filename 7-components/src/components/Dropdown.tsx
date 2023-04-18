import React, { useEffect, useRef, useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import { Panel } from "./Panel";

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
  const dropdownRef = useRef<HTMLDivElement>(null);

  const hide = (e: MouseEvent) => {
    if (dropdownRef.current?.contains(e.target as Node)) {
      console.log("inside");
    } else {
      console.log("ouside");
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", hide);
    return () => document.removeEventListener("click", hide);
  }, []);

  return (
    <div {...rest} className={className + " relative"} ref={dropdownRef}>
      <div>{label}</div>
      <Panel
        className="cursor-pointer flex p-3 items-center justify-between hover:bg-sky-50"
        onClick={() => {
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
      </Panel>
      {isExpanded && (
        <Panel className="absolute w-full z-10">
          {items.map((item) => (
            <div
              key={item.value}
              className="cursor-pointer p-3 hover:bg-sky-50"
              onClick={() => {
                handleSelect(item);
                setIsExpanded(false);
              }}
            >
              {item.label}
            </div>
          ))}
        </Panel>
      )}
    </div>
  );
};

export { Dropdown };
export type { DropdownItemProps };
