import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const dispatch = useDispatch();

  const cash = useSelector((state) => state.cash);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };
  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  return (
    <main>
      <div className="App">
        <h1 className="h1">{cash}</h1>
        <button onClick={()=>addCash(Number(prompt()))}>Add cash</button>
        <button onClick={()=>getCash(Number(prompt()))} style={{ marginLeft: "10px" }}>
          Get cash
        </button>
      </div>
    </main>
  );
}
