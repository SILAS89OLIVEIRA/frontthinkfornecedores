import React, { useState } from "react";
import "./down.css";

const urlToDownload = "https://docs.google.com/uc?export=download&id=10Blt3dts1zMIAXIT_D8YdVzeeKFKEMM3";

export default function App() {
  const [download, setDownload] = useState("");
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>DevPleno - Download from React</h1>
      <p>
        <button
          onClick={() => {
            setDownload(urlToDownload);
            setCount((old) => old + 1);
          }}
        >
          Download
        </button>
      </p>
      <p>{download}</p>
      {download && (
        <iframe src={download} style={{ display: "none" }}></iframe>
      )}
    </div>
  );
}
