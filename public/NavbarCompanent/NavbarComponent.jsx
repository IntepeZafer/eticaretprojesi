import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FaBasketShopping } from "react-icons/fa6";
import { AiTwotoneShop } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { FaUserAlt } from 'react-icons/fa'
import React from 'react'
import './style.css'

const NavbarComponent = () => {
  return (
    <div classNameName='container-fluid shadow-sm'>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">        
  <div className="container">
    <a className="navbar-brand d-flex w-100 align-content-between align-items-center gap-2" href="#"><AiTwotoneShop/>TrendShop</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav d-flex gap-5">
        <li className="nav-item d-flex align-items-center">
            <FaUserAlt />
          <a className="nav-link" href="#">Hesabım</a>
        </li>
        <li className="nav-item d-flex align-items-center">
          <MdFavorite />
          <a className="nav-link" href="#">Favorilerim</a>
        </li>
        <li className="nav-item d-flex align-items-center">
          <FaBasketShopping />
          <a className="nav-link">Sepetim</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<input class="form-control me-2 border-top-0" type="search" placeholder="Search" aria-label="Search"></input>
    </div>
  )
}

export default NavbarComponent
