import './App.css';
import { useState, useMemo } from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from "react-bootstrap"
import Header  from './components/Header'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import { UserContext } from './UserContext';

function App() {

  const [user, setUser] = useState({})

  return (
    <Router>
        <UserContext.Provider value={{ user, setUser }}>
          <Header />
          <main>
                    <Route path="/login" component={LoginScreen} exact/>
                    <Route path="/" component={HomeScreen} exact/>
          </main>
        </UserContext.Provider>
    </Router>
  );
}

export default App;
