import React from "react";
import { Form, FormGroup, Row, Col, Container } from 'reactstrap';
import { FormControl, InputLabel, Select, MenuItem, Unstable_TrapFocus } from "@material-ui/core";
import MenuSuperior from "../menuSuperior/MenuSuperior";
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { TextField, Button } from "@material-ui/core";
import { withStyles, makeStyles, lighten } from '@material-ui/core/styles';

import { MDBInput, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import Grid from "antd/lib/card/Grid";
import Card from "reactstrap/lib/Card";




const data_checkboxes = {
    columns: [
        {
            'check': <MDBInput type="checkbox" id="checkbox2" />,
            'field': 'check',
            'sort': 'asc'

        },
        {
            'label': 'coluna1',
            'field': 'lorem',
            'sort': 'asc'
        },
        {
            'label': 'coluna2',
            'field': 'lorem',
            'sort': 'asc',
        },
    ],
    rows: [
        {

            'check': <MDBInput type="checkbox" id="checkbox2" />,
            'Descrição': ' ',

        },
    ]
};

const CssTextField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "black"
        },
        "& label": {
            color: "black"
        },
        "& .MuiInput-underline:before": {
            borderBottomColor: "black"
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "black"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "black"
            },
            "&:hover fieldset": {
                borderColor: "black"
            },
            "&.Mui-focused fieldset": {
                borderColor: "black"
            }
        }
    }
})(TextField);



const checkpromo = (props) => {
    return (
        <div>
            <MenuSuperior />
            
                <center><h1 style={{ marginBottom: '1%', fontFamily: "Roboto, sans-serif", color: '#848484' }}>Produtos de Promoção</h1></center>
                <Container className="container-theme" fluid={true}>
                    <Row>
                        <Col lg={8}>

                            <Card style={{ width: "50%", height: "60%", boxshadow: '#848484' }}>
                                <Form id="altura">
                                    <Row>
                                        <Col sm={12} md={4} lg={4} xl={4} >
                                            <FormGroup >
                                                <InputLabel id="select-label"></InputLabel>
                                                <Select
                                                    labelId="select-label"
                                                    id="select"
                                                    label="Buscar"
                                                    style={{ width: "410%", margin: '0 0 0 10%' }}

                                                >
                                                    <MenuItem selected disabled value="">Selecione Opção</MenuItem>
                                                    <MenuItem value=""></MenuItem>
                                                    <MenuItem value=""></MenuItem>
                                                    <MenuItem value=""></MenuItem>
                                                </Select>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={12}>
                                            <FormGroup>
                                                <Button style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "40%", height: "2%", margin: '0% 0 0 5%', fontSize: "13px" }}>Filtrar</Button>{' '}
                                                <Button style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "40%", height: "0.5%", margin: '0.5% 0 0 13%', fontSize: "13px" }}>Enviar</Button>{' '}
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Form>
                            </Card>

                        </Col>
                        <Col lg={4}>
                           
                                <Row>
                                    <Form id="altura">

                                        <Grid>
                                            <MDBTable bordered >
                                                <MDBTableHead columns={data_checkboxes.columns} />
                                                <MDBTableBody rows={data_checkboxes.rows} />
                                            </MDBTable>
                                        </Grid>

                                    </Form>
                                </Row>                           
                       </Col>
                </Row>
            </Container>
           
      </div>
            );
}
            export default checkpromo;