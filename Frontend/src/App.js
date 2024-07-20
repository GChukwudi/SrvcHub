import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Sidebar from './components/Layout/Sidebar';
import ArtisanPage from './pages/Artisans';
import BookingPage from './pages/Bookings';
import Admin from './pages/Admin';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/artisans" component={ArtisanPage} />
        <Route path="/bookings" component={BookingPage} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </Router>
  );
}

export default App;