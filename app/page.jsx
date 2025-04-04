"use client";
import React, {useState} from 'react';
import EditorComponent from "../components/Editor"
import Congratulations from "../components/Congratulations";

function App() {
    const [message, setMessage] = useState("There is one bug. Let's see if you can spot it!");
    const [tries, setTries] = useState([]);
    return (
    <div className="flex flex-col justify-center items-center gap-10">
      <h1 className='text-6xl font-bold text-white'>Debuggle</h1>
        {message === "Congratulations!" ? <Congratulations tries={tries}/> : <EditorComponent setMessage={setMessage} tries={tries} setTries={setTries}/> }
    </div>
  );
}

export default App;
