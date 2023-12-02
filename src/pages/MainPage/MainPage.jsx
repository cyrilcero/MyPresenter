import { effect } from "@preact/signals-react";
import { message } from "../../app";
import { useContext } from "react";
import { AppState } from "../../main";

export function MainPage() {
  // setInterval(() => {
  //   message.value = Math.random();
  // }, 500);
  const { message, newMessage } = useContext(AppState);
  console.log(message.value);
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
