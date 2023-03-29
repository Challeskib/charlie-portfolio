import { useState, useEffect } from "react";

export const MyCatList = () => {
  const [catFact, setCatFact] = useState("");
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {}, []);

  const fetchCatFact = () => {
    setIsLoading(true);
    fetch("https://catfact.ninja/fact?max_length=140")
      .then((response) => response.json())
      .then((data) => {
        setCatFact(data.fact);
        setIsLoading(false);
        console.log(data.fact);
      });
  };

  return (
    <div>
      <button onClick={fetchCatFact}>
        RANDOM CAT FACT BUTTON API
      </button>
      {isLoading ? <p>Loading...</p> : <p>{catFact}</p>}
    </div>
  );
};
