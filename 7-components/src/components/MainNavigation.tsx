import { Link } from "./Link";

const MainNavigation = () => {
  return (
    <div className="flex flex-col">
      <Link to="/" label="Buttons" />
      <Link to="/accordion" label="Accordion" />
      <Link to="/dropdown" label="Dropdown" />
      <Link to="/modal" label="Modal" />
      <Link to="/counter" label="Counter" />
      <Link to="/reducer-counter" label="Counter (Reducer)" />
    </div>
  );
};

export { MainNavigation };
