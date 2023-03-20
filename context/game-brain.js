import { createContext, useState } from "react";

export const gameData = createContext();

const GameDataProvider = ({ children }) => {
  const [isSolo, setIsSolo] = useState(true);
  const [useIcon, setUseIcon] = useState(false);
  const [board, setBoard] = useState(null);
  const [numberOfPlayers, setNumberOfPlayers] = useState(1);
  return (
    <gameData.Provider
      value={{
        isSolo,
        useIcon,
        board,
        numberOfPlayers,
      }}
    >
      {children}
    </gameData.Provider>
  );
};

export default GameDataProvider;
