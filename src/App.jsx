import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import InputSection from "./components/InputSection";
import ResultsSection from "./components/ResultsSection";
import Footer from "./components/Footer";
import ScrollButton from "./components/ScrollButton";

function App() {
  const [colors, setColors] = useState([]);
  const [prompt, setPrompt] = useState("");
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route
          path="/colors"
          element={<InputSection setColors={setColors} setPrompt={setPrompt} />}
        />
        <Route
          path="/result"
          element={<ResultsSection colors={colors} prompt={prompt} />}
        />
      </Routes>
      <ScrollButton />
      <Footer />
    </>
  );
}

export default App;
