import { NavLink } from "react-router-dom"


const Nav = () => {
  return (
    <header className="nav-container">     

        <h4>Gold</h4>

        <ul className="nav-links">
            <li className="nav-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="services">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="contacts">Contacts</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="emmanuel">Emmanuel</NavLink>
            </li>

            <a href="#" className='btn'>Place an Order</a>
        </ul>
    </header>
  )
}

export default Nav