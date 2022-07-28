import { useCallback, useState } from "react";
import "./App.css";
import { MyInput } from "./input";

function App() {
  const [serverValue, setServerValue] = useState("crop");

  const updateValue = useCallback((value: string) => {
    setTimeout(() => {
      setServerValue(value);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <div>Server value: {serverValue}</div>
      <MyInput value={serverValue} onChange={updateValue} />
      <MyInput value={serverValue} onChange={updateValue} />
    </div>
  );
}

export default App;
