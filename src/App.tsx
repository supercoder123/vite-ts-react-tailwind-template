import { useState } from "react";
import { Card } from "@/components/Card";
import "./App.css";

function App() {
  const [theme, setTheme] = useState('light');
  
  return (
    <>
      <div>
        <h1 className="m-3 text-3xl dark:text-white">Vite Tailwind Starter Template</h1>
        <Card>Sample Card</Card>
        <Card>Sample Card</Card>
        <button className="m-3 text-sm rounded bg-blue-500 p-3 text-white" onClick={() => setTheme(prevState => { 
          if (prevState === 'light') {
            document.documentElement.classList.add('dark');
            return 'dark';
          } else {
            document.documentElement.classList.remove('dark');
            return 'light';
          }
        })}>Toggle theme</button>
        
      </div>
    </>
  );
}

export default App;
