import { Route, Routes } from "react-router-dom";
import "./App.css";
import IndexPage from "./pages/IndexPage";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import axios from "axios";
import { UserContextProvider } from "./context/userContext.jsx";
import AccountPage from "./pages/AccountPage.jsx";
import PlacesForm from "./pages/PlacesForm.jsx";
import Place from "./pages/Place.jsx";
import BookingsPage from "./pages/BookingsPage.jsx";
import NotFound from "./pages/NotFound.jsx";
//http://localhost:4000/api/v1  https://bookingsapp.onrender.com https://638a-152-58-21-4.ngrok-free.app/
axios.defaults.baseURL = "https://api.prathamalu.xyz/api/v1";
// axios.defaults.baseURL = "http://localhost:4000/api/v1";

axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<IndexPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
