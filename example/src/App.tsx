import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ShowRoom } from "./sections/ShowRoom";
import { useWindowSize } from "./utils/hooks";

function App() {
  const screenWidth = useWindowSize();

  return (
    <div className="App">
      <Header screenWidth={screenWidth} />

      <ShowRoom />

      <Footer />
    </div>
  );
}

export default App;
