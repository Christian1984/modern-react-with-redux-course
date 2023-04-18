import { ReactNode, useContext } from "react";
import { NavigationContext, NavigationContextType } from "../context/Navigation";

type RouteProps = {
  route: string;
  children: ReactNode;
};

const Route = ({ route, children }: RouteProps) => {
  const { path } = useContext(NavigationContext) as NavigationContextType;

  if (path === route) {
    return <div className="grow">{children}</div>;
  }

  return null;
};

export { Route };
