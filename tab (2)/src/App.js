import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Express from './pages/Express';
import Order from './pages/Order';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/express" exact={true} component={Express} />
        <Route path="/order" exact={true} component={Order} />
      </Routes>
    </Router>
  );
}
export default App;