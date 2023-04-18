// import { ButtonPage } from "./pages/ButtonPage";
// import { AccordionPage } from "./pages/AccordionPage";
import { MainNavigation } from "./components/MainNavigation";
import { DropdownPage } from "./pages/DropdownPage";

function App() {
  // return <ButtonPage />;
  // return <AccordionPage />;
  return (
    <div className="flex">
      <MainNavigation />
      <DropdownPage />
    </div>
  );
}

export default App;
