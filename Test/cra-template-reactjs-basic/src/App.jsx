import './App.css';
import reactLogo from './react-logo.png';

function App() {
    return (
        <section className="App-header">
            <a
                href="http://thetechdevs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="App-logo"
            >
                <img src={reactLogo} alt="React Logo" className="App-react-logo" />
            </a>

            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </section>
    );
}

export default App;
