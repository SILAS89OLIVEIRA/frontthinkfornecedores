import React, { useState, useCallback, useEffect } from 'react';
import { Container, Row, Col, Card, FormGroup } from 'reactstrap';
import MenuSuperior from '../menuSuperior/MenuSuperior';
import api from '../../api'
import $ from "jquery";
import { StickyTable, Rows, Cell } from 'react-sticky-table';

import { TextField, Select, MenuItem, InputLabel, Button } from "@material-ui/core";
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

const Movimentacao = (props) => {
    function hoje() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!

        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        var formatado = dd + '/' + mm + '/' + yyyy;
        var bd = yyyy + '' + mm + '' + dd;
        var valores = { 'formatado': formatado, 'bd': bd };
        return valores;
    }

    const [combocodigo, setCombocodigo] = useState([]);
    const [combocodigosele, setCombocodigosele] = useState([]);
    const [combocodigosele2, setCombocodigosele2] = useState([]);
    const [combocodigosele3, setCombocodigosele3] = useState([]);
    const [combocodigosele4, setCombocodigosele4] = useState([]);
    const [combocodigosele5, setCombocodigosele5] = useState([]);
    const [combocodigosele6, setCombocodigosele6] = useState([]);
    const [combocodigosele7, setCombocodigosele7] = useState([]);
    const [combocodigosele8, setCombocodigosele8] = useState([]);
    const [combocodigosele9, setCombocodigosele9] = useState([]);
    const [combocodigosele10, setCombocodigosele10] = useState([]);
    const [combocodigosele11, setCombocodigosele11] = useState([]);
    const [combocodigosele12, setCombocodigosele12] = useState([]);

    const for_cod = localStorage.getItem('for_cod')
    const [entcard, setEntcard] = useState([]);
    const [pedcard, setPedcard] = useState([]);
    const [trocard, setTrocard] = useState([]);
    const [dfcard, setDfcard] = useState([]);
    const [tabela, setTabela] = useState([]);
    const [tabela2, setTabela2] = useState([]);
    const [tabela3, setTabela3] = useState([]);
    const [tabela4, setTabela4] = useState([]);
    const [tabela5, setTabela5] = useState([]);
    const [tabela6, setTabela6] = useState([]);
    const [tabela7, setTabela7] = useState([]);
    const [tabela8, setTabela8] = useState([]);
    const [tabela9, setTabela9] = useState([]);
    const [tabela10, setTabela10] = useState([]);
    const [tabela11, setTabela11] = useState([]);
    const [tabela12, setTabela12] = useState([]);

    const [datainicial, setDatainicial] = useState([]);
    const [datafinal, setDatafinal] = useState([]);




    useEffect(() => {
        api.get(`combocodigo/${for_cod}/`).then(response => {
            setCombocodigo(response.data)

        })
    }, [for_cod]);

    {/*Cards */ }
    useEffect(() => {
        api.get(`totitement/${for_cod}/${hoje().bd}/${hoje().bd}/`).then(response => {
            setEntcard(response.data)
            console.log(for_cod, hoje().bd)
        })
    }, [for_cod]);
    useEffect(() => {
        api.get(`totitempe/${for_cod}/${hoje().bd}/${hoje().bd}/`).then(response => {
            setPedcard(response.data)
        })
    }, [for_cod]);
    useEffect(() => {
        api.get(`totitemtr/${for_cod}/${hoje().bd}/${hoje().bd}/`).then(response => {
            setTrocard(response.data)
        })
    }, [for_cod]);
    useEffect(() => {
        api.get(`totitemdff/${for_cod}/${hoje().bd}/${hoje().bd}/`).then(response => {
            setDfcard(response.data)
        })
    }, [for_cod]);


    {/*selects*/ }
    const [isActive, setIsActive] = useState(false);

    function onChange1(ev) {
        const { name, value } = ev.target;
        setCombocodigosele(value);
        if (ev !== '') {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }

    const [isActive1, setIsActive1] = useState(false);

    function onChange27(ev) {
        const { name, value } = ev.target;
        setCombocodigosele2(value);
        if (ev !== '') {
            setIsActive1(true);
        } else {
            setIsActive1(false);
        }
    }
    const [isActive2, setIsActive2] = useState(false);

    function onChange28(ev) {
        const { name, value } = ev.target;
        setCombocodigosele3(value);
        if (ev !== '') {
            setIsActive2(true);
        } else {
            setIsActive2(false);
        }
    }
    const [isActive3, setIsActive3] = useState(false);

    function onChange29(ev) {
        const { name, value } = ev.target;
        setCombocodigosele4(value);
        if (ev !== '') {
            setIsActive3(true);
        } else {
            setIsActive3(false);
        }
    }
    const [isActive4, setIsActive4] = useState(false);

    function onChange30(ev) {
        const { name, value } = ev.target;
        setCombocodigosele5(value);
        if (ev !== '') {
            setIsActive4(true);
        } else {
            setIsActive4(false);
        }
    }
    const [isActive5, setIsActive5] = useState(false);

    function onChange31(ev) {
        const { name, value } = ev.target;
        setCombocodigosele6(value);
        if (ev !== '') {
            setIsActive5(true);
        } else {
            setIsActive5(false);
        }
    } const [isActive6, setIsActive6] = useState(false);

    function onChange32(ev) {
        const { name, value } = ev.target;
        setCombocodigosele7(value);
        if (ev !== '') {
            setIsActive6(true);
        } else {
            setIsActive6(false);
        }
    }

    const [isActive7, setIsActive7] = useState(false);

    function onChange33(ev) {
        const { name, value } = ev.target;
        setCombocodigosele8(value);
        if (ev !== '') {
            setIsActive7(true);
        } else {
            setIsActive7(false);
        }
    }

    const [isActive8, setIsActive8] = useState(false);

    function onChange34(ev) {
        const { name, value } = ev.target;
        setCombocodigosele9(value);
        if (ev !== '') {
            setIsActive8(true);
        } else {
            setIsActive8(false);
        }
    }

    const [isActive9, setIsActive9] = useState(false);

    function onChange35(ev) {
        const { name, value } = ev.target;
        setCombocodigosele10(value);
        if (ev !== '') {
            setIsActive9(true);
        } else {
            setIsActive9(false);
        }
    }

    const [isActive10, setIsActive10] = useState(false);

    function onChange36(ev) {
        const { name, value } = ev.target;
        setCombocodigosele11(value);
        if (ev !== '') {
            setIsActive10(true);
        } else {
            setIsActive10(false);
        }
    }

    const [isActive11, setIsActive11] = useState(false);

    function onChange37(ev) {
        const { name, value } = ev.target;
        setCombocodigosele12(value);
        if (ev !== '') {
            setIsActive11(true);
        } else {
            setIsActive11(false);
        }
    }

    useEffect(() => {
        $('#selectoption').on('change', function(){
           var selectValor = $(this).value();
           console.log(selectValor);
            $('#pai').children('div').hide();
            $('#pai').children(selectValor).show();
        });
    },);




    {/* datas */ }
    function onChange2(ev) {
        const { name, value } = ev.target;
        setDatainicial(value); console.log(value);
    }
    function onChange3(ev) {
        const { name, value } = ev.target;
        setDatafinal(value); console.log(value);
    }
    function onChange4(ev) {
        const { name, value } = ev.target;
        setDatafinal(value); console.log(value);
    }
    function onChange5(ev) {
        const { name, value } = ev.target;
        setDatafinal(value); console.log(value);
    }
    function onChange6(ev) {
        const { name, value } = ev.target;
        setDatafinal(value); console.log(value);
    }
    function onChange7(ev) {
        const { name, value } = ev.target;
        setDatafinal(value); console.log(value);
    }
    function onChange8(ev) {
        const { name, value } = ev.target;
        setDatafinal(value); console.log(value);
    }
    function onChange9(ev) {
        const { name, value } = ev.target;
        setDatafinal(value); console.log(value);
    }
    function onChange10(ev) {
        const { name, value } = ev.target;
        setDatafinal(value); console.log(value);
    }
    function onChange11(ev) {
        const { name, value } = ev.target;
        setDatafinal(value); console.log(value);
    }
    function onChange12(ev) {
        const { name, value } = ev.target;
        setDatafinal(value); console.log(value);
    }
    function onChange13(ev) {
        const { name, value } = ev.target;
        setDatafinal(value); console.log(value);
    }
    function onChange14(ev) {
        const { name, value } = ev.target;
        setDatafinal(value); console.log(value);
    }
    function onChange15(ev) {
        const { name, value } = ev.target;
        setDatafinal(value); console.log(value);
    }
    function onChange16(ev) {
        const { name, value } = ev.target;
        setDatafinal(value); console.log(value);
    }
    function onChange17(ev) {
        const { name, value } = ev.target;
        setDatafinal(value); console.log(value);
    }
    function onChange18(ev) {
        const { name, value } = ev.target;
        setDatafinal(value); console.log(value);
    }
    function onChange19(ev) {
        const { name, value } = ev.target;
        setDatafinal(value); console.log(value);
    } function onChange20(ev) {
        const { name, value } = ev.target;
        setDatafinal(value); console.log(value);
    }
    function onChange21(ev) {
        const { name, value } = ev.target;
        setDatafinal(value); console.log(value);
    } function onChange22(ev) {
        const { name, value } = ev.target;
        setDatafinal(value); console.log(value);
    }
    function onChange23(ev) {
        const { name, value } = ev.target;
        setDatafinal(value); console.log(value);
    }
    function onChange24(ev) {
        const { name, value } = ev.target;
        setDatafinal(value); console.log(value);
    }
    function onChange25(ev) {
        const { name, value } = ev.target;
        setDatafinal(value); console.log(value);
    }



    {/*Entradas */ }
    {/* Tabela todos os códigos */ }
    const tabelamovimentacao = useCallback(() => {
        api.get(`totitementdcdt/${datainicial}/${datafinal}/${combocodigosele}/`).then(response => {
            setTabela(response.data)


        })
    }, [datainicial, datafinal, combocodigosele]);

    {/* Tabela por código */ }
    const tabelamovimentacao2 = useCallback(() => {
        api.get(`totitementcod/${datainicial}/${datafinal}/${combocodigosele2}/`).then(response => {
            setTabela2(response.data)


        })
    }, [datainicial, datafinal, combocodigosele2]);

    {/* Tabela por documento itens  */ }
    const tabelamovimentacao3 = useCallback(() => {
        api.get(`totitementdoc/${datainicial}/${datafinal}/${combocodigosele3}/`).then(response => {
            setTabela3(response.data)


        })
    }, [datainicial, datafinal, combocodigosele3]);

    {/*devoluções*/ }
    {/* Tabela todos os códigos */ }
    const tabelamovimentacao4 = useCallback(() => {
        api.get(`totitemdffdcdt/${datainicial}/${datafinal}/${combocodigosele4}/`).then(response => {
            setTabela4(response.data)


        })
    }, [datainicial, datafinal, combocodigosele4]);

    {/* Tabela por código */ }
    const tabelamovimentacao5 = useCallback(() => {
        api.get(`totitemdffcod/${datainicial}/${datafinal}/${combocodigosele5}/`).then(response => {
            setTabela5(response.data)


        })
    }, [datainicial, datafinal, combocodigosele5]);

    {/* Tabela por documento itens  */ }
    const tabelamovimentacao6 = useCallback(() => {
        api.get(`totitemdffdoc/${datainicial}/${datafinal}/${combocodigosele6}/`).then(response => {
            setTabela6(response.data)


        })
    }, [datainicial, datafinal, combocodigosele6]);

    {/*Pedidos */ }
    {/* Tabela todos os códigos */ }
    const tabelamovimentacao7 = useCallback(() => {
        api.get(`totitempedcdt/${datainicial}/${datafinal}/${combocodigosele7}/`).then(response => {
            setTabela7(response.data)


        })
    }, [datainicial, datafinal, combocodigosele7]);

    {/* Tabela por código */ }
    const tabelamovimentacao8 = useCallback(() => {
        api.get(`totitempecod/${datainicial}/${datafinal}/${combocodigosele8}/`).then(response => {
            setTabela8(response.data)


        })
    }, [datainicial, datafinal, combocodigosele8]);

    {/* Tabela por documento itens  */ }
    const tabelamovimentacao9 = useCallback(() => {
        api.get(`totitempedoc/${datainicial}/${datafinal}/${combocodigosele9}/`).then(response => {
            setTabela9(response.data)


        })
    }, [datainicial, datafinal, combocodigosele9]);

    {/*Troca */ }
    {/* Tabela todos os códigos */ }
    const tabelamovimentacao10 = useCallback(() => {
        api.get(`totitemtrdcdt/${datainicial}/${datafinal}/${combocodigosele10}/`).then(response => {
            setTabela10(response.data)


        })
    }, [datainicial, datafinal, combocodigosele10]);

    {/* Tabela por código */ }
    const tabelamovimentacao11 = useCallback(() => {
        api.get(`totitemtrcod/${datainicial}/${datafinal}/${combocodigosele11}/`).then(response => {
            setTabela11(response.data)


        })
    }, [datainicial, datafinal, combocodigosele11]);

    {/* Tabela por documento itens  */ }
    const tabelamovimentacao12 = useCallback(() => {
        api.get(`totitemtrdoc/${datainicial}/${datafinal}/${combocodigosele12}/`).then(response => {
            setTabela12(response.data)


        })
    }, [datainicial, datafinal, combocodigosele12]);


    return (
        <div>
            <MenuSuperior />
            <Container style={{ fontfamily: "Roboto, sans-serif" }}>
                <Row>
                    <Col >
                        {entcard.map(entcard => (
                            <Card key={entcard} style={{ width: "125%", height: "100%", margin: '30px 0 0 -35%', background: "#20B2AA", color: "#fff", borderRadius: "0%" }}>
                                <h6 style={{ margin: '10% 0 0 5%', fontSize: "18px" }}>Entradas</h6>
                                <p style={{ margin: '10% 0 0 5%', fontSize: "14px" }}><spam>Quantidade: {entcard.quantidade}</spam></p>
                                <p style={{ margin: '5% 0 0 5%', fontSize: "14px" }}><spam>Total: {entcard.totalgeral}</spam></p>
                            </Card>
                        ))}
                    </Col>
                    <Col>
                        {pedcard.map(pedcard => (
                            <Card key={pedcard} style={{ width: "125%", height: "100%", margin: '30px 0 0 -12%', background: "#1E90FF", color: "#fff", borderRadius: "0%" }}>
                                <h6 style={{ margin: '10% 0 0 5%', fontSize: "18px" }}>Pedidos</h6>
                                <p style={{ margin: '10% 0 0 5%', fontSize: "14px" }}>Quantidade: {pedcard.quantidade}</p>
                                <p style={{ margin: '5% 0 0 5%', fontSize: "14px" }}>Total: {pedcard.totalgeral}</p>
                            </Card>
                        ))}
                    </Col>
                    <Col >
                        {trocard.map(trocard => (
                            <Card key={trocard} style={{ width: "125%", height: "100%", margin: '30px 0 0 10%', background: "#32CD32", color: "#fff", borderRadius: "0%" }}>
                                <h6 style={{ margin: '10% 0 0 5%', fontSize: "18px" }}>Troca</h6>
                                <p style={{ margin: '10% 0 0 5%', fontSize: "14px" }}>Quantidade: {trocard.quantidade}</p>
                                <p style={{ margin: '5% 0 0 5%', fontSize: "14px" }}>Total: {trocard.totalgeral}</p>
                            </Card>
                        ))}
                    </Col>
                    <Col>
                        {dfcard.map(dfcard => (
                            <Card key={dfcard} style={{ width: "125%", height: "100%", margin: '30px 0 0 32%', background: "#FFA500", color: "#fff", borderRadius: "0%" }}>
                                <h6 style={{ margin: '10% 0 0 5%', fontSize: "18px" }}>Devolução</h6>
                                <p style={{ margin: '10% 0 0 5%', fontSize: "14px" }}>Quantidade: {dfcard.quantidade}</p>
                                <p style={{ margin: '5% 0 0 5%', fontSize: "14px" }}>Total: {dfcard.totalgeral}</p>
                            </Card>
                        ))}
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <FormGroup >                            
                            <Select
                                labelId="select-label"
                                Id="selectoption"                                
                                label="Buscar"
                                Name="selectoption"
                                Type="select"
                                style={{ width: "100%", height: "40%", margin: '60px 0 0 400px' }}
                            >
                                <MenuItem selected disabled value="">Selecione Opção</MenuItem>
                                <MenuItem value="#entrada">Entradas</MenuItem>
                                <MenuItem value="#devolucao">Devoluções</MenuItem>
                                <MenuItem value="#pedidos">Pedidos</MenuItem>
                                <MenuItem value="#troca">Troca</MenuItem>
                            </Select>
                        </FormGroup>
                    </Col>
                </Row>
                <div id="pai">
                    <div id="entrada" className="hide">
                        <Row>
                            <Col md={4}>
                                <FormGroup >                                    
                                    <Select
                                        labelId="select-label"
                                        id="select"
                                        label="Tipos de consulta"
                                        style={{ width: "100%", height: "40%", margin: '0 0 0 400px' }}
                                    >
                                        <MenuItem selected disabled value="">Selecione Opção</MenuItem>
                                        <MenuItem value="1">Todos os Código</MenuItem>
                                        <MenuItem value="2">Por Código</MenuItem>
                                        <MenuItem value="3">Por Documento Itens</MenuItem>
                                    </Select>
                                </FormGroup>
                            </Col>
                        </Row>
                        {/* ENTRADAS */}
                        <Row>
                            <Col sm={12} md={4} lg={4} xl={4} >
                                <Card style={{ width: "100%", height: "80%", margin: '15% 0 0 -100px' }}>
                                    {/*<CardTitle>Venda Hoje</CardTitle>*/}
                                    <FormGroup>
                                        <Row>
                                            <Col>
                                                <TextField
                                                    id="standard-data-input"
                                                    label="De:"
                                                    type="data"
                                                    style={{ margin: '0 0 0 15%', width: "100%" }}
                                                    onChange={onChange2}
                                                />
                                            </Col>
                                            <Col >
                                                <TextField
                                                    id="standard-data-input"
                                                    label="Até:"
                                                    type="data"
                                                    style={{ margin: '0 0 0 15%', width: "100%" }}
                                                    onChange={onChange3}
                                                />
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    <FormGroup >
                                        <InputLabel id="select-label"></InputLabel>
                                        <Select
                                            labelId="select-label"
                                            id="select"
                                            label="Buscar"
                                            style={{ width: "90%", height: "100%", margin: '0 0 0 5%' }}
                                            onChange={onChange1}
                                        >
                                            <MenuItem selected disabled value="">Selecione Opção</MenuItem>
                                            {combocodigo.map(combocodigo => (
                                                <MenuItem key={combocodigo.for_cod} value={combocodigo.for_cod} > {combocodigo.for_cod + ' - ' + combocodigo.for_nom}  </MenuItem>
                                            ))}
                                        </Select>
                                    </FormGroup>
                                    <Row>
                                        <Col sm={12}>
                                            <FormGroup>
                                                <Button onClick={tabelamovimentacao} style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "40%", height: "10%", margin: '5% 0 0 5%', fontSize: "13px" }}>Filtrar</Button>{' '}
                                                <Button style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "40%", height: "10%", margin: '5% 0 0 5%', fontSize: "13px" }}>Baixar PDF</Button>{' '}
                                                <Button style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "40%", height: "10%", margin: '5% 0 0 5%', fontSize: "13px" }}>Baixar Excel</Button>{' '}

                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            {/*TABELA 1 TODOS OS CÓDIGOS*/}
                            <StickyTable style={{ width: '200%', height: '400px', margin: '-21% 0 0 30%' }}>
                                <Rows>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>DOCUMENTO</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>DATA</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>LOJA</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>CÓDIGO</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>QUANTIDADE</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>TOTAL GERAL</Cell>
                                </Rows>
                                {tabela.map((tabela, idx) => (
                                    <Rows key={idx} tabela={tabela}>
                                        <Cell>{tabela.documento}</Cell>
                                        <Cell>{tabela.data}</Cell>
                                        <Cell>{tabela.loja_origem}</Cell>
                                        <Cell>{tabela.codigofab}</Cell>
                                        <Cell>{tabela.quantidade}</Cell>
                                        <Cell>{tabela.totalgeral}</Cell>
                                    </Rows>
                                ))}
                            </StickyTable>
                        </Row>

                        <Row>
                            <Col sm={12} md={4} lg={4} xl={4} >
                                <Card style={{ width: "100%", height: "80%", margin: '15% 0 0 -100px' }}>
                                    <FormGroup>
                                        <Row>
                                            <Col>
                                                <TextField
                                                    id="standard-data-input"
                                                    label="De:"
                                                    type="data"
                                                    style={{ margin: '0 0 0 15%', width: "100%" }}
                                                    onChange={onChange4}
                                                />
                                            </Col>
                                            <Col >
                                                <TextField
                                                    id="standard-data-input"
                                                    label="Até:"
                                                    type="data"
                                                    style={{ margin: '0 0 0 15%', width: "100%" }}
                                                    onChange={onChange5}
                                                />
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    <FormGroup >
                                        <InputLabel id="select-label"></InputLabel>
                                        <Select
                                            labelId="select-label"
                                            id="select"
                                            label="Buscar"
                                            style={{ width: "90%", height: "100%", margin: '0 0 0 5%' }}
                                            onChange={onChange27}
                                        >
                                            <MenuItem selected disabled value="">Selecione Opção</MenuItem>
                                            {combocodigo.map(combocodigo => (
                                                <MenuItem key={combocodigo.for_cod} value={combocodigo.for_cod} > {combocodigo.for_cod + ' - ' + combocodigo.for_nom}  </MenuItem>
                                            ))}
                                        </Select>
                                    </FormGroup>
                                    <Row>
                                        <Col sm={12}>
                                            <FormGroup>
                                                <Button onClick={tabelamovimentacao2} style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "40%", height: "10%", margin: '5% 0 0 5%', fontSize: "13px" }}>Filtrar</Button>{' '}
                                                <Button style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "40%", height: "10%", margin: '5% 0 0 5%', fontSize: "13px" }}>Baixar PDF</Button>{' '}
                                                <Button style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "40%", height: "10%", margin: '5% 0 0 5%', fontSize: "13px" }}>Baixar Excel</Button>{' '}

                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            {/*TABELA 2 POR CÓDIGO */}
                            <StickyTable style={{ width: '200%', height: '400px', margin: '-21% 0 0 30%' }}>
                                <Rows>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>DOCUMENTO</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>Data</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>LOJA</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>CÓDIGO</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>QUANTIDADE</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>TOTAL GERAL</Cell>
                                </Rows>
                                {tabela2.map((tabela2, idx) => (
                                    <Rows key={idx} tabela={tabela2}>
                                        <Cell>{tabela2.documento}</Cell>
                                        <Cell>{tabela2.data}</Cell>
                                        <Cell>{tabela2.loja_origem}</Cell>
                                        <Cell>{tabela2.codigofab}</Cell>
                                        <Cell>{tabela2.quantidade}</Cell>
                                        <Cell>{tabela2.totalgeral}</Cell>
                                    </Rows>
                                ))}
                            </StickyTable>
                        </Row>
                        <Row>
                            <Col sm={12} md={4} lg={4} xl={4} >
                                <Card style={{ width: "100%", height: "80%", margin: '15% 0 0 -100px' }}>
                                    <FormGroup>
                                        <Row>
                                            <Col>
                                                <TextField
                                                    id="standard-data-input"
                                                    label="De:"
                                                    type="data"
                                                    style={{ margin: '0 0 0 15%', width: "100%" }}
                                                    onChange={onChange6}
                                                />
                                            </Col>
                                            <Col >
                                                <TextField
                                                    id="standard-data-input"
                                                    label="Até:"
                                                    type="data"
                                                    style={{ margin: '0 0 0 15%', width: "100%" }}
                                                    onChange={onChange7}
                                                />
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    <FormGroup >
                                        <InputLabel id="select-label"></InputLabel>
                                        <Select
                                            labelId="select-label"
                                            id="select"
                                            label="Buscar"
                                            style={{ width: "90%", height: "100%", margin: '0 0 0 5%' }}
                                            onChange={onChange28}
                                        >
                                            <MenuItem selected disabled value="">Selecione Opção</MenuItem>
                                            {combocodigo.map(combocodigo => (
                                                <MenuItem key={combocodigo.for_cod} value={combocodigo.for_cod} > {combocodigo.for_cod + ' - ' + combocodigo.for_nom}  </MenuItem>
                                            ))}
                                        </Select>
                                    </FormGroup>
                                    <Row>
                                        <Col sm={12}>
                                            <FormGroup>
                                                <Button onClick={tabelamovimentacao3} style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "40%", height: "10%", margin: '5% 0 0 5%', fontSize: "13px" }}>Filtrar</Button>{' '}
                                                <Button style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "40%", height: "10%", margin: '5% 0 0 5%', fontSize: "13px" }}>Baixar PDF</Button>{' '}
                                                <Button style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "40%", height: "10%", margin: '5% 0 0 5%', fontSize: "13px" }}>Baixar Excel</Button>{' '}

                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            {/*TABELA 3 POR DOCUMENTOS ITENS */}
                            <StickyTable style={{ width: '200%', height: '400px', margin: '-21% 0 0 30%' }}>
                                <Rows>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>DOCUMENTO</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>DATA</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>LOJA</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>CÓDIGO</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>QUATIDADE</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>TOTAL GERAL</Cell>
                                </Rows>
                                {tabela3.map((tabela3, idx) => (
                                    <Rows key={idx} tabela={tabela3}>
                                        <Cell>{tabela3.documento}</Cell>
                                        <Cell>{tabela3.data}</Cell>
                                        <Cell>{tabela3.loja_origem}</Cell>
                                        <Cell>{tabela3.codigofab}</Cell>
                                        <Cell>{tabela3.quantidade}</Cell>
                                        <Cell>{tabela3.totalgeral}</Cell>
                                    </Rows>
                                ))}
                            </StickyTable>
                        </Row>
                    </div>
                    <div id="devolucao" className="hide">
                        <Row>
                            <Col md={4}>
                                <FormGroup >
                                    <InputLabel id="select-label"></InputLabel>
                                    <Select
                                        labelId="select-label"
                                        id="select"
                                        label="Acesso a Tabela"
                                        style={{ width: "100%", height: "40%", margin: '0 0 0 400px' }}
                                        onChange={onChange29}
                                    >
                                        <MenuItem selected disabled value="">Selecione Opção</MenuItem>
                                        <MenuItem value="1">Todos os Código</MenuItem>
                                        <MenuItem value="2">Por Código</MenuItem>
                                        <MenuItem value="3">Por Documento Itens</MenuItem>
                                    </Select>
                                </FormGroup>
                            </Col>
                        </Row>
                        {/* DEVOLUÇÕES */}

                        <Row>
                            <Col sm={12} md={4} lg={4} xl={4} >
                                <Card style={{ width: "100%", height: "80%", margin: '15% 0 0 -100px' }}>
                                    <FormGroup>
                                        <Row>
                                            <Col>
                                                <TextField
                                                    id="standard-data-input"
                                                    label="De:"
                                                    type="data"
                                                    style={{ margin: '0 0 0 15%', width: "100%" }}
                                                    onChange={onChange8}
                                                />
                                            </Col>
                                            <Col >
                                                <TextField
                                                    id="standard-data-input"
                                                    label="Até:"
                                                    type="data"
                                                    style={{ margin: '0 0 0 15%', width: "100%" }}
                                                    onChange={onChange9}
                                                />
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    <FormGroup >
                                        <InputLabel id="select-label"></InputLabel>
                                        <Select
                                            labelId="select-label"
                                            id="select"
                                            label="Buscar"
                                            style={{ width: "90%", height: "100%", margin: '0 0 0 5%' }}
                                            onChange={onChange29}
                                        >
                                            <MenuItem selected disabled value="">Selecione Opção</MenuItem>
                                            {combocodigo.map(combocodigo => (
                                                <MenuItem key={combocodigo.for_cod} value={combocodigo.for_cod} > {combocodigo.for_cod + ' - ' + combocodigo.for_nom}  </MenuItem>
                                            ))}
                                        </Select>
                                    </FormGroup>
                                    <Row>
                                        <Col sm={12}>
                                            <FormGroup>
                                                <Button onClick={tabelamovimentacao4} style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "40%", height: "10%", margin: '5% 0 0 5%', fontSize: "13px" }}>Filtrar</Button>{' '}
                                                <Button style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "40%", height: "10%", margin: '5% 0 0 5%', fontSize: "13px" }}>Baixar PDF</Button>{' '}
                                                <Button style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "40%", height: "10%", margin: '5% 0 0 5%', fontSize: "13px" }}>Baixar Excel</Button>{' '}

                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            {/*TABELA 1 TODOS OS CÓDIGOS*/}
                            <StickyTable style={{ width: '200%', height: '400px', margin: '-21% 0 0 30%' }}>
                                <Rows>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>DOCUMENTO</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>DATA</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>LOJA</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>CÓDIGO</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>QUANTIDADE</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>TOTAL GERAL</Cell>
                                </Rows>
                                {tabela4.map((tabela4, idx) => (
                                    <Rows key={idx} tabela={tabela4}>
                                        <Cell>{tabela4.documento}</Cell>
                                        <Cell>{tabela4.data}</Cell>
                                        <Cell>{tabela4.loja_origem}</Cell>
                                        <Cell>{tabela4.codigofab}</Cell>
                                        <Cell>{tabela4.quantidade}</Cell>
                                        <Cell>{tabela4.totalgeral}</Cell>
                                    </Rows>
                                ))}
                            </StickyTable>
                        </Row>

                        <Row>
                            <Col sm={12} md={4} lg={4} xl={4} >
                                <Card style={{ width: "100%", height: "80%", margin: '15% 0 0 -100px' }}>
                                    <FormGroup>
                                        <Row>
                                            <Col>
                                                <TextField
                                                    id="standard-data-input"
                                                    label="De:"
                                                    type="data"
                                                    style={{ margin: '0 0 0 15%', width: "100%" }}
                                                    onChange={onChange10}
                                                />
                                            </Col>
                                            <Col >
                                                <TextField
                                                    id="standard-data-input"
                                                    label="Até:"
                                                    type="data"
                                                    style={{ margin: '0 0 0 15%', width: "100%" }}
                                                    onChange={onChange11}
                                                />
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    <FormGroup >
                                        <InputLabel id="select-label"></InputLabel>
                                        <Select
                                            labelId="select-label"
                                            id="select"
                                            label="Buscar"
                                            style={{ width: "90%", height: "100%", margin: '0 0 0 5%' }}
                                            onChange={onChange30}
                                        >
                                            <MenuItem selected disabled value="">Selecione Opção</MenuItem>
                                            {combocodigo.map(combocodigo => (
                                                <MenuItem key={combocodigo.for_cod} value={combocodigo.for_cod} > {combocodigo.for_cod + ' - ' + combocodigo.for_nom}  </MenuItem>
                                            ))}
                                        </Select>
                                    </FormGroup>
                                    <Row>
                                        <Col sm={12}>
                                            <FormGroup>
                                                <Button onClick={tabelamovimentacao5} style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "40%", height: "10%", margin: '5% 0 0 5%', fontSize: "13px" }}>Filtrar</Button>{' '}
                                                <Button style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "40%", height: "10%", margin: '5% 0 0 5%', fontSize: "13px" }}>Baixar PDF</Button>{' '}
                                                <Button style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "40%", height: "10%", margin: '5% 0 0 5%', fontSize: "13px" }}>Baixar Excel</Button>{' '}

                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            {/*TABELA 2 POR CÓDIGO */}
                            <StickyTable style={{ width: '200%', height: '400px', margin: '-21% 0 0 30%' }}>
                                <Rows>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>DOCUMENTO</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>DATA</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>LOJA</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>CÓDIGO</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>QUANTIDADE</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>TOTAL GERAL</Cell>

                                </Rows>
                                {tabela5.map((tabela5, idx) => (
                                    <Rows key={idx} tabela={tabela5}>
                                        <Cell>{tabela5.documento}</Cell>
                                        <Cell>{tabela5.data}</Cell>
                                        <Cell>{tabela5.loja_origem}</Cell>
                                        <Cell>{tabela5.codigofab}</Cell>
                                        <Cell>{tabela5.quantidade}</Cell>
                                        <Cell>{tabela5.totalgeral}</Cell>
                                    </Rows>
                                ))}
                            </StickyTable>
                        </Row>
                        <Row>
                            <Col sm={12} md={4} lg={4} xl={4} >
                                <Card style={{ width: "100%", height: "80%", margin: '15% 0 0 -100px' }}>
                                    <FormGroup>
                                        <Row>
                                            <Col>
                                                <TextField
                                                    id="standard-data-input"
                                                    label="De:"
                                                    type="data"
                                                    style={{ margin: '0 0 0 15%', width: "100%" }}
                                                    onChange={onChange12}
                                                />
                                            </Col>
                                            <Col >
                                                <TextField
                                                    id="standard-data-input"
                                                    label="Até:"
                                                    type="data"
                                                    style={{ margin: '0 0 0 15%', width: "100%" }}
                                                    onChange={onChange13}
                                                />
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    <FormGroup >
                                        <InputLabel id="select-label"></InputLabel>
                                        <Select
                                            labelId="select-label"
                                            id="select"
                                            label="Buscar"
                                            style={{ width: "90%", height: "100%", margin: '0 0 0 5%' }}
                                            onChange={onChange31}
                                        >
                                            <MenuItem selected disabled value="">Selecione Opção</MenuItem>
                                            {combocodigo.map(combocodigo => (
                                                <MenuItem key={combocodigo.for_cod} value={combocodigo.for_cod} > {combocodigo.for_cod + ' - ' + combocodigo.for_nom}  </MenuItem>
                                            ))}
                                        </Select>
                                    </FormGroup>
                                    <Row>
                                        <Col sm={12}>
                                            <FormGroup>
                                                <Button onClick={tabelamovimentacao6} style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "40%", height: "10%", margin: '5% 0 0 5%', fontSize: "13px" }}>Filtrar</Button>{' '}
                                                <Button style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "40%", height: "10%", margin: '5% 0 0 5%', fontSize: "13px" }}>Baixar PDF</Button>{' '}
                                                <Button style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "40%", height: "10%", margin: '5% 0 0 5%', fontSize: "13px" }}>Baixar Excel</Button>{' '}

                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            {/*TABELA 3 POR DOCUMENTOS ITENS */}
                            <StickyTable style={{ width: '200%', height: '400px', margin: '-21% 0 0 30%' }}>
                                <Rows>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>DOCUMENTO</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>DATA</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>LOJA</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>CÓDIGO</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>QUANTIDADE</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>TOTAL GERAL</Cell>
                                </Rows>
                                {tabela6.map((tabela6, idx) => (
                                    <Rows key={idx} tabela={tabela6}>
                                        <Cell>{tabela6.documento}</Cell>
                                        <Cell>{tabela6.data}</Cell>
                                        <Cell>{tabela6.loja_origem}</Cell>
                                        <Cell>{tabela6.codigofab}</Cell>
                                        <Cell>{tabela6.quantidade}</Cell>
                                        <Cell>{tabela6.totalgeral}</Cell>
                                    </Rows>
                                ))}
                            </StickyTable>
                        </Row>
                    </div>
                    <div id="pedidos" className="hide">
                        <Row>
                            <Col md={4}>
                                <FormGroup >
                                    <InputLabel id="select-label"></InputLabel>
                                    <Select
                                        labelId="select-label"
                                        id="select"
                                        label="Acesso a Tabela"
                                        style={{ width: "100%", height: "40%", margin: '0 0 0 400px' }}
                                    >
                                        <MenuItem selected disabled value="">Selecione Opção</MenuItem>
                                        <MenuItem value="1">Todos os Código</MenuItem>
                                        <MenuItem value="2">Por Código</MenuItem>
                                        <MenuItem value="3">Por Documento Itens</MenuItem>
                                    </Select>
                                </FormGroup>
                            </Col>
                        </Row>

                        {/* PEDIDOS */}

                        <Row>
                            <Col sm={12} md={4} lg={4} xl={4} >
                                <Card style={{ width: "100%", height: "80%", margin: '15% 0 0 -100px' }}>
                                    <FormGroup>
                                        <Row>
                                            <Col>
                                                <TextField
                                                    id="standard-data-input"
                                                    label="De:"
                                                    type="data"
                                                    style={{ margin: '0 0 0 15%', width: "100%" }}
                                                    onChange={onChange14}
                                                />
                                            </Col>
                                            <Col >
                                                <TextField
                                                    id="standard-data-input"
                                                    label="Até:"
                                                    type="data"
                                                    style={{ margin: '0 0 0 15%', width: "100%" }}
                                                    onChange={onChange15}
                                                />
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    <FormGroup >
                                        <InputLabel id="select-label"></InputLabel>
                                        <Select
                                            labelId="select-label"
                                            id="select"
                                            label="Buscar"
                                            style={{ width: "90%", height: "100%", margin: '0 0 0 5%' }}
                                            onChange={onChange32}
                                        >
                                            <MenuItem selected disabled value="">Selecione Opção</MenuItem>
                                            {combocodigo.map(combocodigo => (
                                                <MenuItem key={combocodigo.for_cod} value={combocodigo.for_cod} > {combocodigo.for_cod + ' - ' + combocodigo.for_nom}  </MenuItem>
                                            ))}
                                        </Select>
                                    </FormGroup>
                                    <Row>
                                        <Col sm={12}>
                                            <FormGroup>
                                                <Button onClick={tabelamovimentacao7} style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "40%", height: "10%", margin: '5% 0 0 5%', fontSize: "13px" }}>Filtrar</Button>{' '}
                                                <Button style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "40%", height: "10%", margin: '5% 0 0 5%', fontSize: "13px" }}>Baixar PDF</Button>{' '}
                                                <Button style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "40%", height: "10%", margin: '5% 0 0 5%', fontSize: "13px" }}>Baixar Excel</Button>{' '}

                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            {/*TABELA 1 TODOS OS CÓDIGOS*/}
                            <StickyTable style={{ width: '200%', height: '400px', margin: '-21% 0 0 30%' }}>
                                <Rows>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>DOCUMENTO</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>DATA</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>LOJA</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>CÓDIGO</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>QUANTIDADE</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>TOTAL GERAL</Cell>
                                </Rows>
                                {tabela7.map((tabela7, idx) => (
                                    <Rows key={idx} tabela={tabela7}>
                                        <Cell>{tabela7.documento}</Cell>
                                        <Cell>{tabela7.data}</Cell>
                                        <Cell>{tabela7.loja_origem}</Cell>
                                        <Cell>{tabela7.codigofab}</Cell>
                                        <Cell>{tabela7.quantidade}</Cell>
                                        <Cell>{tabela7.totalgeral}</Cell>
                                    </Rows>
                                ))}
                            </StickyTable>
                        </Row>

                        <Row>
                            <Col sm={12} md={4} lg={4} xl={4} >
                                <Card style={{ width: "100%", height: "80%", margin: '15% 0 0 -100px' }}>
                                    <FormGroup>
                                        <Row>
                                            <Col>
                                                <TextField
                                                    id="standard-data-input"
                                                    label="De:"
                                                    type="data"
                                                    style={{ margin: '0 0 0 15%', width: "100%" }}
                                                    onChange={onChange16}
                                                />
                                            </Col>
                                            <Col >
                                                <TextField
                                                    id="standard-data-input"
                                                    label="Até:"
                                                    type="data"
                                                    style={{ margin: '0 0 0 15%', width: "100%" }}
                                                    onChange={onChange17}
                                                />
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    <FormGroup >
                                        <InputLabel id="select-label"></InputLabel>
                                        <Select
                                            labelId="select-label"
                                            id="select"
                                            label="Buscar"
                                            style={{ width: "90%", height: "100%", margin: '0 0 0 5%' }}
                                            onChange={onChange33}
                                        >
                                            <MenuItem selected disabled value="">Selecione Opção</MenuItem>
                                            {combocodigo.map(combocodigo => (
                                                <MenuItem key={combocodigo.for_cod} value={combocodigo.for_cod} > {combocodigo.for_cod + ' - ' + combocodigo.for_nom}  </MenuItem>
                                            ))}
                                        </Select>
                                    </FormGroup>
                                    <Row>
                                        <Col sm={12}>
                                            <FormGroup>
                                                <Button onClick={tabelamovimentacao8} style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "40%", height: "10%", margin: '5% 0 0 5%', fontSize: "13px" }}>Filtrar</Button>{' '}
                                                <Button style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "40%", height: "10%", margin: '5% 0 0 5%', fontSize: "13px" }}>Baixar PDF</Button>{' '}
                                                <Button style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "40%", height: "10%", margin: '5% 0 0 5%', fontSize: "13px" }}>Baixar Excel</Button>{' '}

                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            {/*TABELA 2 POR CÓDIGO */}
                            <StickyTable style={{ width: '200%', height: '400px', margin: '-21% 0 0 30%' }}>
                                <Rows>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>DOCUMENTO</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>DATA</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>LOJA</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>CÓDIGO</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>QUANTIDADE</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>TOTAL GERAL</Cell>
                                </Rows>
                                {tabela8.map((tabela8, idx) => (
                                    <Rows key={idx} tabela={tabela8}>
                                        <Cell>{tabela8.documento}</Cell>
                                        <Cell>{tabela8.data}</Cell>
                                        <Cell>{tabela8.loja_origem}</Cell>
                                        <Cell>{tabela8.codigofab}</Cell>
                                        <Cell>{tabela8.quantidade}</Cell>
                                        <Cell>{tabela8.totalgeral}</Cell>
                                    </Rows>
                                ))}
                            </StickyTable>
                        </Row>
                        <Row>
                            <Col sm={12} md={4} lg={4} xl={4} >
                                <Card style={{ width: "100%", height: "80%", margin: '15% 0 0 -100px' }}>
                                    <FormGroup>
                                        <Row>
                                            <Col>
                                                <TextField
                                                    id="standard-data-input"
                                                    label="De:"
                                                    type="data"
                                                    style={{ margin: '0 0 0 15%', width: "100%" }}
                                                    onChange={onChange18}
                                                />
                                            </Col>
                                            <Col >
                                                <TextField
                                                    id="standard-data-input"
                                                    label="Até:"
                                                    type="data"
                                                    style={{ margin: '0 0 0 15%', width: "100%" }}
                                                    onChange={onChange19}
                                                />
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    <FormGroup >
                                        <InputLabel id="select-label"></InputLabel>
                                        <Select
                                            labelId="select-label"
                                            id="select"
                                            label="Buscar"
                                            style={{ width: "90%", height: "100%", margin: '0 0 0 5%' }}
                                            onChange={onChange34}
                                        >
                                            <MenuItem selected disabled value="">Selecione Opção</MenuItem>
                                            {combocodigo.map(combocodigo => (
                                                <MenuItem key={combocodigo.for_cod} value={combocodigo.for_cod} > {combocodigo.for_cod + ' - ' + combocodigo.for_nom}  </MenuItem>
                                            ))}
                                        </Select>
                                    </FormGroup>
                                    <Row>
                                        <Col sm={12}>
                                            <FormGroup>
                                                <Button onClick={tabelamovimentacao9} style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "40%", height: "10%", margin: '5% 0 0 5%', fontSize: "13px" }}>Filtrar</Button>{' '}
                                                <Button style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "40%", height: "10%", margin: '5% 0 0 5%', fontSize: "13px" }}>Baixar PDF</Button>{' '}
                                                <Button style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "40%", height: "10%", margin: '5% 0 0 5%', fontSize: "13px" }}>Baixar Excel</Button>{' '}

                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            {/*TABELA 3 POR DOCUMENTOS ITENS */}
                            <StickyTable style={{ width: '200%', height: '400px', margin: '-21% 0 0 30%' }}>
                                <Rows>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>DOCUMENTO</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>DATA</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>LOJA</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>CÓDIGO</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>QUANTIDADE</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>TOTAL GERAL</Cell>
                                </Rows>
                                {tabela9.map((tabela9, idx) => (
                                    <Rows key={idx} tabela={tabela9}>
                                        <Cell>{tabela9.documento}</Cell>
                                        <Cell>{tabela9.data}</Cell>
                                        <Cell>{tabela9.loja_origem}</Cell>
                                        <Cell>{tabela9.codigofab}</Cell>
                                        <Cell>{tabela9.quantidade}</Cell>
                                        <Cell>{tabela9.totalgeral}</Cell>
                                    </Rows>
                                ))}
                            </StickyTable>
                        </Row>
                    </div>
                    <div id="troca" className="hide">
                        <Row>
                            <Col md={4}>
                                <FormGroup >
                                    <InputLabel id="select-label"></InputLabel>
                                    <Select
                                        labelId="select-label"
                                        id="select"
                                        label="Acesso a Tabela"
                                        style={{ width: "100%", height: "40%", margin: '0 0 0 400px' }}
                                    >
                                        <MenuItem selected disabled value="">Selecione Opção</MenuItem>
                                        <MenuItem value="1">Todos os Código</MenuItem>
                                        <MenuItem value="2">Por Código</MenuItem>
                                        <MenuItem value="3">Por Documento Itens</MenuItem>
                                    </Select>
                                </FormGroup>
                            </Col>
                        </Row>

                        {/* TROCA */}

                        <Row>
                            <Col sm={12} md={4} lg={4} xl={4} >
                                <Card style={{ width: "100%", height: "80%", margin: '15% 0 0 -100px' }}>
                                    <FormGroup>
                                        <Row>
                                            <Col>
                                                <TextField
                                                    id="standard-data-input"
                                                    label="De:"
                                                    type="data"
                                                    style={{ margin: '0 0 0 15%', width: "100%" }}
                                                    onChange={onChange20}
                                                />
                                            </Col>
                                            <Col >
                                                <TextField
                                                    id="standard-data-input"
                                                    label="Até:"
                                                    type="data"
                                                    style={{ margin: '0 0 0 15%', width: "100%" }}
                                                    onChange={onChange21}
                                                />
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    <FormGroup >
                                        <InputLabel id="select-label"></InputLabel>
                                        <Select
                                            labelId="select-label"
                                            id="select"
                                            label="Buscar"
                                            style={{ width: "90%", height: "100%", margin: '0 0 0 5%' }}
                                            onChange={onChange35}
                                        >
                                            <MenuItem selected disabled value="">Selecione Opção</MenuItem>
                                            {combocodigo.map(combocodigo => (
                                                <MenuItem key={combocodigo.for_cod} value={combocodigo.for_cod} > {combocodigo.for_cod + ' - ' + combocodigo.for_nom}  </MenuItem>
                                            ))}
                                        </Select>
                                    </FormGroup>
                                    <Row>
                                        <Col sm={12}>
                                            <FormGroup>
                                                <Button onClick={tabelamovimentacao10} style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "40%", height: "10%", margin: '5% 0 0 5%', fontSize: "13px" }}>Filtrar</Button>{' '}
                                                <Button style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "40%", height: "10%", margin: '5% 0 0 5%', fontSize: "13px" }}>Baixar PDF</Button>{' '}
                                                <Button style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "40%", height: "10%", margin: '5% 0 0 5%', fontSize: "13px" }}>Baixar Excel</Button>{' '}

                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            {/*TABELA 1 TODOS OS CÓDIGOS*/}
                            <StickyTable style={{ width: '200%', height: '400px', margin: '-21% 0 0 30%' }}>
                                <Rows>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>DOCUMENTO</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>DATA</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>LOJA</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>CÓDIGO</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>QUANTIDADE</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>TOTAL GERAL</Cell>
                                </Rows>
                                {tabela10.map((tabela10, idx) => (
                                    <Rows key={idx} tabela={tabela10}>
                                        <Cell>{tabela10.documento}</Cell>
                                        <Cell>{tabela10.data}</Cell>
                                        <Cell>{tabela10.loja_origem}</Cell>
                                        <Cell>{tabela10.codigofab}</Cell>
                                        <Cell>{tabela10.quantidade}</Cell>
                                        <Cell>{tabela10.totalgeral}</Cell>
                                    </Rows>
                                ))}
                            </StickyTable>
                        </Row>

                        <Row>
                            <Col sm={12} md={4} lg={4} xl={4} >
                                <Card style={{ width: "100%", height: "80%", margin: '15% 0 0 -100px' }}>
                                    <FormGroup>
                                        <Row>
                                            <Col>
                                                <TextField
                                                    id="standard-data-input"
                                                    label="De:"
                                                    type="data"
                                                    style={{ margin: '0 0 0 15%', width: "100%" }}
                                                    onChange={onChange22}
                                                />
                                            </Col>
                                            <Col >
                                                <TextField
                                                    id="standard-data-input"
                                                    label="Até:"
                                                    type="data"
                                                    style={{ margin: '0 0 0 15%', width: "100%" }}
                                                    onChange={onChange23}
                                                />
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    <FormGroup >
                                        <InputLabel id="select-label"></InputLabel>
                                        <Select
                                            labelId="select-label"
                                            id="select"
                                            label="Buscar"
                                            style={{ width: "90%", height: "100%", margin: '0 0 0 5%' }}
                                            onChange={onChange36}
                                        >
                                            <MenuItem selected disabled value="">Selecione Opção</MenuItem>
                                            {combocodigo.map(combocodigo => (
                                                <MenuItem key={combocodigo.for_cod} value={combocodigo.for_cod} > {combocodigo.for_cod + ' - ' + combocodigo.for_nom}  </MenuItem>
                                            ))}
                                        </Select>
                                    </FormGroup>
                                    <Row>
                                        <Col sm={12}>
                                            <FormGroup>
                                                <Button onClick={tabelamovimentacao11} style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "40%", height: "10%", margin: '5% 0 0 5%', fontSize: "13px" }}>Filtrar</Button>{' '}
                                                <Button style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "40%", height: "10%", margin: '5% 0 0 5%', fontSize: "13px" }}>Baixar PDF</Button>{' '}
                                                <Button style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "40%", height: "10%", margin: '5% 0 0 5%', fontSize: "13px" }}>Baixar Excel</Button>{' '}

                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            {/*TABELA 2 POR CÓDIGO */}
                            <StickyTable style={{ width: '200%', height: '400px', margin: '-21% 0 0 30%' }}>
                                <Rows>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>DOCUMENTO</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>DATA.</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>LOJA</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>CÓDIGO</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>QUANTIDADE</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>TOTAL GERAL</Cell>
                                </Rows>
                                {tabela11.map((tabela11, idx) => (
                                    <Rows key={idx} tabela={tabela11}>
                                        <Cell>{tabela11.documento}</Cell>
                                        <Cell>{tabela11.data}</Cell>
                                        <Cell>{tabela11.loja_origem}</Cell>
                                        <Cell>{tabela11.codigofab}</Cell>
                                        <Cell>{tabela11.quantidade}</Cell>
                                        <Cell>{tabela11.totalgeral}</Cell>
                                    </Rows>
                                ))}
                            </StickyTable>
                        </Row>
                        <Row>
                            <Col sm={12} md={4} lg={4} xl={4} >
                                <Card style={{ width: "100%", height: "80%", margin: '15% 0 0 -100px' }}>
                                    <FormGroup>
                                        <Row>
                                            <Col>
                                                <TextField
                                                    id="standard-data-input"
                                                    label="De:"
                                                    type="data"
                                                    style={{ margin: '0 0 0 15%', width: "100%" }}
                                                    onChange={onChange24}
                                                />
                                            </Col>
                                            <Col >
                                                <TextField
                                                    id="standard-data-input"
                                                    label="Até:"
                                                    type="data"
                                                    style={{ margin: '0 0 0 15%', width: "100%" }}
                                                    onChange={onChange25}
                                                />
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    <FormGroup >
                                        <InputLabel id="select-label"></InputLabel>
                                        <Select
                                            labelId="select-label"
                                            id="select"
                                            label="Buscar"
                                            style={{ width: "90%", height: "100%", margin: '0 0 0 5%' }}
                                            onChange={onChange37}
                                        >
                                            <MenuItem selected disabled value="">Selecione Opção</MenuItem>
                                            {combocodigo.map(combocodigo => (
                                                <MenuItem key={combocodigo.for_cod} value={combocodigo.for_cod} > {combocodigo.for_cod + ' - ' + combocodigo.for_nom}  </MenuItem>
                                            ))}
                                        </Select>
                                    </FormGroup>
                                    <Row>
                                        <Col sm={12}>
                                            <FormGroup>
                                                <Button onClick={tabelamovimentacao12} style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "40%", height: "10%", margin: '5% 0 0 5%', fontSize: "13px" }}>Filtrar</Button>{' '}
                                                <Button style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "40%", height: "10%", margin: '5% 0 0 5%', fontSize: "13px" }}>Baixar PDF</Button>{' '}
                                                <Button style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "40%", height: "10%", margin: '5% 0 0 5%', fontSize: "13px" }}>Baixar Excel</Button>{' '}

                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            {/*TABELA 3 POR DOCUMENTOS ITENS */}
                            <StickyTable style={{ width: '200%', height: '400px', margin: '-21% 0 0 30%' }}>
                                <Rows>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>DOCUMENTO</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>DATA</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>LOJA</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>CÓDIGO</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>QUANTIDADE</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>TOTAL GERAL</Cell>
                                </Rows>
                                {tabela12.map((tabela12, idx) => (
                                    <Rows key={idx} tabela={tabela12}>
                                        <Cell>{tabela12.documento}</Cell>
                                        <Cell>{tabela12.data}</Cell>
                                        <Cell>{tabela12.loja_origem}</Cell>
                                        <Cell>{tabela12.codigofab}</Cell>
                                        <Cell>{tabela12.quantidade}</Cell>
                                        <Cell>{tabela12.totalgeral}</Cell>
                                    </Rows>
                                ))}
                            </StickyTable>
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    );
}
export default Movimentacao;