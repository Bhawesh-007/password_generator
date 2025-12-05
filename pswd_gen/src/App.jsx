import { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [pass, setPass] = useState("pass");
  const [numallowed, setNumallowed] = useState(false);
  const [charallowed, setCharallowed] = useState(false);

  
  const password_gen = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numallowed) str += "0123456789";
    if (charallowed) str += "!@#$%^&*()_+-={}[];:<>,.?/";

    let generated = "";
    for (let i = 1; i <= length; i++) {
      const rand = Math.floor(Math.random() * str.length);
      generated += str[rand];
    }
    setPass(generated);
  }, [length, numallowed, charallowed]);

  
  
  useEffect(()=>{
    password_gen()
  },[password_gen]);
  return (
    <div className="w-screen h-screen flex flex-col justify-start items-center pt-10">
      
      {/* Heading */}
      <h1 className="text-5xl font-bold mb-10">PASSWORD GENERATOR</h1>

      {/* Slider + Input Layout EXACT SAME AS YOU WROTE */}
      <div className="flex flex-col items-center gap-4">

        {/* Slider */}
        <input
          type="range"
          min={6}
          max={100}
          value={length}
          className="cursor-pointer w-80"
          onChange={(e) => setLength(e.target.value)}
        />

        <div className="flex space-x-2">
          {/* Output Box */}
          <input
            type="text"
            value={pass}
            readOnly
            className="border px-4 py-2 w-80 text-center rounded inline"
          />

        
          <button
            onClick={() => {
              navigator.clipboard.writeText(pass);
              alert("Copied!");
            }}
          >
            Copy
          </button>
        </div>

        {/* Checkboxes (optional additions, layout untouched) */}
        <div className="flex gap-6 mt-4">
          <label>
            <input
              type="checkbox"
              checked={numallowed}
              onChange={() => setNumallowed(!numallowed)}
            />
            Numbers
          </label>

          <label>
            <input
              type="checkbox"
              checked={charallowed}
              onChange={() => setCharallowed(!charallowed)}
            />
            Symbols
          </label>
        </div>

      </div>

    </div>
  );
}

export default App;
