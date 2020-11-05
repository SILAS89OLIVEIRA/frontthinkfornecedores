import React, { useState, useCallback, useEffect } from "react";
import "./TabelaFornecedor.css";
import { Table, CardTitle, Card, Label, Row, Button, Col } from 'reactstrap';
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
           <div className = "blocotabela">
            <Card className = "cardFornecedor" >
            <CardTitle > FORNECEDOR </CardTitle> <Row form className = "calendario form-inline">
            <Col md = { 3 } >
            <div className = "data mb-2 mr-sm-2 mb-sm-0" >
            <div>
            <Label className = "nomeData1" > De: </Label> 
            </div> 
            <DatePicker  onChange = { onChange } value = { selectDateIni }/> 
            </div> 
            </Col> 
            <Col md = {3}>
            <div className = "data1 data mb-2 mr-sm-2 mb-sm-0">
            <div>
            <Label className = "nomeData2" > Até: </Label> 
            </div> 
            <DatePicker onChange = { onChange1 }value = { selectDateFim }/> 
            </div> 
            </Col> 
            </Row> 
            <div>
            <div className = "buttoncard" >
            <Button className = "buttonLimpar"> Limpar </Button> </div> 
            <div className = "buttonCard1" >

       
            <Button className = "buttonFiltrar" onClick={fetchRequest} type='submit'> Filtrar </Button> </div> 
            </div> 
            </Card> </div>

       


            <div key={vendeestgeral} className='tabela'>
            <Table responsive>
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
            ))
        } </Table>

    </div>

    </div>

)
}

export default TabelaFornecedor;