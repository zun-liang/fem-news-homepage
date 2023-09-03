import Header from "./components/Header";
import Popular from "./components/Popular";
import New from "./components/New";
import Trending from "./components/Trending";
import "./App.css";

const App = () => (
  <div className="app">
    <Header />
    <main>
      <Popular />
      <New />
      <Trending />
    </main>
  </div>
);

export default App;
