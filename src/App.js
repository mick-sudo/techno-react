import './css/app.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Menu from './components/Menu';
import TechnoAdd from './components/TechnoAdd';
import TechnoList from './pages/TechnoList';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [technos, setTechnos] = useState([]);


  function handleAddTechno(techno){
    console.log('handleAddTechno', techno);
    //on clone le tableau technos et on ajoute un objet techno
    setTechnos([...technos, {...techno, technoid: uuidv4()}]);
  }

  return (
    <>
    <Menu />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/add' element={<TechnoAdd handleAddTechno={handleAddTechno}/>}/>
      <Route path='/list' element={<TechnoList technos={technos} />}/>
    </Routes>
     </>
  );
}

export default App;
