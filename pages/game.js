import { useContext, useState } from "react";
import { gameData } from "../context/game-brain";
import Icon from "./components/icon";

const GameScreen = () => {
  const {
    board,
    gridSize,
    numberOfPlayers,
    makeSelection,
    isSolo,
    soloPlayerMoves,
    currentPlayer,
    players,
    useIcon,
  } = useContext(gameData);
  const [isFirst, setIsFirst] = useState(false);
  const [menu, showMenu] = useState(false);

  const playInLocation = ({ currentTarget }) => {
    console.log(currentTarget);
    const { cor } = currentTarget.dataset;
    console.log(cor);
    const data = JSON.parse(cor);
    currentTarget.classList.add("flipped");

    const check = makeSelection(data);
    if (check === false) {
      setTimeout(() => {
        let elements = document.getElementsByClassName("flipped");
        elements = Array.from(elements);
        for (let element of elements) {
          element.classList.remove("flipped");
        }
      }, 1500);
    }
  };

  const entryStructure = board
    ? board.map((entry, index) => {
        return (
          <div className="row" key={index}>
            {entry.map((btn, ind) => {
              const data = JSON.stringify({ x: index, y: ind });
              console.log(data);
              return (
                <button
                  className={`entry btn ${
                    btn.toString() === board[index][ind] && "matched"
                  }`}
                  key={ind}
                  data-cor={data}
                  onClick={playInLocation}
                >
                  {useIcon ? <Icon value={btn} /> : btn}
                </button>
              );
            })}
          </div>
        );
      })
    : null;

  const restartGame = () => {};
  const resumeGame = () => {
    showMenu(false);
  };
  return (
    <div className="container-game">
      <div className="game-screen">
        <nav className="navigation">
          <h2>Memory</h2>
          <button className="btn menu-btn" onClick={() => showMenu(true)}>
            Menu
          </button>
          {menu && (
            <div className="menu">
              <div className="content">
                <button className="btn action-btn" onClick={restartGame}>
                  Restart
                </button>
                <button className="btn action-btn">New Game</button>
                <button className="btn action-btn" onClick={resumeGame}>
                  Resume Game
                </button>
              </div>
            </div>
          )}
        </nav>
        <section className="game-board-container">
          <div className={`board ${gridSize === 4 ? "grid4x4" : "grid6x6"}`}>
            {entryStructure}
          </div>
        </section>
        <footer className="footer">
          {isSolo ? (
            <div className="solo-player">
              <div className="time">
                <p>Time</p>
                <h3>1:53</h3>
              </div>
              <div className="time">
                <p>Moves</p>
                <h3>{soloPlayerMoves}</h3>
              </div>
            </div>
          ) : (
            <div className="players">
              {Array.from({ length: numberOfPlayers }).map((_, index) => {
                return (
                  <div
                    className={`player ${
                      currentPlayer === index + 1 && "turn"
                    }`}
                  >
                    <p> player {index + 1}</p>
                    <b>{players[index]}</b>
                  </div>
                );
              })}
            </div>
          )}
        </footer>
      </div>
    </div>
  );
};

export default GameScreen;
