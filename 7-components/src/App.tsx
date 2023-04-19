import { MainNavigation } from "./components/MainNavigation";
import { Route } from "./components/Route";
import { AccordionPage } from "./pages/AccordionPage";
import { ButtonPage } from "./pages/ButtonPage";
import { CounterPage } from "./pages/CounterPage";
import { DropdownPage } from "./pages/DropdownPage";
import { ModalPage } from "./pages/ModalPage";

function App() {
  // return <ButtonPage />;
  // return <AccordionPage />;
  return (
    <div className="container mx-auto flex mt-3">
      <MainNavigation />
      <div className="grow ml-3">
        <Route route="/">
          <ButtonPage />
        </Route>
        <Route route="/accordion">
          <AccordionPage />
        </Route>
        <Route route="/dropdown">
          <DropdownPage />
        </Route>
        <Route route="/modal">
          <ModalPage />
        </Route>
        <Route route="/counter">
          <CounterPage initialValue={10} />
        </Route>
      </div>
    </div>
  );
}

export default App;
