import { Card } from "@/components";
import ViteLogo from "/vite.svg";
import ReactLogo from "./assets/react.svg";
import TailwindLogo from "./assets/tailwind-css.svg";
import "./App.css";

function App() {
  return (
    <>
      <Card className="p-10 rounded-md max-w-3xl">
        <div className="mx-auto">
          <h1 className="m-3 text-4xl font-bold dark:text-white">
            Vite + React + Tailwind
          </h1>
          <div className="my-4">
            <a href="https://vitejs.dev/">
              <img className="logo" src={ViteLogo} alt="Vite" />
            </a>
            <a href="https://react.dev/">
              <img className="logo" src={ReactLogo} alt="React" />
            </a>
            <a href="https://tailwindcss.com/">
              <img className="logo" src={TailwindLogo} alt="Tailwind" />
            </a>
          </div>

          <button
            className="mt-6 text-sm font-bold rounded bg-blue-500 p-3 text-white hover:opacity-80 transition-opacity ease-in-out duration-300"
            onClick={() => {
              if (document.documentElement.classList.contains("dark")) {
                document.documentElement.classList.remove("dark");
              } else {
                document.documentElement.classList.add("dark");
              }
            }}
          >
            Toggle theme
          </button>
        </div>

        <code className="block my-5 p-4 border rounded dark:bg-slate-100 dark:text-black">
          <ol className="list-decimal list-inside text-left">
            <li className="mb-2">Replace components folder and App.tsx with your own files.</li>
            <li className="mb-2">Path aliases are inbuilt, so anything inside src folder can be used with an alias @/[name].</li>
            <li className="mb-2">Uses tw-merge to merge classes.</li>
            <li className="mb-2">Use CVA for complex components</li>
            <li className="mb-2">No configuration done for tailwind config yet</li>
            <li className="mb-2">Inspired by @shadcn/ui</li>
          </ol>
        </code>
      </Card>
    </>
  );
}

export default App;
