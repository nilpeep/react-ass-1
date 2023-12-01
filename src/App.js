import "./App.css";
import Header from "./components/header/Header";
import Card from "./components/card/LessonCard";
import { data } from "./data";

function App() {
  return (
    <div className="App">
      <Header />
      <Card data={data} />
    </div>
  );
}

export default App;
