import { signal } from "@preact/signals-react";

export function MainPage(message) {
  getLocal;

  return (
    <>
      <section className="flex flex-col justify-center items-center w-full h-screen">
        {message && (
          <div className="px-24 py-12 bg-slate-400 text-white drop-shadow-md">
            <h1 className="drop-shadow font-extrabold text-5xl">
              {message.value}
            </h1>
          </div>
        )}
      </section>
    </>
  );
}
