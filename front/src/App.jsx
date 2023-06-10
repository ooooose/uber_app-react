import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { Restaurants } from './containers/Restaurants.jsx';
import { Foods } from './containers/Foods.jsx';
import { Orders } from './containers/Orders.jsx';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/restaurants/:restaurantsId/foods" element={<Foods />} />
            <Route path="/orders" element={<Orders />} />
        </Routes>
    </Router>
  );
}

export default App;
