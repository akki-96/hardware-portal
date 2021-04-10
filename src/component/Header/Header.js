 //import AddShoppingCartRoundedIcon from "@material-ui/icons/AddShoppingCartRounded";
 //import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import React from "react";
import {BrowserRouter as Router,Switch,Route,NavLink } from "react-router-dom";
import Home from "../Home/Home";
import Services from "../Services/Services";
import Products from "../Products/Products";
import About from "../About/About";
import Contact from "../Contact/Contact";
import "./header.css"
import logo from './logo.png';

const Header =()=> {
  return (
    <>
    <Router>
    <nav>
        <img className="pos" src={logo} alt="Logo" />
      <div className="logo">
        <h1>Hardware Selling Portal</h1>
    </div>
      <div className="menu">
       
        <NavLink exact activeClassName="active_class"  to="/home">HOME</NavLink>
        <NavLink exact activeClassName="active_class"  to="/services">SERVICES</NavLink>
        <NavLink exact activeClassName="active_class"  to="/products">OUR PRODUCTS</NavLink>
        <NavLink exact activeClassName="active_class" to="/about">ABOUT</NavLink>
        <NavLink exact activeClassName="active_class"  to="/contact">CONTACT</NavLink>
      </div>
      </nav>
     
      <div>
         {/* <AddShoppingCartRoundedIcon /> */}
        <div>
        <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/products">
           <Products />
        </Route>
        <Route exact path="/services">
          <Services />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        </Switch>
          </div>
        </div>
        </Router>  
  </>
  );
}

export default Header;
