import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-us">
      <h2 className="about-us">Sobre Nosotros</h2>
      <div className="parrafo-about-us">
        <h3>Nuestra Pasión por las Plantas</h3>
        <p>
          En <strong>MiPlantika</strong>, creemos que la naturaleza merece ser
          compartida, explorada y comprendida. Por eso creamos una plataforma
          donde amantes de las plantas, estudiantes, investigadores y curiosos
          pueden descubrir, subir, editar y aprender sobre una increíble
          variedad de familias de plantas de todo el mundo.
        </p>
      </div>
      <div className="parrafo-about-us">
        <h3>
          ¿Qué es <strong>MiPlantika</strong>?
        </h3>
        <p>Plantia es una comunidad interactiva donde puedes:</p>
        <ul className="aboutUs-list">
          <li>📚 Explorar fichas de plantas organizadas por familia.📚</li>
          <li>
            📸 Subir tus propias plantas, compartir fotos, características y
            consejos de cuidado.📸
          </li>
          <li>
            ✏️ Editar información para mejorar la calidad de los datos entre
            todos los usuarios.✏️
          </li>
          <li>
            🌱 Aprender y enseñar, ya que nuestra base crece con el aporte de
            cada miembro.🌱
          </li>
        </ul>
        <p>
          Ya seas un botánico profesional o alguien que acaba de comprar su
          primera maceta, aquí tienes un espacio para crecer.
        </p>
      </div>
      <div className="parrafo-about-us">
        <h3>Nuestra Misión</h3>
        <p>
          Hacer del conocimiento sobre plantas algo accesible, colaborativo y
          visualmente atractivo para todas las personas, en cualquier lugar del
          mundo.
        </p>
      </div>
      <div className="parrafo-about-us">
        <h3>Nuestros Valores</h3>
        <ul className="aboutUs-list">
          <li>
            <strong>Colaboración: </strong> Creemos en el poder de la comunidad
            para construir conocimiento.
          </li>
          <li>
            <strong>Respeto por la naturaleza:</strong> Cada planta es una
            historia viva.
          </li>
          <li>
            <strong>Accesibilidad:</strong> Todos pueden aportar, aprender y
            compartir.
          </li>
          <li>
            <strong>Transparencia:</strong>Toda la información puede ser
            consultada y corregida por los usuarios.
          </li>
        </ul>
      </div>
      <div className="parrafo-about-us">
        <h3>Únete a MiPlantika</h3>
        <p>
          Tu experiencia, tus plantas y tu curiosidad ayudan a que esta
          comunidad florezca.
        </p>
        <p>
          📥 ¿Tienes sugerencias o ideas? Escríbenos a{" "}
          <strong>contacto@miplantika.com</strong>
        </p>
      </div>
    </div>
  );
}
export default AboutUs;
