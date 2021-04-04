import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/home'

function App() {
  return (
    <Router>
      <Switch>
        <Route path = '/' component = {Home} />
      </Switch>
    </Router>
  );
}

export default App;
