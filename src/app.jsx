import { useState } from "react";
import { signal, computed } from "@preact/signals-react";

export function App(message) {
  return (
    <>
      <h1 className="text-3xl text-red-400">TESTING</h1>
      <h1>SIGNALS TESTING</h1>
      <button
        className="w-24 bg-blue-400 h-8 rounded-lg"
        onClick={() => computed(message.value + 1)}
      >
        Click Me!
      </button>

      <button
        className="w-24 bg-red-400 h-8 rounded-lg"
        onClick={() => {
          window.open("/main", "display", "fullscreen = 1");
        }}
      >
        New Tab
      </button>
    </>
  );
}
