import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <>
  <div className="container">
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
      <p className="col-md-4 mb-0 text-muted">&copy; 2021 JESUUELX, Todos los derechos Reservados</p>
      <Link to="/"
        className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <svg className="bi me-2" width={40} height={32}><img src="/imgs/iphone13.png" w className="logo" alt="logo" /></svg>
      </Link>
      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Inicio</Link></li>
        <li className="nav-item"><Link to="/tipo/1" className="nav-link px-2 text-muted">Apple</Link></li>
        <li className="nav-item"><Link to="/tipo/2" className="nav-link px-2 text-muted">Samsung</Link></li>
        <li className="nav-item"><Link to="/tipo/3" className="nav-link px-2 text-muted">Xiaomi</Link></li>
        <li className="nav-item"><Link to="/tipo/4" className="nav-link px-2 text-muted">Motorola</Link></li>
      </ul>
    </footer>
  </div>

    </>
  )
}
