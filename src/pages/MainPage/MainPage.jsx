import { signal } from "@preact/signals";

export function MainPage() {
  const something = signal("test");
  return <div>{something}</div>;
}
