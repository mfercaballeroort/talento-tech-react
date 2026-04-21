// Layout.jsx
import React from 'react';
import './Layout.css'; // Podés crear este archivo para aislar estos estilos, o usar el global

const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <header className="header">
        <div className="container header-content">
          <h1 className="logo">TechStore</h1>
          <nav className="nav-bar">
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#productos">Productos</a></li>
              <li><a href="#contacto">Contacto</a></li>
              <li><a href="#carrito">Carrito</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="main-content container">
        {children}
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} TechStore. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;