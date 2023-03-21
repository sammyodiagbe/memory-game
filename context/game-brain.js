import { createContext, useState } from "react";

export const gameData = createContext();

const GameDataProvider = ({ children }) => {
  const [isSolo, setIsSolo] = useState(true);
  const [useIcon, setUseIcon] = useState(false);
  const [board, setBoard] = useState(null);
  const [numberOfPlayers, setNumberOfPlayers] = useState(1);
  const [firstSelection, setFirstSelection] = useState(null);
  const [secondSelection, setSecondSelection] = useState(null);
  const [gridSize, setGridSize] = useState(4);
  const [players, setPlayers] = useState([0, 0, 0, 0]);
  const [playersMatch, setPlayersMatch] = useState([0, 0, 0, 0]);
  const [soloPlayerMoves, setSoloPlayerMoves] = useState(0);

  const makeSelection = (coordinate) => {
    if (firstSelection === null) {
      firstSelection;
    }
  };

  const initializeGame = (theme, noOfPlayers, grid) => {
    if (theme !== "Numbers") {
      setUseIcon(true);
    }

    if (noOfPlayers > 1) {
      setIsSolo(true);
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
    console.log("board");
    console.log(board);
    setBoard(board);
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
      }}
    >
      {children}
    </gameData.Provider>
  );
};

export default GameDataProvider;
