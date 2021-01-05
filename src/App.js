import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Blog from "./Components/Blog";
import Worksecttion from "./Components/Worksecttion";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Blog />
      <Worksecttion />
      <Footer />
    </div>
  );
}

export default App;
