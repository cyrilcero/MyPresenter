import { signal } from "@preact/signals-react";

export function createAppState() {
  const message = signal(0);
  return message;
}
