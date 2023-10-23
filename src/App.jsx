import { useState } from "react";
import { BrowserRouter as Router,Routes,  Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SinglePage from "./pages/singlePage/SinglePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route >
          <Route path="/" element={<Home />} />
          <Route path="/single-page" element={<SinglePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
