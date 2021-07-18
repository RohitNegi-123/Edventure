import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Course from './components/pages/CoursePage/Course';
import Footer from './components/pages/Footer/Footer';
function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/' exact component={Home} />
        <Route path='/courses' exact component={Course}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
