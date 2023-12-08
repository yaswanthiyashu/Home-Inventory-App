import React, { useState, useEffect } from "react";
import "./Styles.css";

import AdditemBlock from "./AdditemBlock";
import ItemsList from "./ItemsList";

const ItemsBlock = ({ setOpen }) => {
  const [showAddItem, setShowAddItem] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/app/src/Components/Items.json");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleAddItemClick = () => {
    setShowAddItem(true);
  };

  const handleAddItemClose = () => {
    setShowAddItem(false);
  };

  const handleItemAddition = (newItem) => {
    setItems([...items, newItem]);
    setShowAddItem(false);
  };

  const handleLogout = () => {
    setOpen(false);
  };

  return (
    <div className="">
      <div className="">
        <h2 className="heading">Your Items</h2>
        <button className="btn" onClick={handleAddItemClick}>
          add new item
        </button>
      </div>

      <p onClick={handleLogout} style={{ cursor: "pointer" }}>
        Logout
      </p>

      <div style={{ padding: "15px" }}>
        <ItemsList items={items} />
      </div>

      {showAddItem && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleAddItemClose}>
              &times;
            </span>
            <AdditemBlock onItemAdd={handleItemAddition} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemsBlock;
