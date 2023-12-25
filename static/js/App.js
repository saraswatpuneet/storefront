import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import sample from "./files/Qvideo.mp4";

function App() {
  
  return (
    <div className="App">
      <video autoPlay loop muted className="background-video">
        <source src={sample} type="video/mp4" />
      </video>
      <div classname="headerHome">
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
