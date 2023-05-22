import { CarForm } from "./components/CarForm";
import { CarList } from "./components/CarList";
import { CarSearch } from "./components/CarSearch";
import { CarValue } from "./components/CarValue";

function App() {
  return (
    <div className="container is-max-desktop">
      <CarForm />
      <div className="panel m-3 p-3">
        <h4 className="subtitle is-4">My Cars</h4>
        <CarSearch />
        <CarList />
        <CarValue />
      </div>
    </div>
  );
}

export default App;
