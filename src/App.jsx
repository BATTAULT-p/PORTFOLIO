import { BrowserRouter as Router } from "react-router-dom";
import NavBar2 from "./components/NavBar2";
import Transition from "./components/Transition";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar2 />
        <Transition />
      </Router>
    </div>
  );
}

export default App;
