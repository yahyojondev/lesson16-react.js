import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import { Routers } from "./static";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {Routers?.map((el) => (
          <Route path={el.path} element={el.Element} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
