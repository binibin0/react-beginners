import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./routes/Details";
import Home from "./routes/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
