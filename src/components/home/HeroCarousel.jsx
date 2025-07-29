import React from "react";
import "../../styles/home.css";

const HeroCarousel = () => {
    return (
        <section id="home" className="carousel slide" data-ride="carousel">
            <div className="max-width">
                {/* Indicators */}
                <ul className="carousel-indicators">
                    <li data-target="#home" data-slide-to="0" className="active"></li>
                    <li data-target="#home" data-slide-to="1"></li>
                    <li data-target="#home" data-slide-to="2"></li>
                </ul>

                {/* Slides */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="/images/home/portada.png"
                            alt="make up"
                            className="d-block w-100"
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h3 className="textosSlide">
                                WITH 30-MINUTE PREMIUM FACIALS BY EXPERT ESTHETICIANS WHO GET<br />
                                YOUR SKIN, SAY GOODBYE TO GUESSWORK.
                            </h3>
                            <a href="/cursos" className="btn btn-middle slideOpciones">
                                NUESTROS CURSOS
                            </a>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img
                            src="/images/home/HEADER 2.png"
                            alt="slide 2"
                            className="d-block w-100"
                        />
                    </div>

                    <div className="carousel-item">
                        <img
                            src="/images/home/HEADER 3.png"
                            alt="slide 3"
                            className="d-block w-100"
                        />
                    </div>
                </div>
                {/* Left and right controls */} 
                <a class="carousel-control-prev" href="#home" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
			    </a>
			    <a class="carousel-control-next" href="#home" data-slide="next">
				    <span class="carousel-control-next-icon"></span>
			    </a>
            </div>
        </section>
    );
};

export default HeroCarousel;
