import { signal } from "@preact/signals-react";

export function globalState() {
  const message = signal();
  const newMessage = signal("");

  return { message, newMessage };
}

export default globalState();
