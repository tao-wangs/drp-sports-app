import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";

import FindEvents from "./pages/events/FindEvents";
import HostEventForm from "./pages/host/HostEventForm";
import SignUp from "./pages/auth/SignUp";
import LogIn from "./pages/auth/LogIn";
import MyEvents from "./pages/myevents/MyEvents";
import EventInfo from "./pages/events/EventInfo";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/events" element={<FindEvents />} />
            <Route path="/events/:id" element={<EventInfo />} />
            <Route path="/host" element={<HostEventForm />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/myevents" element={<MyEvents />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
