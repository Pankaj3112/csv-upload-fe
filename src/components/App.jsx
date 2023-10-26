import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages";
import { useCsvs } from "../hooks";
import { CsvDisplay } from "./";

function App() {
  const { csvs } = useCsvs();
  console.log(csvs);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/csv/:id" element={<CsvDisplay/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
