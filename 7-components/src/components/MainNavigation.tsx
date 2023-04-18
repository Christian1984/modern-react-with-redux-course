import { Link } from "./Link";

const MainNavigation = () => {
  return (
    <div className="flex flex-col">
      <Link to="/test1" label="Test 1" />
      <Link to="/test2" label="Test 2" />
    </div>
  );
};

export { MainNavigation };
