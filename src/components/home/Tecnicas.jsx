import React from "react";
import vanguardistasImg from "../../assets/web/Vanguardistas.png";
import maquillajeImg from "../../assets/maquillaje.png";

const Tecnicas = () => {
    return (
        <section className="tecnicas" id="tecnicas">
            <div className="container">
                <div className="tecnicas-content">
                    <div className="column left">
                        <div className="text">
                            <img src={vanguardistasImg} alt="Maquillaje Profesional" />
                            <br /><br />
                            <p>
                                Consigue dedicarte al maquillaje profesional aprendiendo
                                nuevas técnicas y puliendo las existentes. Invierte en tu
                                conocimiento y sé tu mejor versión.
                                <br /><br />
                                Formaciones prácticas, actualizadas y cercanas.
                            </p>
                            <br />
                            <button type="button" className="btn btn-middle">
                                <a href="#" style={{ textDecoration: "none" }}>
                                    Conoce más &gt;
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className="column right">
                        <img src={maquillajeImg} alt="Ejemplo Maquillaje" className="center no-repeat responsive" />
                        <div className="square">
                            <div className="rectangulo"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tecnicas;
