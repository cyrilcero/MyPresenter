import { signal } from "@preact/signals";

export function App() {
  const test = signal("testing");
  const num = signal(0);
  return (
    <>
      <h1 className="text-3xl text-red-400">{test}</h1>
      <h1 className="font-bold">{num}</h1>
      <button
        className="w-24 bg-green-400 h-8 rounded-lg"
        onClick={() => num.value++}
      >
        Click Me!
      </button>
    </>
  );
}
