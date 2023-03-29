import * as React from "react";
import { Header } from "./header";
import { MyList } from "./list";
import { Content } from "./content";
import "./css/App.css";
import { MyCatList } from "./catlist";
import { useState } from "react";

function App() {
  const [showText, setShowText] = useState(false);

  const TextButtons = () => {
    return (
      <div className="button-container">
        <button className="buttons" onClick={() => setShowText(true)}>
          Github Projects
        </button>
        <button
          className="buttons"
          onClick={() => setShowText(false)}
        >
          About me
        </button>
      </div>
    );
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="inner-container">
          <TextButtons />
          {showText ? <MyList /> : <Content />}

          <MyCatList />
        </div>
      </div>
    </div>
  );
}

export default App;
