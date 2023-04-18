import { useState } from "react";
import { Dropdown, DropdownItemProps } from "../components/Dropdown";

const DropdownPage = () => {
  const [selected, setSelected] = useState<DropdownItemProps | null>(null);

  const items: DropdownItemProps[] = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  return (
    <div>
      <div className="m-3" onClick={() => console.log("click")}>
        <Dropdown label="Pick a Color" items={items} value={selected} handleSelect={setSelected} />
      </div>
      <div className="m-3" onClick={() => console.log("click")}>
        <Dropdown label="Pick a Color" items={items} value={selected} handleSelect={setSelected} />
      </div>
      <div className="m-3">
        Selected: <span className={`text-${selected ? selected.value : "black"}-500`}>{selected?.label}</span>
      </div>
    </div>
  );
};

export { DropdownPage };
