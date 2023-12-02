import React from 'react'

export default function MapSection() {
  return (
    <>
      <div id="map-description">
          <h1 id='map-title'>MAPA DE AYUDA</h1>
          <div className="main-container">
              <div id="map-img">
                  <img src="src/assets/images/mapa.jpeg" alt="IMAGEN DE MAPA" />
              </div>
              <div className="main-paragraph">
                  <div>
                      <p>
                          Tu seguridad es nuestra prioridad, si necesitas ayuda urgente presiona el boton de <span className="highlighted-text">AYUDA</span> y mandaremos un mensaje a tus contactos más cercanos.
                      </p>
                  </div>
                  <div>
                      <button id="help-button">AYUDA</button>
                  </div>
                  <p>
                      Las áreas sombreadas representan zonas donde han ocurrido casos de violencia <span className="highlighted-text">¡Ten cuidado al transitar por esas zonas!</span>. Los colores intensos representan que hay más casos en esas zonas.
                  </p>
              </div>
          </div>
      </div>
    </>
  )
}
