import { Card } from "@/components";
import "./App.css";

function App() {
  
  return (
    <>
      <div>
        <h1 className="m-3 text-3xl dark:text-white">Vite Tailwind Starter Template</h1>
        <Card>Sample Card</Card>
        <Card>Sample Card</Card>
        <button className="m-3 text-sm rounded bg-blue-500 p-3 text-white" onClick={() => {
           if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
          } else {
            document.documentElement.classList.add('dark');
          }
        }}>Toggle theme</button>
        
      </div>
    </>
  );
}

export default App;
