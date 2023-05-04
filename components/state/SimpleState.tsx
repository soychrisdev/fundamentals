import { useState } from "react";
import { Button } from "../ui/Button";
import { Progress } from "../ui/Progress";
import { Slider } from "../ui/Slider";

export default function SimpleState() {
  const [state, setState] = useState(10);
  const [slider, setSlider] = useState([10]);
  const handleIncrementalState = () => setState(state + 10);
  const handleDrecementalState = () => setState(state - 10);
  const handleSliderState = (value: number[]) => setSlider(value);
  return (
    <>
      <div className="flex justify-between w-full">
        <Button
          onClick={handleIncrementalState}
          disabled={state <= 99 ? false : true}
        >
          +
        </Button>

        <Button
          onClick={handleDrecementalState}
          disabled={state >= 1 ? false : true}
        >
          -
        </Button>
      </div>
      <div>
        <br />
        <Progress value={state} max={100} />
        <br />

        <h1>Simple useState: {state}</h1>
        <br />
        <Slider
          defaultValue={slider}
          max={100}
          step={10}
          onValueChange={handleSliderState}
        />
        <br />
        <h1>Simple Slider useState: {slider}</h1>
      </div>
    </>
  );
}
