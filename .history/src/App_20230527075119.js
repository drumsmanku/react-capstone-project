import './App.css';
import RegistrationPage from './components/RegistrationPage';
import SubmitSuccess from './components/SubmitSuccess';
import CategoriesPage from './components/CategoriesPage';
import TestComponent from './components/TestComponent';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  
  const colors=['#FF5209', '#D7A4FF','#148A08','#84C2FF','#902500','#7358FF','#FF4ADE','#E61E32','#6CD061',];
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<RegistrationPage />}/>
          <Route path='/success' element={<SubmitSuccess/>}/>
          <Route path='/categories' element={<CategoriesPage  backgroundcolor={colors} />}/>
          <Route path='/test' element={<TestComponent/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
