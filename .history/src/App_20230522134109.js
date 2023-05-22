import './App.css';
import RegistrationPage from './components/RegistrationPage';
import SubmitSuccess from './components/SubmitSuccess';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' Component={RegistrationPage}/>
          <Route path='/success' Component={SubmitSuccess}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
