import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Shop() {
  useEffect(() => {
    fetchITems();
  }, []);

  const [items, setItems] = useState([]);
  const APP_ID = "409f6da1";
  const APP_Key = "0865acf96c9a6e35ded44c98b4e8b249";

  const fetchITems = async () => {
    const data = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_Key}`
    );
    const items = await data.json();
    console.log(items.hits);
    setItems(items.hits);
  };

  return (
    <div>
      {items.map((item) => (
        <h1 key={item.recipe.label}>
          <Link to={`/shop/${item.recipe.label}`}>{item.recipe.label}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;
