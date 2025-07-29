import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer" style={{ background: "#F6F4F2" }}>
      <div className="container-fluid">
        {/* LOGOTIPO */}
        <div className="footer-left logo" id="logo">
          <a href="https://makeupbarstudio.com/">
            <img src="/LOGO PEQUEO.svg" alt="logo" className="img-responsive floating_element" />
          </a>
        </div>

        <ul className="footer-right">
          {/* INFORMACIÓN DE CONTACTO */}
          <div className="footerInformacion">
            <h4><strong>¿Nos conocemos?</strong></h4>
            <h5>
              No dudes en contactar con nosotros o venir a conocernos personalmente. <br />
              Estaremos encantados de resolverte cualquier duda o información de nuestros cursos.
              <br /><br />Te esperamos.
            </h5>
            <hr />
            <div className="socials">
              <a href="http://facebook.com/" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f" aria-hidden="true"></i>
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <i className="fab fa-whatsapp" aria-hidden="true"></i>
              </a>
              <a href="http://instagram.com/" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <i className="far fa-envelope" aria-hidden="true"></i>
              </a>
              <p>
                ¿Consultas? Llámanos 24/7 <br />
                <span>+34 652 046 755</span>
              </p>
            </div>
          </div>

          {/* NAVEGACIÓN */}
          <li className="footerNav">
            <h4><b>Navegación</b></h4>
            <ul className="box">
              <li><a href="/">Home</a></li>
              <li><a href="/nosotros">Nosotros</a></li>
              <li><a href="/servicios">Servicios</a></li>
              <li><a href="/cursos">Cursos</a></li>
              <li><a href="/contacto">Contacto</a></li>
            </ul>
          </li>

          {/* CLIENTE */}
          <li className="footerCliente">
            <h4><b>Atención al Cliente</b></h4>
            <ul className="box">
              <li><a href="#">Formas de Pago</a></li>
              <li><a href="#">Garantía</a></li>
              <li><a href="#">Devoluciones</a></li>
              <li><a href="#">Trabajemos juntos</a></li>
              <li><a href="#">Términos y Condiciones</a></li>
              <li><a href="#">Políticas de Privacidad</a></li>
            </ul>
          </li>

          {/* SUSCRIPCIÓN */}
          <div className="formContacto">
            <h4><b>Suscríbete</b></h4>
            <h5>
              Suscríbete a nuestra newsletter<br />
              para recibir las últimas novedades y ofertas especiales.
            </h5>
            <br />
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                name="emailContactenos"
                className="form-control"
                placeholder="Correo"
                required
              />
              <br />
              <button className="btn btn-default text-uppercase" type="submit">
                <span>&gt;</span>
              </button>
            </form>
          </div>
        </ul>

        {/* COPYRIGHT */}
        <div className="container final text-center">
          <hr />
          <h5>
            Copyright &copy; 2021 The Makeup Bar Studio. All Rights Reserved.{" "}
            <a href="#">Términos de uso</a> ·{" "}
            <a href="#">Políticas de privacidad</a> · Desarrollado con{" "}
            <i className="fas fa-heart"></i> por SEMU | Studio Creativo.
          </h5>
          <br />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
