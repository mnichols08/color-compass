import { useState, useMemo, useEffect, useRef } from "react";
import extractJSON from "./utils/extractJson";
import ColorPicker from "./components/ColorPicker";
import InputForm from "./components/InputForm";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import ResultsSection from "./components/ResultsSection";
import InputSection from "./components/InputSection";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <MainSection />
      <InputSection />
      <Footer />
    </>
  );
}

export default App;
