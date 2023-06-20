import classNames from "classnames";

type SkeletonProps = {
  count: number;
  className: string;
};

const Skeleton = ({ count, className }: SkeletonProps) => {
  const outerClassNames = classNames("relative", "overflow-hidden", "bg-gray-200", "rounded", "mb-2.5", className);
  const innerClassNames = classNames(
    "animate-shimmer",
    "absolute",
    "inset-0",
    "-translate-x-full",
    "bg-gradient-to-r",
    "from-gray-200",
    "via-white",
    "to-gray-200"
  );
  const boxes = [];

  for (let i = 0; i < count; i++) {
    boxes.push(
      <div key={i} className={outerClassNames}>
        <div className={innerClassNames}></div>
      </div>
    );
  }

  return <div>{boxes}</div>;
};

export default Skeleton;
export { Skeleton };
