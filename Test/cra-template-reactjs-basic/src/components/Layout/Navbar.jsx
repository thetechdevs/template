import { Link, NavLink } from 'react-router-dom';
import styles from '../../styles/NavbarStyles.module.scss';

// load pages by on hover
const about = () => import('../../routes/About');
const home = () => import('../../routes/Home');

const Navbar = () => (
    <main className={styles.navbar}>
        <Link to="/">
            <img loading="lazy" src="/logo192.png" alt="logo" height="30px" />
        </Link>

        <section>
            <NavLink exact to="/" onMouseOver={() => home()} activeClassName={styles.selected}>
                Home
            </NavLink>
            <NavLink
                exact
                to="/about"
                onMouseOver={() => about()}
                activeClassName={styles.selected}
            >
                About
            </NavLink>
        </section>
    </main>
);

export default Navbar;
