
import './App.css';
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import WatchHistory from './pages/WatchHistory'
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div>
       <h1>Video Player</h1>
       <Header/>


       <Routes>
          <Route path='/'    element={<LandingPage/>} />
          <Route path='/home'   element={<Home/>} />
          <Route path='/watch-history'   element={<WatchHistory/>} />
       </Routes>

       <Footer/>
       
    </div>
  );
}

export default App;
