import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Transition from "./components/Transition";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Transition />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
