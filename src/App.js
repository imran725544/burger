// import logo from "./logo.svg";
// import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import DropdownL from "./Components/DropdownL";

import BurgerSceen from "./Screens/BurgerScreen";
import DetailScreens from "./Screens/DetailScreens";

function App() {
  return (
    <div className="App">
      {/* <h2> JAzz BAzar</h2> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BurgerSceen />}></Route>

          <Route path="/DetailScreens" element={<DetailScreens />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
