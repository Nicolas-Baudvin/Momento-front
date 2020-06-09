import React from "react";
import "./style.scss";

// component
import Registration from "../Login";

export default () => (
  <main className="home">
    <h1 className="home-title">Bienvenue sur <strong>Memento</strong></h1>
    <h3 className="home-subtitle">Votre gestionnaire de listes de tâches !</h3>
    <div className="home-registration">
      <Registration />
    </div>
  </main>
);
