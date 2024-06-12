import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import InputSection from "./components/InputSection";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/colors" element={<InputSection />} />
        <Route path="/" element={<MainSection />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;