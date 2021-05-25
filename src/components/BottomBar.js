import React from 'react';
import { NavLink } from 'react-router-dom';


export default function BottomBar() {

   return (
      <footer>
         <div id="container-footer" className="footer-light-mode">
            <div className="rights">DBIKES | Alvaro Garcia 2021 | MIT License</div>
            <ul className="footer-links">
               <li><NavLink to="/">Map |</NavLink></li>
               <li><NavLink to="/how_it_works">How it works |</NavLink></li>
               <li><NavLink to="/about">About</NavLink></li>
            </ul>
         </div>
      </footer>
   )
}