import React, { useState, useEffect } from "react";
import "./googledrive.css";
import { Card, CardTitle } from 'reactstrap';
//import { useEffect } from "react";

import MenuSuperior from '../menuSuperior/MenuSuperior';



const GoogleDrive = (props) => {

  return (
    <React.Fragment>

    <div>
        <MenuSuperior />


    </div>
    <div>
  <center>
    <iframe src="https://googledriveembedder.collegefam.com/?key=AIzaSyBxXtlZCc1ocHHoG6cHDilaxdw2GCYf5Jc&folderid=1z39TV9L1RmOyEkkR2LQqPayk5GIDwYgH"></iframe>
    </center>

    </div>
    </React.Fragment>
  );
};

export default GoogleDrive;