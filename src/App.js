import React, { useState } from "react";
import "./styles.css";

export default function App() {
  let [user1, setUser1] = useState([]),
    [user2, setUser2] = useState([]),
    [counter, setCounter] = useState(1),
    block1 = [1, 2, 3],
    block2 = [4, 5, 6],
    block3 = [7, 8, 9],
    handleClick = item => {
      if (counter % 2 === 0 && !user1.includes(item) && !user2.includes(item)) {
        setUser1(user1.concat(item));
      }
      if (counter % 2 !== 0 && !user1.includes(item) && !user2.includes(item)) {
        setUser2(user2.concat(item));
      }
      counter++;
      setCounter(counter);
      isWinner();
    },
    isWinner = () => {
      let winner = "";
      let pattern = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
      ];
      pattern.forEach(items => {
        let user1Check = items.filter(ele => {
          return !user1.includes(ele);
        });
        if (user1Check.length == 0) {
          winner = "user1";
        }
        let user2Check = items.filter(ele => {
          return !user2.includes(ele);
        });
        if (user2Check.length == 0) {
          winner = "user2";
        }
      });
      if (winner == "user1") {
        alert("USER 1 is the winner");
      }
      if (winner == "user2") {
        alert("USER 2 is the winner");
      }
    };
  console.log("user1", user1);
  console.log("user2", user2);
  console.log("counter", counter);
  return (
    <div className="App">
      <h1>TIC TAC TOE</h1>
      USER 1: X USER 2: O
      <div className="block">
        {block1.map(item => {
          return (
            <div
              className="innerBlock"
              id={item}
              onClick={() => handleClick(item)}
            >
              {user1.includes(item) && "X"}
              {user2.includes(item) && "O"}
            </div>
          );
        })}
      </div>
      <div className="block">
        {block2.map(item => {
          return (
            <div className="innerBlock" onClick={() => handleClick(item)}>
              {user1.includes(item) && "X"}
              {user2.includes(item) && "O"}
            </div>
          );
        })}
      </div>
      <div className="block">
        {block3.map(item => {
          return (
            <div className="innerBlock" onClick={() => handleClick(item)}>
              {user1.includes(item) && "X"}
              {user2.includes(item) && "O"}
            </div>
          );
        })}
      </div>
    </div>
  );
}
