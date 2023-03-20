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

  const makeSelection = (coordinate) => {};

  const initializeGame = (theme, noOfPlayers, grid) => {
    if (theme !== "Numbers") {
      setUseIcon(true);
    }

    if (noOfPlayers > 1) {
      setIsSolo(true);
      setNumberOfPlayers(noOfPlayers);
    }

    let board = grid === 4 ? fourByFour : sixBysix;
    setBoard(board);
    setGridSize(grid);
  };

  const sixBysix = () => {
    return [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ];
  };

  const fourByFour = () => {
    return [
      [0, 0, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
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
      }}
    >
      {children}
    </gameData.Provider>
  );
};

export default GameDataProvider;
