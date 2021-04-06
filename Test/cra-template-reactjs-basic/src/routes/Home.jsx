import Info from '../components/HomePage/Info';
import Layout from '../components/Layout';

const Home = () => {
    const name = 'Home';

    return (
        <Layout>
            <h1>{name} page</h1>
            <Info />
        </Layout>
    );
};

export default Home;
