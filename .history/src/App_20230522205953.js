import './App.css';
import RegistrationPage from './components/RegistrationPage';
import SubmitSuccess from './components/SubmitSuccess';
import CategoriesPage from './components/CategoriesPage';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  const categories=['category1' ];
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<RegistrationPage />}/>
          <Route path='/success' element={<SubmitSuccess/>}/>
          <Route path='/categories' element={<CategoriesPage categories={categories} />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
