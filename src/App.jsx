import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router,Routes,  Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Orders from "./pages/orders/Orders";
import SinglePage from "./pages/singlePage/SinglePage";
export const SearchContext = createContext()

function App() {
  const [state, setState] = useState({
    isFetched: false,
    products: [], 
    error: false
  });
  const [search, setSearch] = useState('');
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setState({
          products: data, 
          isFetched: true,
          error: false
        });
      })
      .catch((err) => {
        setState({
          isFetched: true,
          products: [], 
          error: true
        });
      });
  }, []);
  return (
    <SearchContext.Provider value={{ search, setSearch, state }}>
    <Router>
      <Routes>
        <Route >
          <Route path="/" element={<Home />} />
          <Route path="/single-page/:id" element={<SinglePage />} />
          <Route path="/orders" element={<Orders/>} />
        </Route>
      </Routes>
    </Router>
    </SearchContext.Provider>
  );
}

export default App;
