import React, { useEffect, useState } from "react";
import CheckWin from "./CheckWin";
import Square from "./Square";

let cnt = 0;

const Main = () => {
  //------------ Turn ---------------
  const [turn, setTurn] = useState("X");
  // -------------------------- Access Squares Index  --------------
  const [index, setIndex] = useState();
  // ------------------------  Store Squares Value ----------
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  // ------------------ Temporary store value of turn --------
  const [temp, setTemp] = useState("");

  const newArray = [...squares];
  var val = "";
  function handleClick(event) {
    if (event.target.innerText === "" && (val === null || "")) {
      setIndex(event.target.value);
      event.target.innerText = turn;

      setTurn(() => {
        if (turn === "X") {
          return "O";
        } else {
          return "X";
        }
      });
    }
    cnt++;
  }
  useEffect(() => {
    turn === "X" ? setTemp("O") : setTemp("X");
    newArray.splice(index, 1);
    newArray.splice(index, 0, temp);
    if (cnt !== 0)
      setSquares(() => {
        return newArray;
      });
  }, [turn]);

  val = CheckWin(squares);

  function restart() {
    window.location.reload();
  }
  return (
    <div className="container">
      <div className="exit">
        <a href="/">
          <img src="./img/exit.png" alt="exit" width={24} />
        </a>
      </div>
      <div className="element-container">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((btn, i) => {
          return <Square key={i} value={i} handleClick={handleClick} />;
        })}
      </div>
      <div className="bottom">
        {/*------------ Player Info ----------------- */}
        {val === null || "" ? (
          <div className="chance">{turn}&nbsp;Turn</div>
        ) : (
          <div className="chance">{val}&nbsp;Wins</div>
        )}
        {/* ----------------Restart Button ----------- */}
        {cnt > 0 ? (
          <div className="restart" onClick={restart}>
            Restart
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Main;
