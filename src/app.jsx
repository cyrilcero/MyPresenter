export function App({ message }) {
  function updateMessage() {
    message.value = "asdkhjfgasdf";
  }

  return (
    <>
      <h1 className="text-3xl text-red-400">TESTING</h1>
      <h1>SIGNALS TESTING</h1>
      <button
        className="w-24 bg-blue-400 h-8 rounded-lg"
        onClick={() => updateMessage}
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
