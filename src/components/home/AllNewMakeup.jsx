import React from "react";
import allNewTitleImg from "../../assets/web/AllNewMakeupTitulo.png";
import newMakeupImg from "../../assets/web/all-new-makeup.png";

const AllNewMakeup = () => {
    return (
        <section className="new" id="new" style={{ background: "#21211F" }}>
            <div className="container">
                <div className="new-content">
                    <div className="column left">
                        <div className="text">
                            <img src={allNewTitleImg} alt="All New Makeup" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                tincidunt ut laoreet dolore magna aliquam.
                            </p>
                            <br />
                            <button type="button" className="btn btn-middle boton1">
                                <a href="#" style={{ textDecoration: "none" }}>Ver más</a>
                            </button>
                            <button type="button" className="btn btn-middle boton2">
                                <a href="#" style={{ textDecoration: "none" }}>Contacto</a>
                            </button>
                        </div>
                    </div>
                    <div className="column right">
                        <img src={newMakeupImg} alt="Makeup ilustración" className="center no-repeat responsive" style={{ maxWidth: "100%" }} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllNewMakeup;
