import { Link } from 'react-router-dom';
function NavBar({pretrazi}) {
  return (
    <div>
        <nav className="nav">
            <div className="nav__title"><h1>Filmovi</h1></div>
                <ul className="nav__list">
                    <li className="nav__item__search"> 

                      <input type="text" id="kriterijum" placeholder="Search.." 
                      name="search" onChange={()=>pretrazi(document.getElementById('kriterijum').value)}/>

                    </li>
                    <li className="nav__item">   <Link to='/'>Početna</Link></li>
                    <li className="nav__item"> <Link to='/onama'>O nama</Link></li>
                    <li className="nav__item"> <Link to='/filmovi'>Filmovi</Link></li>
                    <li className="nav__item"> <Link to='/listaGledanja'>Lista gledanja</Link></li>

                </ul>
        </nav>
    </div>
  );
}

export default NavBar;