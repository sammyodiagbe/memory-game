import GameDataProvider from "../context/game-brain";

function MyApp({ Component, pageProps }) {
  return (
    <GameDataProvider>
      <Component {...pageProps} />
    </GameDataProvider>
  );
}

export default MyApp;
