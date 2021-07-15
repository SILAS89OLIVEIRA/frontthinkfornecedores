import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './components/login/Login';
import VendaEstoque from './components/vendaEstoque/VendaEstoque';
import GoogleDrive from './components/googledrive/googledrive';
import checkpromo from "./components/checkpromo/checkpromo";

export default function Routes (){
    return(
     <BrowserRouter>
 
         <Route path="/" exact component={Login} /> 
         <Route path="/vendaestoque" component={VendaEstoque} /> 
         <Route path="/googledrive" component={GoogleDrive} /> 
         <Route path="/checkpromo" component={checkpromo}/>
         
         
     </BrowserRouter>
    );
}