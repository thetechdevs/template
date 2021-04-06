import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// routes
const About = lazy(() => import(/* webpackPrefetch:true */ './routes/About'));
const Home = lazy(() => import('./routes/Home'));
const PageNotFound = lazy(() => import('./routes/PageNotFound'));

function App() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route component={PageNotFound} />
                </Switch>
            </Suspense>
        </Router>
    );
}

export default App;
