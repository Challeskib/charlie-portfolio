import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const MyList = () => {
  const [myData, setMyData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/challeskib/starred")
      .then((res) => {
        const data = res.data;
        const newArray = data.map((arrProps) => {
          return {
            key: arrProps.id,
            name: arrProps.name,
            link: arrProps.html_url,
          };
        });
        setMyData(newArray);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading == false ? (
        <ul>
          {myData.map((arrProps) => {
            return (
              <li key={arrProps.key}>
                <span>
                  <a href={arrProps.link} target="_blank">
                    {arrProps.name}
                  </a>
                </span>
              </li>
            );
          })}
        </ul>
      ) : (
        <h1>LOADING LOADING LOADING</h1>
      )}
    </div>
  );
};
