import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

// components
import { Header } from "./components/HeaderComponent";
import { Footer } from "./components/FooterComponent";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <h2>Aplicacion de Micro Frontend utilizando:</h2>
    <h4>React, Typescript, TailwindCSS y Module Federation.</h4>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
