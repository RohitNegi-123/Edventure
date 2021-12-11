import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import SignIn from "./components/Login";
import SignUp from "./components/SignUp";
import Logout from "./components/Logout";
import Course from './components/pages/CoursePage/Course';
import Footer from './components/pages/Footer/Footer';
localStorage.setItem("bool", "false");
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' exact component={Home} />
        <Route exact path='/sign-up' exact component={SignUp} />
        <Route exact path='/sign-in' exact component={SignIn} />
        <Route exact path='/logout' exact component={Logout} />
        <Route path='/courses' exact component={Course} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
