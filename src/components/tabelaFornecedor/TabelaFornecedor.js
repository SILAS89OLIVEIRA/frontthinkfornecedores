import React, { useState, useCallback, useEffect } from "react";
import "./TabelaFornecedor.css";
import { Table, FormGroup, Form, Label, Row, Button, Col, Input } from 'reactstrap';
import DatePicker from "react-date-picker";
import moment from 'moment';

import api from '../../api';


const TabelaFornecedor = (props) => {

    const [vendeestgeral, setVendeestgeral] = useState([]);

    const for_cod = localStorage.getItem('for_cod')


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
        var valores = {'formatado': formatado, 'bd': bd};
        return valores;
    }


  





     useEffect(() => {
        api.get(`vendeestgeral/${hoje().bd}/${hoje().bd}/${for_cod}/`).then(response => {
            setVendeestgeral(response.data)
        })
    }, [for_cod]);


 
    
    const [selectDateIni, setSelectDateIni] = useState(null);
    

    const onChange = selectDateIni => {
        setSelectDateIni(selectDateIni);
        }


    const [selectDateFim, setSelectDateFim] = useState(null);

    const onChange1 = selectDateFim => {
        setSelectDateFim(selectDateFim);
    }

    const datainicial = moment(selectDateIni).format("YYYYMMDD")

  

    const datafinal = moment(selectDateFim).format("YYYYMMDD")

    
  

    

    const fetchRequest = useCallback(() => {
        api.get(`vendeestgeral/${datainicial}/${datafinal}/${for_cod}/`).then(response => {
            setVendeestgeral(response.data)
          
        })
    }, [for_cod, datainicial, datafinal]);


    //console.log(datainicial, datafinal)



        

    return ( 
        <div>   
            <Row>
            <Col sm={8} md={7} lg={5} xl={4}>
            <div className = "blocotabela">
            <Form className = "cardFornecedor" >
            <Row>
            <Col sm={8} md={12} lg={5} xl={3}> 
            <Label className="title-card"> FORNECEDOR </Label>            
            </Col>
            </Row> 


            <Row>
            <Col sm={2} md={6} lg={6} xl={6}>   
            <FormGroup>
            <Label className = "nomeData1" sm={4}> De: </Label> 
            <Col sm={3} md={6} lg={6} xl={6}>
            <DatePicker className="data"  onChange = { onChange } value = { selectDateIni }/> 
            </Col>
            </FormGroup> 
            </Col>

            <Col sm={2} md={6} lg={6} xl={6}>  
            <FormGroup>
            <Label className = "nomeData2" sm={4}> Até: </Label> 
            <Col sm={3} md={6} lg={6} xl={6}>
            <DatePicker className="data1" onChange = { onChange1 } value = { selectDateFim }/> 
            </Col>
            </FormGroup> 
            </Col>

            <Col sm={2} md={6} lg={6} xl={6}>
            <Label className="labelform">Código fornecedor</Label>
            <Input className="codFab"/>
            </Col>

            <Col sm={2} md={6} lg={6} xl={6}>
            <Label className="labelform2">Nº do produto</Label>
            <Input className="numProd" />
            </Col>

            <Col sm={2} md={6} lg={6} xl={6}>
            <Label className="labelform">Ref. fornecedor</Label>
            <Input className="refFor" />
            </Col>

            <Col sm={2} md={6} lg={6} xl={6}>
            <Label className="labelform2">Loja</Label>
            <Input className="numLoj"/>
            </Col>
            </Row> 

            <Row> 
            <Col sm={2} md={6} lg={6} xl={6}  className="group-buttons" >   
            <FormGroup className="group-buttons">
            <Button className = "buttonLimpar" type='reset'> Limpar </Button> 
            </FormGroup>
            </Col>
            <Col sm={2} md={6} lg={6} xl={6}>  
            <FormGroup className="group-buttons1">
            <Button className = "buttonFiltrar" onClick={fetchRequest} type='submit' sm={12}> Filtrar </Button> 
            </FormGroup>
            </Col>
            </Row>
            </Form>
            </div>
            </Col>
            

       
            
            <Col sm={4} md={5} lg={7} xl={8}>
            <div key={vendeestgeral} className='tabela'>
            {/*
            <Table responsive id="nivel1">
            <thead className="cabecalho">
            <tr>
            <th> # </th> 
            <th> NOME FOR. </th> 
            <th> COD.FOR. </th> 
            <th> VAL.VENDA </th> 
            <th> QTD.VENDA </th> 
            <th> GIRO(V / E) </th> 
            <th> VAL.ESTOQUE </th> 
            <th> QTD.ESTOQUE </th> 
            </tr> 
            </thead> 
            {vendeestgeral.map(vendeestgeral => ( 
                <tbody key = { vendeestgeral.nome_fornecedor }
                className = "cabecalho2" >
                <tr>
                <th scope = "row" > 1 </th> 
                <td> { vendeestgeral.nome_fornecedor }</td> 
                <td> { vendeestgeral.cod_fabricante }</td> 
                <td> { vendeestgeral.venda_total_venda }</td> 
                <td> { vendeestgeral.qtd_pecas_vendidas } </td> 
                <td> { vendeestgeral.giro }</td> 
                <td> { vendeestgeral.venda_total_estoque }</td> 
                <td> { vendeestgeral.qtd_estoque }</td> 
                </tr>

                </tbody>
            ))} 
            </Table>
            */}
            {/*
            <Table responsive id="nivel2">
            <thead className="cabecalho">
            <tr>
            <th> # </th> 
            <th> NOME PROD. </th> 
            <th> Nº.PROD. </th> 
            <th> REVISTA </th> 
            <th> PAGINA </th> 
            <th> REF.FORNECEDOR </th> 
            <th> PREÇO </th> 
            <th> PORC.TROCA </th> 
            <th> VAL.VENDA </th>
            <th> QTD.VENDA </th>
            <th> GIRO </th>
            <th> VAL.ESTOQUE </th>
            <th> QTD.ESTOQUE </th>
            </tr> 
            </thead> 
            {vendeestgeral.map(vendeestgeral => ( 
                <tbody key = { vendeestgeral.nome_fornecedor }
                className = "cabecalho2" >
                <tr>
                <th scope = "row" > 1 </th> 
                <td> { vendeestgeral.nome_fornecedor }</td> 
                <td> { vendeestgeral.cod_fabricante }</td> 
                <td> { vendeestgeral.venda_total_venda }</td> 
                <td> { vendeestgeral.qtd_pecas_vendidas } </td> 
                <td> { vendeestgeral.giro }</td> 
                <td> { vendeestgeral.venda_total_estoque }</td> 
                <td> { vendeestgeral.qtd_estoque }</td> 
                <td> { vendeestgeral.venda_total_venda }</td> 
                <td> { vendeestgeral.qtd_pecas_vendidas } </td> 
                <td> { vendeestgeral.giro }</td> 
                <td> { vendeestgeral.venda_total_estoque }</td> 
                <td> { vendeestgeral.qtd_estoque }</td> 
                </tr>

                </tbody>
            ))} 
            </Table>
            */}
            {/*
            <Table responsive id="nivel3">
            <thead className="cabecalho">
            <tr>
            <th> # </th> 
            <th> TAMANHO </th> 
            <th> COR </th> 
            <th> Nº ITEM </th> 
            <th> PREÇO </th> 
            <th> PORC.TROCA </th> 
            <th> VAL.VENDA </th> 
            <th> QTD.VENDA </th> 
            <th> GIRO </th>
            <th> VAL.ESTOQUE </th>
            <th> QTD.ESTOQUE </th>
            </tr> 
            </thead> 
            {vendeestgeral.map(vendeestgeral => ( 
                <tbody key = { vendeestgeral.nome_fornecedor }
                className = "cabecalho2" >
                <tr>
                <th scope = "row" > 1 </th> 
                <td> { vendeestgeral.nome_fornecedor }</td> 
                <td> { vendeestgeral.cod_fabricante }</td> 
                <td> { vendeestgeral.venda_total_venda }</td> 
                <td> { vendeestgeral.qtd_pecas_vendidas } </td> 
                <td> { vendeestgeral.giro }</td> 
                <td> { vendeestgeral.venda_total_estoque }</td> 
                <td> { vendeestgeral.qtd_estoque }</td> 
                <td> { vendeestgeral.giro }</td> 
                <td> { vendeestgeral.venda_total_estoque }</td> 
                <td> { vendeestgeral.qtd_estoque }</td>
                </tr>

                </tbody>
            ))} 
            </Table>
            */}
            {/*
            <Table responsive id="nivel4">
            <thead className="cabecalho">
            <tr>
            <th> # </th> 
            <th> LOJA </th> 
            <th> TAMANHO </th>
            <th> COR </th> 
            <th> Nº ITEM </th> 
            <th> PORC.TROCA </th> 
            <th> VAL.VENDA </th> 
            <th> QTD.VENDA </th> 
            <th> GIRO </th>
            <th> VAL.ESTOQUE </th> 
            <th> QTD.ESTOQUE </th> 
            </tr> 
            </thead> 
            {vendeestgeral.map(vendeestgeral => ( 
                <tbody key = { vendeestgeral.nome_fornecedor }
                className = "cabecalho2" >
                <tr>
                <th scope = "row" > 1 </th> 
                <td> { vendeestgeral.nome_fornecedor }</td> 
                <td> { vendeestgeral.cod_fabricante }</td> 
                <td> { vendeestgeral.venda_total_venda }</td> 
                <td> { vendeestgeral.qtd_pecas_vendidas } </td> 
                <td> { vendeestgeral.giro }</td> 
                <td> { vendeestgeral.venda_total_estoque }</td> 
                <td> { vendeestgeral.qtd_estoque }</td> 
                <td> { vendeestgeral.giro }</td> 
                <td> { vendeestgeral.venda_total_estoque }</td> 
                <td> { vendeestgeral.qtd_estoque }</td> 
                </tr>

                </tbody>
            ))} 
            </Table>
            */}
            {/*
            <Table responsive id="nivel5">
            <thead className="cabecalho">
            <tr>
            <th> # </th> 
            <th> NOME FOR. </th> 
            <th> LOJA </th> 
            <th> VAL.VENDA </th> 
            <th> QTD.VENDA </th> 
            <th> GIRO(V / E) </th> 
            <th> VAL.ESTOQUE </th> 
            <th> QTD.ESTOQUE </th> 
            </tr> 
            </thead> 
            {vendeestgeral.map(vendeestgeral => ( 
                <tbody key = { vendeestgeral.nome_fornecedor }
                className = "cabecalho2" >
                <tr>
                <th scope = "row" > 1 </th> 
                <td> { vendeestgeral.nome_fornecedor }</td> 
                <td> { vendeestgeral.cod_fabricante }</td> 
                <td> { vendeestgeral.venda_total_venda }</td> 
                <td> { vendeestgeral.qtd_pecas_vendidas } </td> 
                <td> { vendeestgeral.giro }</td> 
                <td> { vendeestgeral.venda_total_estoque }</td> 
                <td> { vendeestgeral.qtd_estoque }</td> 
                </tr>

                </tbody>
            ))} 
            </Table>
            */}
            {/*
            <Table responsive id="nivel6">
            <thead className="cabecalho">
            <tr>
            <th> # </th> 
            <th> NOME FOR. </th> 
            <th> COD.FOR. </th> 
            <th> VAL.VENDA </th> 
            <th> QTD.VENDA </th> 
            <th> GIRO(V / E) </th> 
            <th> VAL.ESTOQUE </th> 
            <th> QTD.ESTOQUE </th> 
            </tr> 
            </thead> 
            {vendeestgeral.map(vendeestgeral => ( 
                <tbody key = { vendeestgeral.nome_fornecedor }
                className = "cabecalho2" >
                <tr>
                <th scope = "row" > 1 </th> 
                <td> { vendeestgeral.nome_fornecedor }</td> 
                <td> { vendeestgeral.cod_fabricante }</td> 
                <td> { vendeestgeral.venda_total_venda }</td> 
                <td> { vendeestgeral.qtd_pecas_vendidas } </td> 
                <td> { vendeestgeral.giro }</td> 
                <td> { vendeestgeral.venda_total_estoque }</td> 
                <td> { vendeestgeral.qtd_estoque }</td> 
                </tr>

                </tbody>
            ))} 
            </Table>
            */}
                        {/*
            <Table responsive id="nivel7">
            <thead className="cabecalho">
            <tr>
            <th> # </th> 
            <th> NOME PROD. </th> 
            <th> Nº.PROD. </th> 
            <th> REVISTA </th> 
            <th> PAGINA </th> 
            <th> REF.FORNECEDOR </th> 
            <th> PREÇO </th> 
            <th> PORC.TROCA </th> 
            <th> VAL.VENDA </th>
            <th> QTD.VENDA </th>
            <th> GIRO </th>
            <th> VAL.ESTOQUE </th>
            <th> QTD.ESTOQUE </th>
            </tr> 
            </thead> 
            {vendeestgeral.map(vendeestgeral => ( 
                <tbody key = { vendeestgeral.nome_fornecedor }
                className = "cabecalho2" >
                <tr>
                <th scope = "row" > 1 </th> 
                <td> { vendeestgeral.nome_fornecedor }</td> 
                <td> { vendeestgeral.cod_fabricante }</td> 
                <td> { vendeestgeral.venda_total_venda }</td> 
                <td> { vendeestgeral.qtd_pecas_vendidas } </td> 
                <td> { vendeestgeral.giro }</td> 
                <td> { vendeestgeral.venda_total_estoque }</td> 
                <td> { vendeestgeral.qtd_estoque }</td> 
                <td> { vendeestgeral.giro }</td> 
                <td> { vendeestgeral.venda_total_estoque }</td> 
                <td> { vendeestgeral.qtd_estoque }</td>
                <td> { vendeestgeral.venda_total_estoque }</td> 
                <td> { vendeestgeral.qtd_estoque }</td>
                </tr>

                </tbody>
            ))} 
            </Table>
            */}
            
            <Table responsive id="nivel8">
            <thead className="cabecalho">
            <tr>
            <th> # </th> 
            <th> TAMANHO </th> 
            <th> COR </th> 
            <th> Nº ITEM </th> 
            <th> PREÇO </th> 
            <th> PORC.TROCA </th> 
            <th> VAL.VENDA </th> 
            <th> QTD.VENDA </th> 
            <th> GIRO </th>
            <th> VAL.ESTOQUE </th>
            <th> QTD.ESTOQUE </th>
            </tr> 
            </thead> 
            {vendeestgeral.map(vendeestgeral => ( 
                <tbody key = { vendeestgeral.nome_fornecedor }
                className = "cabecalho2" >
                <tr>
                <th scope = "row" > 1 </th> 
                <td> { vendeestgeral.nome_fornecedor }</td> 
                <td> { vendeestgeral.cod_fabricante }</td> 
                <td> { vendeestgeral.venda_total_venda }</td> 
                <td> { vendeestgeral.qtd_pecas_vendidas } </td> 
                <td> { vendeestgeral.giro }</td> 
                <td> { vendeestgeral.venda_total_estoque }</td> 
                <td> { vendeestgeral.qtd_estoque }</td> 
                <td> { vendeestgeral.giro }</td> 
                <td> { vendeestgeral.venda_total_estoque }</td> 
                <td> { vendeestgeral.qtd_estoque }</td>
                </tr>

                </tbody>
            ))} 
            </Table>
            
    </div>
    </Col>
    </Row>
    </div>


)
}

export default TabelaFornecedor;