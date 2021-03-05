import React, { useState, useEffect } from "react";
import "./googledrive.css";
import { Fade, Button, Row, Col } from 'reactstrap';
//import { useEffect } from "react";

import MenuSuperior from '../menuSuperior/MenuSuperior';



const GoogleDrive = (props) => {


  const [fadeIn1, setFadeIn1] = useState(true);
  const [fadeIn2, setFadeIn2] = useState(true);
  const [fadeIn3, setFadeIn3] = useState(true);


  function toggle1() {
    var display = document.getElementById('scroll1').style.display;
    if(display == "none")
        document.getElementById('scroll1').style.display = 'block';
    else
        document.getElementById('scroll1').style.display = 'none';
}

function toggle2() {
  var display = document.getElementById('scroll2').style.display;
  if(display == "none")
      document.getElementById('scroll2').style.display = 'block';
  else
      document.getElementById('scroll2').style.display = 'none';
}

function toggle3() {
  var display = document.getElementById('scroll3').style.display;
  if(display == "none")
      document.getElementById('scroll3').style.display = 'block';
  else
      document.getElementById('scroll3').style.display = 'none';
}
 
  return (
    <React.Fragment>

    <div>
        <MenuSuperior />


    </div>
    <div >
      <div className="googleDrive">
        <h1 className="tittle">Download de Arquivos</h1>
      </div>
      <div>
        <Row>
          <Col sm={4}>
            <Button className="buttonIframe1" color="primary" onClick={toggle1}>Arquivos Coleções</Button>
          </Col>
          <Col sm={4}>
            <Button className="buttonIframe2" color="primary" onClick={toggle2}>Arquivos Revista</Button>
          </Col>
          <Col sm={4}>
            <Button className="buttonIframe3" color="primary" onClick={toggle3}>Arquivos Gerais</Button>
          </Col>
        </Row>

          <div id="fade">
          <Row>
          <Col sm={12} >
            <Fade in={fadeIn1} tag="h5" className="mt-3">
              <center >
                {/*<iframe src="https://googledriveembedder.collegefam.com/?key=AIzaSyBxXtlZCc1ocHHoG6cHDilaxdw2GCYf5Jc&folderid=1z39TV9L1RmOyEkkR2LQqPayk5GIDwYgH"></iframe>*/}
                <iframe id="scroll1" className="hide" src="https://drive.google.com/embeddedfolderview?id=1lZrt0ocorpEgCty4Zzpw4Q1NwfhieCCS#grid"></iframe>
              </center>
            </Fade>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Fade in={fadeIn2} tag="h5" className="mt-3">
              <center>
                {/*<iframe src="https://googledriveembedder.collegefam.com/?key=AIzaSyBxXtlZCc1ocHHoG6cHDilaxdw2GCYf5Jc&folderid=1z39TV9L1RmOyEkkR2LQqPayk5GIDwYgH"></iframe>*/}
                  <iframe id="scroll2" className="hide" src="https://drive.google.com/embeddedfolderview?id=1z39TV9L1RmOyEkkR2LQqPayk5GIDwYgH#grid"></iframe>
              </center>
            </Fade>
            </Col>
        </Row>
        <Row>
        <Col sm={12}>
            <Fade in={fadeIn3} tag="h5" className="mt-3">
              <center>
                {/*<iframe src="https://googledriveembedder.collegefam.com/?key=AIzaSyBxXtlZCc1ocHHoG6cHDilaxdw2GCYf5Jc&folderid=1z39TV9L1RmOyEkkR2LQqPayk5GIDwYgH"></iframe>*/}
                  <iframe id="scroll3" className="hide" src="https://drive.google.com/embeddedfolderview?id=1amU-GM8eXx8bsQHBApDkGLNm25aJAFYa#grid"></iframe>
              </center>
            </Fade>
            </Col>
        </Row>
          </div>
      </div>
    </div>
    </React.Fragment>
  );
};

export default GoogleDrive;