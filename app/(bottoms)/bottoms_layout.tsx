import { Bottom, Sheet } from "bottoms";
import BottomOne from "./BottomOne";
import BottomTwo from "./BottomTwo";


export default function bottoms_layout() {
  return (
    <Bottom>
      <Sheet name="One" component={BottomOne} />
      <Sheet name="Two" component={BottomTwo} />
    </Bottom>
  );
}