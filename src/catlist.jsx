import { useState, useEffect } from "react";

export const MyCatList = () => {
  const [catFact, setCatFact] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://catfact.ninja/fact?max_length=140")
      .then((response) => response.json())
      .then((data) => {
        setCatFact(data.fact);
        setIsLoading(false);
        console.log(data.fact);
      });
  }, []);

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
      <button onClick={fetchCatFact}>CAT FACT BUTTON</button>
      {isLoading ? <p>Loading...</p> : <p>{catFact}</p>}
    </div>
  );
};
