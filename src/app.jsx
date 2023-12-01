import { signal } from "@preact/signals-react";
import { useContext } from "react";
import { AppState } from "./main";
export const message = signal("");

export function App() {
  const { message, newMessage } = useContext(AppState);
  function updateMessage() {
    message.value = "Cyril Cero";
  }

  return (
    <>
      <h1 className="text-3xl text-red-400">TESTING</h1>
      <h1>SIGNALS TESTING</h1>
      <button
        className="w-24 bg-blue-400 h-8 rounded-lg"
        onClick={() => updateMessage()}
      >
        Click Me!
      </button>
      <h1>{message}</h1>
      <button
        className="w-24 bg-red-400 h-8 rounded-lg"
        onClick={() => {
          window.open("/main", "display", "fullscreen = 1");
        }}
      >
        New Tab
      </button>

      <form action="">
        <input
          type="text"
          value={message.value}
          onChange={(e) => (message.value = e.target.value)}
        />
        <button type="submit">Change Message</button>
      </form>
    </>
  );
}
