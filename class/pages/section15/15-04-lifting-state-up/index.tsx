import { useState } from "react";
import Child1 from "../../../src/components/units/15-lifting-state-up/child1";
import Child2 from "../../../src/components/units/15-lifting-state-up/child2";

export default function CounterLetDocument(): JSX.Element {
  const [count, setCount] = useState(0);

  const onCount = (): void => {
    setCount((prev: number) => prev + 1);
  };

  return (
    <div>
      <Child1 count={count} setCount={setCount} />
      <Child2 count={count} onCount={onCount} />
    </div>
  );
}
