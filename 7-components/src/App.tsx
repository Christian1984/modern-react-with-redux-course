import { MainNavigation } from "./components/MainNavigation";
import { Route } from "./components/Route";
import { AccordionPage } from "./pages/AccordionPage";
import { ButtonPage } from "./pages/ButtonPage";
import { DropdownPage } from "./pages/DropdownPage";

function App() {
  // return <ButtonPage />;
  // return <AccordionPage />;
  return (
    <div className="flex">
      <MainNavigation />
      <Route route="/">
        <ButtonPage />
      </Route>
      <Route route="/accordion">
        <AccordionPage />
      </Route>
      <Route route="/dropdown">
        <DropdownPage />
      </Route>
    </div>
  );
}

export default App;
