import { Home } from "./components/Home.js";
import { Routes, Route, useNavigate } from "react-router-dom";
import Register from "./components/Register";
import ResetPassword from "./components/ResetPassword";
import banking from "./banking.png";
import "./App.css";
import UpdatePassword from "./components/UpdatePassword.js";
import Mismatch from "./components/Mismatch.js";
import { Dashboard } from "./Customer/Dashboard.js";
import { useState } from "react";

function App() {
  const navigate = useNavigate();
  const clickOnIcon = () => navigate("/");
  const [login, setLogin] = useState(true);

  const navigate1 = useNavigate();
  const clickOnLogout = () => navigate1("/");
  const clickOnProfile = () => navigate1("/Dashboard");
  return (
    <>
      <nav class="navbar navbar-light bg-light">
        <button onClick={clickOnIcon}>
          <img src={banking}></img>
        </button>
        
        {login ? (
          <a class="navbar-brand">
            <button
              onClick={clickOnLogout}
              type="button"
            >
                  Logout
            </button>
          </a>
        ) : (
          <a class="navbar-brand">Staff Corner</a>
        )}
        <a class="navbar-brand">
        <button
              onClick={clickOnProfile}
              type="button"
            >
              Profile   
            </button>
        </a>
        

            
           



      </nav>
      <Routes>
        <Route exact path={"/"} element={<Home />}></Route>

        <Route exact path={"/register"} element={<Register />}></Route>
        <Route
          exact
          path={"/resetPassword"}
          element={<ResetPassword />}
        ></Route>

        <Route
          exact
          path={"/UpdatePassword"}
          element={<UpdatePassword />}
        ></Route>

        <Route exact path={"/Mismatch"} element={<Mismatch />}></Route>

        <Route exact path={"/Dashboard"} element={<Dashboard />}></Route>
      </Routes>

      <nav class="navbar fixed-bottom navbar-light bg-light">
        <a class="navbar-brand" href="#">
          FOOTER
        </a>
      </nav>
    </>
  );
}

export default App;
