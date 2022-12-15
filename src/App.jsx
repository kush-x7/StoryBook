import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  const [count, setCount] = useState(0);

  return <Button variant="primary">Primary</Button>;
}

export default App;
