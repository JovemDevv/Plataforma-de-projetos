import { Link } from 'react-router-dom'

import Container from './Container'

import Styles from './Navbar.module.css'
import logo from '../../img/flame_logo.png'

function Navbar() {
return (
    <nav className={Styles.navbar}>
        <Container>
            <Link to="/">
                <img src={logo} alt='flame' />
            </Link>
            <ul className={Styles.list}>
                <li className={Styles.item}>
                    <Link to="/">Home</Link>
                </li>
                <li className={Styles.item}>
                    <Link to="/Projects">Projetos</Link>
                </li>
                <li className={Styles.item}>
                    <Link to="/contact">Contato</Link>
                </li>
                <li className={Styles.item}>
                    <Link to="/company">Empresa</Link>
                </li>
            </ul>
        </Container>
    </nav>
    )
}

export default Navbar
