import { useState } from "react";

type AccordionItemProps = {
  id: string;
  label: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItemProps[];
};

const Accordion = ({ items }: AccordionProps) => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <div>
      {items.map(({ id, label, content }, index) => (
        <div className="mb-5" key={id}>
          <div className="cursor-pointer" onClick={() => setExpandedIndex(index)}>
            {label}
          </div>
          {expandedIndex === index && <div>{content}</div>}
        </div>
      ))}
    </div>
  );
};

export { Accordion };
export type { AccordionItemProps };
