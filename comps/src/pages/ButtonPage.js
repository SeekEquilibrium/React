import Button from "../components/Button";
import { GoBell} from "react-icons/go";
import { TbAccessible ,TbAlertTriangleFilled,TbBackhoe } from "react-icons/tb";

function ButtonPage() {
  const handleCLick = () => {

  };

  return (
    <div>
      <div>
        <Button primary onClick={handleCLick}>
          <GoBell />
          Primary
        </Button>
      </div>

      <div>
        <Button secondary outline>
          <TbAccessible />
          BB
        </Button>
      </div>

      <div>
        <Button danger>
          <TbAlertTriangleFilled />
          CC
        </Button>
      </div>

      <div>
        <Button warning rounded>
          <TbBackhoe />
          DD
        </Button>
      </div>

      <div>
        <Button success>EE</Button>
      </div>

      <div>
        <Button>QQ</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
