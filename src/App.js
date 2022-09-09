import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import Home from "./pages/home";

function App() {
    const isUserLogged = true;
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
          {isUserLogged ? <Route path="home" element={<Home />} /> : <></> }
      </Routes>
    </div>
  );
}

export default App;
