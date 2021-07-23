import React, { useState, useCallback, useEffect } from "react";
import { Form, FormGroup, Row, Col, Container, Card, Input } from 'reactstrap';
import { InputLabel, Select, MenuItem, FormControl } from "@material-ui/core";
import MenuSuperior from "../menuSuperior/MenuSuperior";
import api from '../../api'
import { StickyTable, Rows, Cell } from 'react-sticky-table';
import { TextField, Button } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

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



const Checkpromo = (props) => {
    const [combocodigo, setCombocodigo] = useState([]);
    const for_cod = localStorage.getItem('for_cod');
    

    const [tabela, setTabela] = useState([]);
    console.log(tabela);
    const [tabelacheck, setTabelacheck] = useState(null);
    const [isActive2, setIsActive2] = useState(null);

    const [combocodigosele, setCombocodigosele] = useState([]);
    const [isActive, setIsActive] = useState(false);

    function onChange2(ev) {
        const { name, value } = ev.target;
        setCombocodigosele(value);
        if (ev !== '') {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }
    const [revista, setRevista] = useState(null);
    const [isActive4, setIsActive4] = useState(false); 

    function onChange4(ev) {
        const {name, value} = ev.target;
        setRevista(value); console.log(value);
        if (ev !== '') {
            setIsActive4(true);
        } else {
            setIsActive4(false);
        }
    }

    function onChange1(ev) {
        const { name, value } = ev.target;
        setTabelacheck(value);

        if (ev !== '') {
            setIsActive2(true);
        } else {
            setIsActive2(false);
        }
    }

    useEffect(() => {
        api.get(`combocodigo/${for_cod}/`).then(response => {
            setCombocodigo(response.data)
        })
    }, [for_cod]);
    const tabelacheckpro = useCallback(() => {
        api.get(`checkpro/${combocodigosele}/`).then(response => {
            setTabela(response.data)

        })
    }, [combocodigosele]);



    return (
        <div>
            <MenuSuperior />
            <center><h1 style={{ marginBottom: '1%', fontFamily: "Roboto, sans-serif", color: '#A9A9A9' }}>Produtos de Promoção</h1></center>
            <Container className="container-theme" fluid={true}>
                <Row>
                    <Col md={8}>

                        <Card style={{ width: "40%", height: "100%", boxshadow: '#848484', margin: '0 0 0 0' }}>
                            <Form id="altura">
                                <Row>
                                    <Col >
                                    
                                        <FormGroup >
                                        <FormControl>
                                            <InputLabel id="select-label"></InputLabel>
                                            <Select
                                                labelId="select-label"
                                                id="select"
                                                onChange={onChange2}
                                                style={{ width: "100%", margin: '0 0 0 5%' }}

                                            >
                                                <MenuItem selected disable value="">SELECIONE OPÇÃO</MenuItem>
                                                {combocodigo.map(combocodigo => (
                                                    <MenuItem key={combocodigo.for_cod} value={combocodigo.for_cod} > {combocodigo.for_cod + ' - ' + combocodigo.for_nom}  </MenuItem>
                                                ))}
                                            </Select>
                                            </FormControl>
                                        </FormGroup>
                                       
                                    </Col>
                                </Row>
                                <Row>
                                    <Col >
                                        <FormGroup>
                                            <Button onClick={tabelacheckpro} style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "40%", height: "10%", margin: '5% 0 0 5%', fontSize: "13px" }}>Filtrar</Button>{' '}
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Form>
                        </Card>

                    </Col>
                   <Row>
                    <Col>
                        <Form >
                            <StickyTable style={{ width: '200%', height: '100%', margin: '-11% 0 0 30%' }}>
                                <Rows>
                                    <Cell style={{ background: '#007bff', color: 'white' }}></Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>NOME</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>CÓDIGO</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>DESCRIÇÃO</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>N°. PRODUTO</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>PREÇO</Cell>
                                </Rows>
                                {tabela.map((tabela, idx) => (
                                    <Rows key={idx} tabela={tabela}>
                                        <Cell><Input addon type="checkbox"></Input></Cell>
                                        <Cell>{tabela.for_nom}</Cell>
                                        <Cell>{tabela.for_cod}</Cell>
                                        <Cell>{tabela.produtos_descricao}</Cell>
                                        <Cell>{tabela.produtos_numero}</Cell>
                                        <Cell>{tabela.produtos_preco}</Cell>
                                    </Rows>
                                ))}
                            </StickyTable>
                        </Form>
                    </Col>
                    </Row>   
                     <Button style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "10%", height: "15%", margin: '0 0 0 30%', fontSize: "13px" }}>Enviar</Button>{' '}
                </Row>
            </Container>
        </div>
    );
}
export default Checkpromo;