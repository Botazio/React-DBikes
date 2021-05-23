import { Link } from 'react-router-dom';
import redBike from '../fixtures/icon-bike-red.png';
import yellowBike from '../fixtures/icon-bike-yellow.png';
import greenBike from '../fixtures/icon-bike-green.png';

const Navbar = () => {
   return (
      <nav className="navbar">
         <div>
            <div className="navbar-logo">
               <img src={redBike} style={{ "width": "35px", "height": "35px" }} alt={'red bike'} />
               <img src={yellowBike} style={{ "width": "35px", "height": "35px" }} alt={'yellow bike'} />
               <img src={greenBike} style={{ "width": "35px", "height": "35px" }} alt={'green bike'} />
               <h2 id="logo-navbar">DBIKES</h2>
            </div>
         </div>
         <div className="navbar-links">
            <Link to="/">MAP</Link>
            <Link to="/how_it_works">HOW IT WORKS</Link>
            <Link to="/about">ABOUT</Link>
         </div>
      </nav>
   );
}

export default Navbar;
