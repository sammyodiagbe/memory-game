import AnchorIcon from "./anchor";
import BusIcon from "./bus";
import CarIcon from "./car";
import FutBolIcon from "./futbol";
import SunIcon from "./sun";

const Icon = ({ value }) => {
  return value == 1 ? (
    <AnchorIcon />
  ) : value === 2 ? (
    <SunIcon />
  ) : value === 3 ? (
    <FutBolIcon />
  ) : value === 4 ? (
    <CarIcon />
  ) : value === 5 ? (
    <BusIcon />
  ) : (
    <SunIcon />
  );
};

export default Icon;
