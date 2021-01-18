import React, { useState } from 'react';
import "./MenuSuperior.css";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink
} from 'reactstrap';

//import MaterialIcon from '@material/react-material-icon';

const MenuSuperior = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md">
        <NavbarBrand href="/"></NavbarBrand>
        <NavbarToggler onClick={toggle} className="Hamburger" />
        <Collapse isOpen={isOpen} navbar>
        
         <Nav className="mr-auto" navbar>
         <NavItem>
              <NavLink href="/googledrive" >DOWNLOAD DE ARQUIVOS</NavLink>
          </NavItem>
          <NavItem>
              <NavLink href="/vendaestoque" >CONSULTAS</NavLink>
          </NavItem>

     {/*    <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav className="tituloNome">
                PRODUTO
              </DropdownToggle>
              <DropdownMenu right className="menus">
                <DropdownItem><i className="material-icons souza-left">add_circle_outline</i>
                  Cadastro Produto
                </DropdownItem>
                <DropdownItem><i className="material-icons souza-left">search</i>
                  Consulta Produto
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav className="tituloNome">
                ROMANEIO
              </DropdownToggle>
              <DropdownMenu right className="menus">
                <DropdownItem><i className="material-icons souza-left">add_circle_outline</i>
                  Cadastro Romaneio
                </DropdownItem>
                <DropdownItem><i className="material-icons souza-left">search</i>
                  Consulta Romaneio
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav className="tituloNome">
                CONSULTAS
              </DropdownToggle>
              <DropdownMenu right className="menus">
                <UncontrolledDropdown nav inNavbar direction="right">
                  <DropdownItem nav="true" id="subtituloNome"><i className="material-icons souza-left">trending_up</i>
                  Venda/Estoque
                  </DropdownItem>
                  <DropdownMenu right className="menus">
                    <DropdownItem><i className="material-icons souza-left">table_view</i>
                    Fornecedor
                    </DropdownItem>
                    <DropdownItem><i className="material-icons souza-left">table_view</i>
                    Produto
                    </DropdownItem>
                    <DropdownItem><i className="material-icons souza-left">table_view</i>
                    Item
                    </DropdownItem>
                    <DropdownItem><i className="material-icons souza-left">table_view</i>
                    Loja
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <DropdownItem><i className="material-icons souza-left">compare_arrows</i>
                  Movimentação
                </DropdownItem>
                <DropdownItem><i className="material-icons souza-left">shuffle</i>
                  Consulta Básica
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav className="tituloNome">
                RETRO LOGÍSTICA
              </DropdownToggle>
              <DropdownMenu right className="menus">
                <DropdownItem><i className="material-icons souza-left">input</i>
                  Consulta Entrada
                </DropdownItem>
                <DropdownItem><i className="material-icons souza-left">replay</i>
                  Consulta Devolução
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>*/}
     </Nav> 
          <NavItem id="BotaoSair">
              <NavLink href="/" className="btn"><i className="material-icons md-36 souza-left ">exit_to_app</i>SAIR</NavLink>
          </NavItem>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MenuSuperior;