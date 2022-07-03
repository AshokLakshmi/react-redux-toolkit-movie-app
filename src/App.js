import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Routers from "./routers/Routers";

function App() {
  return (
    <div className="main-container">
      <Header />
      <div className="content-container">
        <Routers />
      </div>
      <Footer />
    </div>
  );
}

export default App;
