import { ReactNode } from "react";
import { useNavigation } from "../hooks/useNavigation";

type RouteProps = {
  route: string;
  children: ReactNode;
};

const Route = ({ route, children }: RouteProps) => {
  const { path } = useNavigation();

  if (path === route) {
    return <>{children}</>;
  }

  return null;
};

export { Route };
