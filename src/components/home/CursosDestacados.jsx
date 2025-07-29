import React from "react";
import cursoInicialImg from "../assets/ATAJO 1.png";
import cursoProImg from "../assets/ATAJO 2.png";

const CursosDestacados = () => {
    return (
        <section className="services" id="services" style={{ background: "#F6F4F2" }}>
            <div className="container">
                <center><h1 className="title">Nuestros Cursos</h1></center>
                <div className="square">
                    <br />
                    <div className="line"></div>
                </div>
                <br /><br />
                <div className="services-content">
                    <div className="column left">
                        <span className="badge badge-primary">CURSO INICIAL</span>
                        <img src={cursoInicialImg} alt="Level Up Makeup" className="center no-repeat responsive" />
                        <h2 className="subtitle">Level Up Makeup</h2>
                        <p><b>Dictado por</b> Alejandra Romero <i className="far fa-clock"></i> 3 meses</p>
                    </div>
                    <div className="column right">
                        <span className="badge badge-primary">CURSO PROFESIONAL</span>
                        <img src={cursoProImg} alt="All Skins Makeup" className="center no-repeat responsive" />
                        <h2 className="subtitle">All Skins Makeup</h2>
                        <p><b>Dictado por</b> Alejandra Romero <i className="far fa-clock"></i> 6 meses</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CursosDestacados;
