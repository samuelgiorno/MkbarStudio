import React, { useState } from "react";

const Newsletter = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Correo suscrito:", email);
        setEmail("");
        //integrar una API o endpoint para guardar el email
    };

    return (
        <section className="newsletter" id="newsletter">
            <div className="container">
                <div className="newsletter-content">
                    <div className="column">
                        <div className="text">
                            <h1>Entérate de lo Último</h1>
                            <div className="square">
                                <br />
                                <div className="line"></div>
                            </div>
                            <p>
                                Obtén descuentos en nuestros cursos y servicios personalizados,
                                todo de forma fácil y directo a tu correo electrónico.
                            </p>
                            <form className="form-inline" onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Correo Electrónico"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <button type="submit" className="btn btn-primary">
                                    SUSCRÍBETE &gt;
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
