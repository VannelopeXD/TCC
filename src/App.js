import './App.css';
import{ Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Destinos from './Pages/Destinos/Destinos';
import Holidays from './Pages/Holidays/Holidays';
import CityBreaks from './Pages/CityBreaks/Citybreaks';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Footer from './Components/Footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/CityBreaks' element={<CityBreaks/>} />
          <Route path='/holidays' element={<Holidays/>} />
          <Route path='/destinos' element={<Destinos/>} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
