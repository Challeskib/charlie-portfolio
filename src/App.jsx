import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "./header";
import { MyList } from "./list";

function App() {
  return (
    <div className="App">
      <Header />
      <button>Github Starred Projects</button>
      <MyList />
    </div>
  );
}

export default App;
