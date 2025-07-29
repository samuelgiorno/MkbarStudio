import React from "react";
import profesional from "../../assets/prosional.png";
import fileCorto from "../assets/filecorto.png";

const Informacion = () => {
    return (
        <section className="informacion justify-content-around" id="informacion" style={{ background: "white" }}>
            <div className="container">
                <div className="informacion-content">
                    <div className="column left">
                        <img src={fileCorto} alt="file corto" className="center no-repeat responsive" />
                        <div className="square">
                            <div className="rectangulo"></div>
                        </div>
                    </div>
                    <div className="column right">
                        <div className="text">
                            <img src={profesional} alt="Maquillaje Profesional" />
                            <br /><br />
                            <p>
                                Consigue dedicarte al maquillaje profesional aprendiendo<br />
                                nuevas técnicas y puliendo las existentes. Invierte en tu<br />
                                conocimiento y sé tu mejor versión.<br /><br />
                                Formaciones prácticas, actualizadas y cercanas.
                            </p>
                            <br />
                            <button type="button" className="btn btn-middle">
                                <a style={{ textDecoration: "none" }} href="#">Conoce más &gt;</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </section>
    );
};

export default Informacion;
