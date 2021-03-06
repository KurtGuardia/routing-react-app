import React, { useState, useEffect } from "react";
import "./App.css";

function Item({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState({});

  const APP_ID = "409f6da1";
  const APP_Key = "0865acf96c9a6e35ded44c98b4e8b249";

  const fetchItem = async () => {
    const fetchItem = await fetch(
      "https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_Key}"
    );
    const item = await fetchItem.json();
    setItem(item);
    console.log(item);
  };

  return (
    <div>
      <h1>{match.params.label}</h1>
    </div>
  );
}

export default Item;
