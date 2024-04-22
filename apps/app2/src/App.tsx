import "./App.css";
import { Header, hello } from "@npm-workspace-demo/components";

function App() {
  const output = hello();
  const text = "App2:" + output;
  return (
    <>
      <Header text={text} />
    </>
  );
}

export default App;
