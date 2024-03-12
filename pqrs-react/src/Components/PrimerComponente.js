import React from 'react';
import { FaWhatsapp, FaInstagram, FaEnvelope, FaMapMarker } from 'react-icons/fa';


export const logo = '../robot.png';
export const logo1 = '../logo.png';

export const PrimerComponente = () => {
  return (
    <div>
      <header id="header">
        <img src="logo.png" alt="" id="logo" />
        <nav id="nav_re">
        </nav>
      </header>

      <div className="container-form">
        <div className="info-form">
          <h2>¿Tiene algún problema o encontró algún error con nuestro sistema?.</h2>
          <p>A continuación, describa su problema y con gusto nos contactaremos con usted.</p>
          <a href="#"><i className="fa fa-phone"></i> 3223514588</a>
          <a href="mailto:aulaspapeleria@gmail.com"><i className="fa fa-envelope"></i> aulaspapeleria@gmail.com</a>
          <a href="#"><i className="fa fa-map-marked"></i> Bogotá, San Pablo</a>
        </div>
        <form action="#" autoComplete="off">
          <input type="text" name="nombre" placeholder="Tu Nombre" className="campo" />
          <input type="email" name="email" placeholder="Tu Email" className="campo" />
          <textarea name="mensaje" placeholder="Tu Mensaje..."></textarea>
          <input type="submit" name="enviar" value="Enviar Mensaje" className="btn-enviar" />
        </form>
      </div>

      <footer className="pie-pagina">
        <div className="grupo-1">
          <div className="box">
            <figure>
              <a href="#">
                <img src={logo} className="App-logo" alt="logo" />
              </a>
            </figure>
          </div>
          <div className="box">
            <h2>SOBRE NOSOTROS</h2>
            <p>🖨️ multicopiado -fotocopiado</p>
            <br />
            <p>📚empastes , anillado y laminado.</p>
            <br />
            <p>✂️📐📎🎨 papelería escolar, universitaria y empresarial</p>
            <br />
            <p>🧩🪀⚽🎉🎈 juguetería , piñatería</p>
          </div>
          <div className="box">
            <h2>SIGUENOS</h2>
            <div className="red-social">
              <a href="https://wa.me/573223514588" className="fa fa-whatsapp"><FaWhatsapp /></a>
              <a href="https://instagram.com/aulas_papeleria?utm_source=qr" className="fa fa-instagram"><FaInstagram /></a>
              <a href="mailto:aulaspapeleria@gmail.com" className="fa fa-solid fa-envelope"><FaEnvelope /></a>
              <a href="https://goo.gl/maps/WZmoDn9XXMqybu58A" className="fa fa-map-marker "><FaMapMarker /></a>
            </div>
          </div>
        </div>
        <div className="grupo-2">
          <small>&copy; J&M D.S - Todos los derechos reservados</small>
        </div>
      </footer>
    </div>
  );
}

export default PrimerComponente;
