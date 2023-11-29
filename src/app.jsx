import { useState } from "react";

export function App() {
  const [Test, setTest] = useState("Testing");
  const [Num, setNum] = useState(0);
  return (
    <>
      <h1 className="text-3xl text-red-400">{Test}</h1>
      <h1 className="font-bold">{Num}</h1>
      <button
        className="w-24 bg-green-400 h-8 rounded-lg"
        onClick={() => setNum((Num) => Num + 1)}
      >
        Click Me!
      </button>
    </>
  );
}
