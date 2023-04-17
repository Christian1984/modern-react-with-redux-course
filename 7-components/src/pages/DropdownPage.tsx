import { Dropdown, DropdownItemProps } from "../components/Dropdown";

const DropdownPage = () => {
  const items: DropdownItemProps[] = [{ label: "Can I use React on this Project", value: "Yes!" }];
  return <Dropdown items={items} />;
};

export { DropdownPage };
