import { useNavigation } from "../hooks/useNavigation";

type LinkProps = {
  label: string;
  to: string;
};

const Link = ({ to, label }: LinkProps) => {
  const { path, navigate } = useNavigation();
  const highlightClass = path === to ? " bg-sky-100" : "";
  return (
    <a
      className={"p-3 text-blue-500 cursor-pointer hover:underline" + highlightClass}
      href={to}
      onClick={(e) => {
        e.preventDefault();
        navigate(to);
      }}
    >
      {label}
    </a>
  );
};

export { Link };
