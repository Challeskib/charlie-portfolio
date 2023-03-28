import * as React from "react";
import { Header } from "./header";
import { MyList } from "./list";
import { Content } from "./content";
import "./App.css";
import { MyCatList } from "./catlist";

function App() {
  return (
    <div className="App">
      <Header />
      <button>Github Starred Projects</button>
      <MyList />
      <Content />
      <MyCatList />
    </div>
  );
}

export default App;
