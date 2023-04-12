import { Button, ButtonPurpose } from "./components/Button";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <div>
        <Button purpose={ButtonPurpose.primary}>Hello World</Button>
        <Button purpose={ButtonPurpose.primary} rounded>
          Hello World
        </Button>
        <Button purpose={ButtonPurpose.primary} outlined>
          Hello World
        </Button>
        <Button purpose={ButtonPurpose.primary} rounded outlined>
          Hello World
        </Button>
      </div>
      <div>
        <Button purpose={ButtonPurpose.secondary}>Button 2</Button>
      </div>
    </>
  );
}

export default App;
