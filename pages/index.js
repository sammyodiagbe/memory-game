const Home = () => {
  return (
    <div className="container">
      <div className="form-container">
        <form className="game-mode-selection">
          <div className="inputs-field">
            <div className="input">
              <input
                type="radio"
                value={null}
                id="game-theme-numbers"
                name="game-theme"
                className="input-radio"
              />
              <label htmlFor="game-theme-numbers" className="input-label">
                Numbers
              </label>
            </div>
            <div className="input">
              <input
                type="radio"
                value={null}
                id="game-theme-icons"
                name="game-theme"
                className="input-radio"
              />
              <label htmlFor="game-theme-icons" className="input-label">
                Numbers
              </label>
            </div>
          </div>
          <div className="inputs-field">
            <div className="input">
              <input
                type="radio"
                value={null}
                id="one-player"
                name="game-no-of-players"
                className="input-radio"
              />
              <label htmlFor="one-player" className="input-label">
                Numbers
              </label>
            </div>
            <div className="input">
              <input
                type="radio"
                value={null}
                id="two-player"
                name="game-no-of-players"
                className="input-radio"
              />
              <label htmlFor="two-player" className="input-label">
                Numbers
              </label>
            </div>
            <div className="input">
              <input
                type="radio"
                value={null}
                id="three-player"
                name="game-no-of-players"
                className="input-radio"
              />
              <label htmlFor="three-player" className="input-label">
                Numbers
              </label>
            </div>
            <div className="input">
              <input
                type="radio"
                value={null}
                id="four-player"
                name="game-no-of-players"
                className="input-radio"
              />
              <label htmlFor="four-player" className="input-label">
                Numbers
              </label>
            </div>
          </div>
          <div className="inputs-field">
            <div className="input">
              <input
                type="radio"
                value={null}
                id="fourx4"
                name="game-board-size"
                className="input-radio"
              />
              <label htmlFor="fourx4" className="input-label">
                Numbers
              </label>
            </div>
            <div className="input">
              <input
                type="radio"
                value={null}
                id="sixx6"
                name="game-board-size"
                className="input-radio"
              />
              <label htmlFor="sixx6" className="input-label">
                Numbers
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
