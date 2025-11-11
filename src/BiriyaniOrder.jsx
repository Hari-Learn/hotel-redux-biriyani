import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderBiriyani } from "./redux/biriyaniSlice";

const BiriyaniOrder = () => {
  const [biriyaniType, setBiriyaniType] = useState("");
  const dispatch = useDispatch();

  // Get the orders from the store (hotel)
  const orders = useSelector((state) => state.biriyani.orders);

  const handleOrder = () => {
    if (biriyaniType.trim() === "") return;
    // Dispatch an action to the chef
    dispatch(orderBiriyani(biriyaniType));
    setBiriyaniType(""); // reset input
  };

  return (
    <div>
      <h2>Place a Biriyani Order 🍛</h2>
      <input
        type="text"
        value={biriyaniType}
        placeholder="Type biriyani (chicken/mutton)"
        onChange={(e) => setBiriyaniType(e.target.value)}
      />
      <button onClick={handleOrder}>Order</button>

      <h3>Orders Ready:</h3>
      <ul>
        {orders.map((item, index) => (
          <li key={index}>{item} Biriyani</li>
        ))}
      </ul>
    </div>
  );
};

export default BiriyaniOrder;
