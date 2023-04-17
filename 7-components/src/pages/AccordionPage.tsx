import { Accordion, AccordionItemProps } from "../components/Accordion";

const AccordionPage = () => {
  const items: AccordionItemProps[] = [
    { id: "abc", label: "Can I use React on this Project", content: "Yes!" },
    { id: "def", label: "Can I use React on another Project", content: "Maybe!" },
    { id: "hij", label: "Should I use Angular on...", content: "NO!" },
  ];
  return <Accordion items={items} />;
};

export { AccordionPage };
