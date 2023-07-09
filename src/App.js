import { Home } from "./components/Home.js";
import { Routes, Route, useNavigate } from "react-router-dom";
import Register from "./components/Register";
import ResetPassword from "./components/ResetPassword";
import banking from "./banking.png";
import "./App.css";
import UpdatePassword from "./components/UpdatePassword.js";
import Mismatch from "./components/Mismatch.js";

function App() {
  const navigate = useNavigate();
  const clickOnIcon = () => navigate("/");
  return (
    <>
      <nav class="navbar navbar-light bg-light">
        <button onClick={clickOnIcon}>
          <img src={banking}></img>
        </button>
        <a class="navbar-brand">Staff Corner</a>
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

        <Route
          exact
          path={"/Mismatch"}
          element={<Mismatch />}
        ></Route>
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
