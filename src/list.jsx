import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import "./css/mylist.css";

export const MyList = () => {
  const [myData, setMyData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
            description: arrProps.description,
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
                <a href={arrProps.link} target="_blank">
                  {arrProps.name}
                </a>
                <a className="description">
                  Description: {arrProps.description}
                </a>
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
