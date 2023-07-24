import Button from "../components/Button";
import { GoBell,TbAccessible ,TbAlertTriangleFilled,TbBackhoe} from "react-icons/go";


function ButtonPage() {
  const handleCLick = () => {
    console.log("Click ");
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
