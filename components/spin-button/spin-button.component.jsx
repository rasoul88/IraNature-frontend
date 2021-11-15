import { Button } from "./spin-button.styles";
import Spin from "../../public/assets/icons/Spin.svg";

const SpinButton = (props) => {
  return (
    <Button {...props} disabled={true}>
      <Spin style={{ width: "5rem", height: "5rem", fill: "white" }} />
    </Button>
  );
};

export default SpinButton;
