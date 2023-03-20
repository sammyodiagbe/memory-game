import { useContext } from "react";
import { gameData } from "../context/game-brain";

const GameScreen = () => {
  const { board, gridSize, numberOfPlayers, isSolo, soloPlayerMoves } =
    useContext(gameData);

  console.log(soloPlayerMoves);

  const entryStructure = board.map((entry, index) => {
    return (
      <div className="row" key={index}>
        {entry.map((btn, ind) => {
          return (
            <button className="entry btn" key={ind}>
              {btn}
            </button>
          );
        })}
      </div>
    );
  });
  return (
    <div className="container-game">
      <div className="game-screen">
        <nav className="navigation">
          <h2>Memory</h2>
          <button className="btn menu-btn">Menu</button>
        </nav>
        <section className="game-board-container">
          <div className={`board ${gridSize ? "grid4x4" : "grid6x6"}`}>
            {entryStructure}
          </div>
        </section>
        <footer className="footer">
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
        </footer>
      </div>
    </div>
  );
};

export default GameScreen;
