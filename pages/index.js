import { useContext, useState } from "react";
import { gameData } from "../context/game-brain";
import { useRouter } from "next/router";

const Home = () => {
  const [theme, setTheme] = useState("Numbers");
  const [noOfPlayers, setNoOfPlayers] = useState(1);
  const [gridSize, setGridSize] = useState(4);
  const { initializeGame } = useContext(gameData);
  const router = useRouter();

  const updateTheme = (event) => {
    const { value } = event.target;
    setTheme(value);
  };

  const updateNumberOfPlayers = (event) => {
    const { value } = event.target;
    setNoOfPlayers(parseInt(value));
  };

  const updateGridSize = (event) => {
    const { value } = event.target;
    setGridSize(parseInt(value));
  };

  const startGame = (event) => {
    event.preventDefault();

    initializeGame(theme, noOfPlayers, gridSize);
    router.push("/game");
  };
  return (
    <div className="container">
      <div className="form-container">
        <form className="game-mode-selection" onSubmit={startGame}>
          <p className="title">Select Theme</p>
          <div className="inputs-field theme">
            <div className="input">
              <input
                type="radio"
                id="game-theme-numbers"
                name="game-theme"
                className="input-radio"
                checked={theme === "Numbers" ? true : false}
                onChange={updateTheme}
                value={"Numbers"}
              />
              <label htmlFor="game-theme-numbers" className="input-label">
                Numbers
              </label>
            </div>
            <div className="input">
              <input
                type="radio"
                id="game-theme-icons"
                name="game-theme"
                className="input-radio"
                onChange={updateTheme}
                value={"Icons"}
                checked={theme === "Icons" ? true : false}
              />
              <label htmlFor="game-theme-icons" className="input-label">
                Icons
              </label>
            </div>
          </div>
          <p className="title">Select Number of Players</p>

          <div className="inputs-field players">
            <div className="input">
              <input
                type="radio"
                id="one-player"
                name="game-no-of-players"
                value={1}
                className="input-radio"
                checked={noOfPlayers === 1 ? true : false}
                onChange={updateNumberOfPlayers}
              />
              <label htmlFor="one-player" className="input-label">
                1
              </label>
            </div>
            <div className="input">
              <input
                type="radio"
                value={2}
                id="two-player"
                name="game-no-of-players"
                className="input-radio"
                checked={noOfPlayers === 2 ? true : false}
                onChange={updateNumberOfPlayers}
              />
              <label htmlFor="two-player" className="input-label">
                2
              </label>
            </div>
            <div className="input">
              <input
                type="radio"
                id="three-player"
                value={3}
                name="game-no-of-players"
                className="input-radio"
                checked={noOfPlayers === 3 ? true : false}
                onChange={updateNumberOfPlayers}
              />
              <label htmlFor="three-player" className="input-label">
                3
              </label>
            </div>
            <div className="input">
              <input
                type="radio"
                id="four-player"
                name="game-no-of-players"
                value={4}
                className="input-radio"
                checked={noOfPlayers === 4 ? true : false}
                onChange={updateNumberOfPlayers}
              />
              <label htmlFor="four-player" className="input-label">
                4
              </label>
            </div>
          </div>
          <p className="title">Grid Size</p>

          <div className="inputs-field size">
            <div className="input">
              <input
                type="radio"
                value={4}
                id="fourx4"
                name="game-board-size"
                className="input-radio"
                onChange={updateGridSize}
                checked={gridSize === 4 ? true : false}
              />
              <label htmlFor="fourx4" className="input-label">
                4 x 4
              </label>
            </div>
            <div className="input">
              <input
                type="radio"
                value={6}
                id="sixx6"
                name="game-board-size"
                className="input-radio"
                onChange={updateGridSize}
                checked={gridSize === 6 ? true : false}
              />
              <label htmlFor="sixx6" className="input-label">
                6 x 6
              </label>
            </div>
          </div>
          <div className="input-container">
            <button className="btn">Start Game</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
