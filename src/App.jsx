import * as React from "react";
import { Header } from "./header";
import { MyList } from "./list";
import { Content } from "./content";
import "./css/App.css";
import { MyCatList } from "./catlist";

const ShowTextButtons = () => {
  return (
    <div className="button-container">
      <button className="buttons">Show Github Projects</button>
      <button className="buttons">About me</button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="inner-container">
          <ShowTextButtons />
          <MyList />
          <Content />
          <MyCatList />
        </div>
      </div>
    </div>
  );
}

export default App;
