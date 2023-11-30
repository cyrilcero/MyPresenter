import { effect } from "@preact/signals-react";
import { setInterval } from "timers/promises";

export function MainPage({ message }) {
  setInterval(() => {
    message.value = Math.random();
  }, 500);

  return (
    <>
      <section className="flex flex-col justify-center items-center w-full h-screen">
        <div className="px-24 py-12 bg-slate-400 text-white drop-shadow-md">
          <h1 className="drop-shadow font-extrabold text-5xl">
            {message.value}
          </h1>
        </div>
      </section>
    </>
  );
}
