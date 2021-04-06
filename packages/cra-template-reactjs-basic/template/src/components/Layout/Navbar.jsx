import { Link, NavLink } from 'react-router-dom';
import styles from '../../styles/NavbarStyles.module.scss';

// load pages by on hover
const About = () => import('../../routes/About');
const Home = () => import('../../routes/Home');

const Navbar = () => (
    <main className={styles.navbar}>
        <Link exact to="/">
            <img loading="lazy" src="/logo192.png" alt="logo" height="30px" />
        </Link>

        <section>
            <NavLink exact to="/" onHover={<Home />} activeClassName={styles.selected}>
                Home
            </NavLink>
            <NavLink exact to="/about" onHover={<About />} activeClassName={styles.selected}>
                About
            </NavLink>
        </section>
    </main>
);

export default Navbar;
