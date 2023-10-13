import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AppDetailPage from './pages/AppDetailPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/app/:appId" component={AppDetailPage} />
      </Switch>
    </Router>
  );
}

export default App;
