import { Button, ButtonPurpose } from "./components/Button";
import { GoBell } from "react-icons/go";

function App() {
  return (
    <>
      <div>
        <Button onClick={(e) => console.log(e)} className="mb-5">
          default
        </Button>
        <Button rounded>default</Button>
        <Button outlined>default</Button>
        <Button rounded outlined>
          default
        </Button>
      </div>

      <div>
        <Button purpose={ButtonPurpose.primary}>
          <GoBell />
          primary
        </Button>
        <Button purpose={ButtonPurpose.primary} rounded>
          <GoBell />
          primary
        </Button>
        <Button purpose={ButtonPurpose.primary} outlined>
          <GoBell />
          primary
        </Button>
        <Button purpose={ButtonPurpose.primary} rounded outlined>
          <GoBell />
          primary
        </Button>
      </div>

      <div>
        <Button purpose={ButtonPurpose.secondary}>secondary</Button>
        <Button purpose={ButtonPurpose.secondary} rounded>
          secondary
        </Button>
        <Button purpose={ButtonPurpose.secondary} outlined>
          secondary
        </Button>
        <Button purpose={ButtonPurpose.secondary} rounded outlined>
          secondary
        </Button>
      </div>

      <div>
        <Button purpose={ButtonPurpose.success}>Secondary</Button>
        <Button purpose={ButtonPurpose.success} rounded>
          success
        </Button>
        <Button purpose={ButtonPurpose.success} outlined>
          success
        </Button>
        <Button purpose={ButtonPurpose.success} rounded outlined>
          success
        </Button>
      </div>

      <div>
        <Button purpose={ButtonPurpose.warning}>Secondary</Button>
        <Button purpose={ButtonPurpose.warning} rounded>
          warning
        </Button>
        <Button purpose={ButtonPurpose.warning} outlined>
          warning
        </Button>
        <Button purpose={ButtonPurpose.warning} rounded outlined>
          warning
        </Button>
      </div>

      <div>
        <Button purpose={ButtonPurpose.danger}>Secondary</Button>
        <Button purpose={ButtonPurpose.danger} rounded>
          danger
        </Button>
        <Button purpose={ButtonPurpose.danger} outlined>
          danger
        </Button>
        <Button purpose={ButtonPurpose.danger} rounded outlined>
          danger
        </Button>
      </div>
    </>
  );
}

export default App;
