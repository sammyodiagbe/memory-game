import GameDataProvider from "../context/game-brain";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <GameDataProvider>
      <Component {...pageProps} />
    </GameDataProvider>
  );
}

export default MyApp;
