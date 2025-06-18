import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./page/layout";
import Home from "./page/home";
import Login from "./page/login.jsx";
import Register from "./page/register.jsx";
import NoPage from "./page/noPage.jsx";

import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
