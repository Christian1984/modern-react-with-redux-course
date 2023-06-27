import { ReactNode, useState } from "react";
import { GoTriangleDown, GoTriangleLeft } from "react-icons/go";

type ExpandablePanelProps = {
  header: ReactNode;
  errorBanner: ReactNode;
} & React.ComponentPropsWithoutRef<"div">;

const ExpandablePanel = ({ header, errorBanner, children }: ExpandablePanelProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mb-2 border rounded flex flex-col">
      {errorBanner}
      <div
        className="flex items-center cursor-pointer select-none mx-2"
        onClick={() => {
          setExpanded((prev) => !prev);
        }}
      >
        <div className="flex flex-grow items-center">{header}</div>
        {expanded && <GoTriangleDown />}
        {!expanded && <GoTriangleLeft />}
      </div>
      {expanded && <div className="p-2 border-t">{children}</div>}
    </div>
  );
};

export default ExpandablePanel;
export { ExpandablePanel };
