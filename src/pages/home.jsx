import React from "react";
import "./styles/home.css";

const Home = () => {
  return (
    <div className="main-wrapper">
        <header>
            <nav className="navbar">
                <a href="/" className="logo">MKBar Studio</a>
                <ul className="nav-links">
                    <li><a href="/nosotros">Nosotros</a></li>
                    <li><a href="/servicios">Servicios</a></li>
                    <li><a href="/cursos">Cursos</a></li>
                    <li><a href="/contacto">Contacto</a></li>
                </ul>
            </nav>
        </header>

        <main className="hero">
            <h1>Bienvenido a MK Bar</h1>
            <p>Un lugar para los amantes de la cocteleria y la mixología.</p>
            <a href="/cursos" className="cta-button">Ver Cursos</a>
        </main>
    </div>
  );
};

export default Home;