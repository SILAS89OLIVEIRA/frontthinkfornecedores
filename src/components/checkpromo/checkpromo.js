import React from "react";
import { Form, FormGroup, Row, Col, Container } from 'reactstrap';
import { FormControl, InputLabel, Select, MenuItem, Unstable_TrapFocus  } from "@material-ui/core";
import MenuSuperior from "../menuSuperior/MenuSuperior";
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { TextField, Button } from "@material-ui/core";
import { withStyles, makeStyles, lighten } from '@material-ui/core/styles';
//imports tabela
//import Unstable_TrapFocus from '@material-ui/core/Unstable_TrapFocus';
import { DataGrid } from '@material-ui/data-grid';


const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
];



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
            <div >
                <Col xl={6}>
                    <Container className="container-theme" fluid={true}>
                        <Form >
                            <Row>
                                <Col sm={12} md={4} lg={4} xl={4}>

                                    <FormGroup>
                                        <TextField
                                            id="standard-multiline-flexible"
                                            label="De:"
                                            multiline
                                            maxRows={4}
                                            value=""
                                        />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} md={4} lg={4} xl={4}>
                                    <FormGroup>
                                        <TextField
                                            id="standard-multiline-flexible"
                                            label="Até:"
                                            multiline
                                            maxRows={4}
                                            value=""
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                        <Form>
                            <Row>
                                <Col sm={12} md={4} lg={4} xl={4} >
                                    <FormGroup >
                                        <InputLabel id="select-label">Buscar</InputLabel>
                                        <Select
                                            labelId="select-label"
                                            id="select"
                                            label="Buscar"
                                        >
                                            <MenuItem selected disabled value="">Selecione Opção</MenuItem>
                                            <MenuItem value=""></MenuItem>
                                            <MenuItem value=""></MenuItem>
                                            <MenuItem value=""></MenuItem>
                                        </Select>
                                    </FormGroup>
                                </Col>
                                <Col sm={12}>
                                    <Button style={{ background: "#007bff", color: "#fff", borderRadius: "0%" }}>Filtrar</Button>{' '}
                                </Col>
                            </Row>
                        </Form>
                    </Container>
                </Col>
            </div>
            <div>
                <Container>
                    <Row>
                        <Form>
                            <Col sm="12" md={{ size: 6, offset: 8 }} >
                                <FormGroup >

                                    <Select
                                        labelId="select-label"
                                        id="select"
                                        label="Tipos de Códigos"
                                    >
                                        <MenuItem selected disabled value="">Selecione Opção</MenuItem>
                                        <MenuItem value=""></MenuItem>
                                        <MenuItem value=""></MenuItem>
                                        <MenuItem value=""></MenuItem>
                                    </Select>
                                </FormGroup>
                                <div style={{ height: 400, width: '100%' }}>
                                    <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
                                </div>

                            </Col>
                        </Form>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
export default checkpromo;