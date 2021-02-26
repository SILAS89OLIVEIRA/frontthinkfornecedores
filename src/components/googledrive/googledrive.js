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
      <h1 className="tittle">Download de Arquivos</h1>
  <center>
    {/*<iframe src="https://googledriveembedder.collegefam.com/?key=AIzaSyBxXtlZCc1ocHHoG6cHDilaxdw2GCYf5Jc&folderid=1z39TV9L1RmOyEkkR2LQqPayk5GIDwYgH"></iframe>*/}
    <iframe id="scroll" src="https://drive.google.com/embeddedfolderview?id=1z39TV9L1RmOyEkkR2LQqPayk5GIDwYgH#grid"></iframe>
    </center>

    </div>
    </React.Fragment>
  );
};

export default GoogleDrive;