import React from "react";

const Intro = () => {
    return (
        <section className="intro" id="intro" style={{ background: "#F6F4F2" }}>
            <div className="container">
                <div className="intro-content">
                    <div className="column">
                        <div className="text text-center">
                            <h1>Esta es tu Oportunidad de Futuro</h1>
                            <div className="square my-3">
                                <div className="line"></div>
                            </div>
                            <p>
                                Fórmate con nosotros y conviértete en un profesional del Make Up. Ofrecemos clases totalmente<br />
                                personalizadas, buen ambiente de aprendizaje y multitud de prácticas reales en diferentes<br />
                                sectores como desfiles, sesiones fotográficas, televisión y videoclips.<br />
                                <br />
                                ¿Qué esperas?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
