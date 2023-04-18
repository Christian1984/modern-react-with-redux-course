import { useContext } from "react";
import { NavigationContext, NavigationContextType } from "../context/Navigation";

const useNavigation = () => useContext(NavigationContext) as NavigationContextType;

export { useNavigation };
