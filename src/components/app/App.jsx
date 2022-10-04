
import { CoffeHouse } from '../coffe_house/CoffeHouse';
import './App.scss';
import bean_black from '../../icon/bean_black.svg'
import { OurCoffe } from '../our_coffe/Our_Coffe';
import { ForPleasure } from '../for_pleasure/ForPleasure';
import { NavLink, Route,  BrowserRouter as Router  , Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <header>
      <nav className="nav">
        <NavLink className={({isActive}) => isActive ? 'nav_item active' : 'nav_item'}   to={'/'}>Coffee house</NavLink>
        <NavLink className={({isActive}) => isActive ? 'nav_item active' : 'nav_item'}   to={'/our_coffe'}>Our coffee</NavLink>
        <NavLink className={({isActive}) => isActive ? 'nav_item active' : 'nav_item'}   to={'/for_your_pleasure'}>For your pleasure</NavLink>
      </nav>
    </header>


      <Routes>

        <Route path='/' element={<CoffeHouse/>}/>
        <Route path='/our_coffe/*' element={ <OurCoffe/>}/>
        <Route path='/for_your_pleasure' element={<ForPleasure/>}/>
        <Route path='*' element={<h1>Page not found</h1>}/>

      </Routes>

   


    <footer>
      <div className="container">
        <nav className="nav">
          <NavLink className={({isActive}) => isActive ? 'nav_item active' : 'nav_item'} to={'/'}>Coffee house</NavLink>
          <NavLink className={({isActive}) => isActive ? 'nav_item active' : 'nav_item'} to={'/our_coffe'}>Our coffee</NavLink>
          <NavLink className={({isActive}) => isActive ? 'nav_item active' : 'nav_item'} to={'/for_your_pleasure'}>For your pleasure</NavLink>
        </nav>
        <div className="beans_icon_black">
            <hr/>
            <img src={bean_black} alt="bean"/>
            <hr/>
        </div>
      </div>
    </footer>
    </Router>
  );
}

export default App;
