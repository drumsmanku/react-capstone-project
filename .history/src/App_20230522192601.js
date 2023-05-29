import './App.css';
import RegistrationPage from './components/RegistrationPage';
import SubmitSuccess from './components/SubmitSuccess';
import CategoriesPage from './components/CategoriesPage';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' Component={RegistrationPage}/>
          <Route path='/success' Component={SubmitSuccess}/>
          <Route path='/categories' Component={CategoriesPage}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
