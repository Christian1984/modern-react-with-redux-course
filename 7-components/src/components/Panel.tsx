import React from "react";

type PanelProps = {
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;
const Panel = ({ children, ...rest }: PanelProps) => {
  return (
    <div {...rest} className={rest.className + " border shadow rounded bg-white"}>
      {children}
    </div>
  );
};

export { Panel };
