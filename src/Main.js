import React,{useState} from 'react';

let cnt = 0;

const Main = () => {
    const [turn, setTurn] = useState("X");
    const [squares=["", "", "", "", "", "", "", "", ""], setSquares] = useState();
  
    function checkWin(square) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
          squares[a] &&
          squares[a] === squares[b] &&
          squares[a] === squares[c]
        ) {
  
          return squares[a];
        }
      }
      return null;
    }
    
    
    const newArray = [...squares];
    var val ="";
    function handleClick(event) {
      if (event.target.innerText === "") {
          newArray.splice(event.target.value, 0, turn);
          val = checkWin(squares);
          setSquares(newArray);
          console.log(squares,val);
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
  
  
  function restart(){
      window.location.reload();
  }
    return (
      <div className="container">
        <div className="element-container">
          <button value={0} onClick={handleClick} className="element"></button>
          <button value={1} onClick={handleClick} className="element"></button>
          <button value={2} onClick={handleClick} className="element"></button>
          <button value={3} onClick={handleClick} className="element"></button>
          <button value={4} onClick={handleClick} className="element"></button>
          <button value={5} onClick={handleClick} className="element"></button>
          <button value={6} onClick={handleClick} className="element"></button>
          <button value={7} onClick={handleClick} className="element"></button>
          <button value={8} onClick={handleClick} className="element"></button>
        </div>
        <div className="bottom">
          <div className="chance">{turn}&nbsp;Turn</div>
          {(cnt>0)?<div className="restart" onClick={restart}>Restart</div>:null}
        </div>
      </div>
    );
  };

export default Main;
