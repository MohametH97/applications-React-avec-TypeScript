import React from "react";
import Greeting from "./Greeting";
import Counter from "./Counter";

const App = (): React.JSX.Element => {
  return (
    <div>
      <Greeting name="Mbodj" />
      <Counter />
    </div>
  );
};

export default App;
