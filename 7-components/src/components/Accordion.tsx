import { useState } from "react";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";

type AccordionItemProps = {
  id: string;
  label: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItemProps[];
};

const Accordion = ({ items }: AccordionProps) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  return (
    <div>
      {items.map(({ id, label, content }, index) => (
        <div className="border-x border-t" key={id}>
          <div
            className="p-3 bg-gray-50 border-b flex items-center justify-between cursor-pointer"
            onClick={() => {
              if (expandedIndex === index) {
                setExpandedIndex(-1);
                return;
              }

              setExpandedIndex(index);
            }}
          >
            {label}
            <span className="text-xl">{expandedIndex === index ? <GoChevronDown /> : <GoChevronLeft />}</span>
          </div>
          {expandedIndex === index && <div className="p-3 border-b">{content}</div>}
        </div>
      ))}
    </div>
  );
};

export { Accordion };
export type { AccordionItemProps };
