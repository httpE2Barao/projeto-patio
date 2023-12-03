import React from "react";

export const Header = () => {
  return (
    <header className="App-header">
        <img src="../images/certo-patio-1.svg" 
        width="100" height="100" alt="Patio Logo" className="header-logo" />
        <div className='header-conteinner conteinner-options'>
          <a href="#info" className='.header-options'>
            Sobre
          </a><a href="#" className='.header-options'>
            Contato
          </a><a href="#" className='.header-options'>
            Site Patio
          </a>
        </div>
      </header>
  )
}