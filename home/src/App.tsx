import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.scss";

// components
import { Header } from "./components/HeaderComponent";
import { Footer } from "./components/FooterComponent";

import SafeComponent from "./components/SafeComponent/SafeComponent";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Suspense fallback={<div>Cargando...</div>}>
      <SafeComponent>
        <Header />
      </SafeComponent>
      <h2>Aplicacion de Micro Frontend utilizando:</h2>
      <h4>React, Typescript, TailwindCSS y Module Federation.</h4>
      <Footer />
    </Suspense>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
