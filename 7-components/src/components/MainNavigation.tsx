import { Link } from "./Link";

const MainNavigation = () => {
  return (
    <div className="flex flex-col">
      <Link to="/" label="Buttons" />
      <Link to="/accordion" label="Accordion" />
      <Link to="/dropdown" label="Dropdown" />
    </div>
  );
};

export { MainNavigation };
