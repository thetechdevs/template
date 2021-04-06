import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => (
    <main>
        <Navbar />
        {children}
        <Footer />
    </main>
);

export default Layout;
