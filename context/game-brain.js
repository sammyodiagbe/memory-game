import { createContext, useState } from "react";

export const gameData = createContext();

const GameDataProvider = ({ children }) => {
  const [isSolo, setIsSolo] = useState(true);
  const [useIcon, setUseIcon] = useState(false);
  const [board, setBoard] = useState([]);
  const [numberOfPlayers, setNumberOfPlayers] = useState(1);
  const [firstSelection, setFirstSelection] = useState(null);
  const [gridSize, setGridSize] = useState(4);
  const [players, setPlayers] = useState([0, 0, 0, 0]);
  const [playersMatch, setPlayersMatch] = useState([0, 0, 0, 0]);
  const [soloPlayerMoves, setSoloPlayerMoves] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(1);

  const makeSelection = (coordinate) => {
    const { x: row, y: col } = coordinate;
    let matched = false;
    if (firstSelection === null) {
      setFirstSelection({ value: board[row][col], ...coordinate });
      return null;
    } else {
      if (row === firstSelection.x && col === firstSelection.y) return;
      // now check the comparison
      const newData = { ...coordinate, value: board[row][col] };
      const { value, x, y } = firstSelection;
      if (newData.value === value) {
        // the user has made a valid selection

        // make sure to increase player'r matches according
        const tempBoard = [...board];
        tempBoard[x][y] = value.toString();
        tempBoard[row][col] = value.toString();

        if (!isSolo) {
          let tempArr = [...players];
          tempArr[currentPlayer - 1] += 1;
          setPlayers(tempArr);
        }
        setBoard(tempBoard);

        setFirstSelection(null);
        matched = true;
      } else {
        let index = currentPlayer >= numberOfPlayers ? 0 : currentPlayer + 1;
        setCurrentPlayer(index);
      }
      setFirstSelection(null);
      checkGameWinner();
    }
    return matched;
  };

  const checkGameWinner = () => {
    let tempBoard = [...board];
    tempBoard = tempBoard.flat();

    const check = tempBoard.every((value) => value === "_");
    setGameEnded(check);
  };

  const initializeGame = (theme, noOfPlayers, grid) => {
    console.log(noOfPlayers);
    if (theme !== "Numbers") {
      setUseIcon(true);
    }

    if (noOfPlayers > 1) {
      setIsSolo(false);
      setNumberOfPlayers(noOfPlayers);
    }

    let board = generateBoard(grid);
    setBoard(board);
    setGridSize(grid);
  };

  const generateBoard = (dimension) => {
    console.log("dimension ", dimension);
    const values = dimension === 4 ? [1, 2, 3, 4] : [1, 2, 3, 4, 5, 6];
    let placeholder = [];
    // generating a multidemisional array of size(dimension x dimension)

    for (let count = 0; count < dimension; count++) {
      placeholder = placeholder.concat(values);
    }

    placeholder = shuffleArr(placeholder);
    const board = breakArray(placeholder, dimension);
    return board;
  };

  const breakArray = (arr, dimension) => {
    const newArr = [];
    for (let i = 0; i < dimension; i++) {
      newArr[i] = [];
    }

    for (let i = 0; i < arr.length; i++) {
      const row = Math.floor(i / dimension);
      const col = i % dimension;
      newArr[row][col] = arr[i];
    }
    return newArr;
  };

  const shuffleArr = (arr) => {
    for (let index = arr.length - 1; index > 0; index--) {
      const j = Math.floor(Math.random() * (index + 1));
      [arr[index], arr[j]] = [arr[j], arr[index]];
    }
    return arr;
  };
  return (
    <gameData.Provider
      value={{
        isSolo,
        useIcon,
        board,
        numberOfPlayers,
        initializeGame,
        gridSize,
        soloPlayerMoves,
        makeSelection,
        currentPlayer,
        players,
      }}
    >
      {children}
    </gameData.Provider>
  );
};

export default GameDataProvider;
