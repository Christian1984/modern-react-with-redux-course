import { Button, ButtonPurpose } from "../components/Button";
import { GoBell } from "react-icons/go";

function ButtonPage() {
  return (
    <>
      <div className="mb-5">
        <Button className="mr-3" onClick={(e) => console.log(e)}>
          default
        </Button>
        <Button className="mr-3" rounded>
          default
        </Button>
        <Button className="mr-3" outlined>
          default
        </Button>
        <Button className="mr-3" rounded outlined>
          default
        </Button>
      </div>

      <div className="mb-5">
        <Button className="mr-3" purpose={ButtonPurpose.primary}>
          <GoBell />
          primary
        </Button>
        <Button className="mr-3" purpose={ButtonPurpose.primary} rounded>
          <GoBell />
          primary
        </Button>
        <Button className="mr-3" purpose={ButtonPurpose.primary} outlined>
          <GoBell />
          primary
        </Button>
        <Button className="mr-3" purpose={ButtonPurpose.primary} rounded outlined>
          <GoBell />
          primary
        </Button>
      </div>

      <div className="mb-5">
        <Button className="mr-3" purpose={ButtonPurpose.secondary}>
          secondary
        </Button>
        <Button className="mr-3" purpose={ButtonPurpose.secondary} rounded>
          secondary
        </Button>
        <Button className="mr-3" purpose={ButtonPurpose.secondary} outlined>
          secondary
        </Button>
        <Button className="mr-3" purpose={ButtonPurpose.secondary} rounded outlined>
          secondary
        </Button>
      </div>

      <div className="mb-5">
        <Button className="mr-3" purpose={ButtonPurpose.success}>
          Secondary
        </Button>
        <Button className="mr-3" purpose={ButtonPurpose.success} rounded>
          success
        </Button>
        <Button className="mr-3" purpose={ButtonPurpose.success} outlined>
          success
        </Button>
        <Button className="mr-3" purpose={ButtonPurpose.success} rounded outlined>
          success
        </Button>
      </div>

      <div className="mb-5">
        <Button className="mr-3" purpose={ButtonPurpose.warning}>
          Secondary
        </Button>
        <Button className="mr-3" purpose={ButtonPurpose.warning} rounded>
          warning
        </Button>
        <Button className="mr-3" purpose={ButtonPurpose.warning} outlined>
          warning
        </Button>
        <Button className="mr-3" purpose={ButtonPurpose.warning} rounded outlined>
          warning
        </Button>
      </div>

      <div className="mb-5">
        <Button className="mr-3" purpose={ButtonPurpose.danger}>
          Secondary
        </Button>
        <Button className="mr-3" purpose={ButtonPurpose.danger} rounded>
          danger
        </Button>
        <Button className="mr-3" purpose={ButtonPurpose.danger} outlined>
          danger
        </Button>
        <Button className="mr-3" purpose={ButtonPurpose.danger} rounded outlined>
          danger
        </Button>
      </div>
    </>
  );
}

export { ButtonPage };
