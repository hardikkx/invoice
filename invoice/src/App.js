import React from 'react';
import Landing from './Invoice/Invoice';
import Create_invoice from './Invoice/Create_invoice';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Products from './Invoice/Products';
import Customers from './Invoice/Customers';

function App() {
  return (
    <BrowserRouter>
    <div>
       <Navbar/>
       <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/Create_invoice" component={Create_invoice} />
    <Route path="/invoice" component={Landing} />
    <Route path="/Products" component={Products} />
    <Route path="/Customers" component={Customers} />
    </Switch>
    </div>
    </BrowserRouter>
   );    
  }

export default App;
