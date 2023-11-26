import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import { AppLayout } from "./pages/AppLayout";
import Login from "./pages/Login";
import { CityList } from "./components/CityList";
import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:7000";

function App() {
  const [cities, setCities] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}/cities`);
        // console.log(response);
        const data = await response.json();
        console.log(data);
        setCities(data);
      } catch (error) {
        console.log(error.message);
        alert("ERROR loading data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCities();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<CityList />}></Route>
          <Route path="cities" element={<CityList />} />
          <Route path="countries" element={<p>COUNTIRES HERE</p>} />
          <Route path="form" element={<p>FORM HERE</p>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
