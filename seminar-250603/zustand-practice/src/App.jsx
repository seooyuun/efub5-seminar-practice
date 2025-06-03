import "./App.css";
import { useCountStore } from "./store";

function App() {
  const count = useCountStore((state) => state.count);
  const increase = useCountStore((state) => state.increase);
  const decrease = useCountStore((state) => state.decrease);
  const initialize = useCountStore((state) => state.initialize);

  return (
    <>
      <h2>{count}</h2>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
      <button onClick={initialize}>초기화</button>
    </>
  );
}

export default App;
