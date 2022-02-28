function CheckWin(squares) {
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
       const btn= document.querySelectorAll('.element');
       btn[a].classList.add("victory");
       setInterval(() => {
        btn[b].classList.add("victory");
       }, 200); 
       setInterval(() => {
        btn[c].classList.add("victory");
       }, 400); 
      return squares[a];
    }
  }
  return null;
}

export default CheckWin;
