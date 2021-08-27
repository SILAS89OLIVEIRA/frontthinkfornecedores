import styled from "styled-components";

export const Container = styled.div`
  
     .div{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 5px;
        padding: 20px;
        overflow: none;

        #Grupo1 {
            grid-column: 1/1;
           

            > div {
                display: flex;                

                .Campo{
                    display: grid;
                    width: 75%;
                    justify-content: space-bettewn;
                    margin-left: 15px;

                }
                #data {
                    display: grid;
                    justify-content: space-bettewn;
                    background-color: transparent;
                    border: none;
                    border-bottom: 1px solid black;                
                    outline: none;
                    height: 2rem;
                    width: 80%;
                    font-size: 1rem;
                    margin: 0 2% 0 10%;
                    padding: 0;
                    box-shadow: none;
                    box-sizing: content-box;
                    transition: all 0.3s;
                }  

                
            }

            .buttonFiltrar{
                width: 25%;
                margin: 20px 0 0 15px;
            }
            .buttonImprimir{
                width: 30%;
                margin: 20px 0 0 80px;
            }

            .download-table-xls-button{
                width: 30%;
                heigth: 25vh;                
                margin: 20px 0 0 15px;
                
            }
            #test-table-xls-button {
                background: #007bff;                
                color: white;
                border: none;
                box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
                
            }

            #test-table-xls-button:hover {
                background: white;
                color: #007bff;
            }
            
            
            #test-table-xls-button:focus {
                background: white;
                color: #007bff;
            }
                

        }
        
        > div{
            .Tabela1{
                width: 111%;
                height: 400px;
                margin: 0 -15% 0% 3%;
            }
        }
    
        #Grupo2 {
            grid-column: 1/1;
           

            > div {
                display: flex;                

                .Campo{
                    width: 75%;
                    justify-content: space-bettewn;
                    margin-left: 15px;

                }
                
            }
            .revistaLabel{
                margin-left: 15px;
                margin: 15px;

               
            }
            #revista{
                margin-left: 15px;
                font-size: 18px;
            }

            .buttonFiltrar{
                width: 25%;
                margin: 20px 0 0 15px;
            }
            .buttonImprimir{
                width: 30%;
                margin: 20px 0 0 50px;
            }
            .download-table-xls-button{
                width: 30%;
                heigth: 25vh;                
                margin: 20px 0 0 15px;
                
            }
             #test-table-xls-button {
                background: #007bff;                
                color: white;
                border: none;
                box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
                
            }

            #test-table-xls-button:hover {
                background: white;
                color: #007bff;
            }
            
            
            #test-table-xls-button:focus {
                background: white;
                color: #007bff;
            }

        }
        
        > div{
            .Tabela2{
                width: 111%;
                height: 400px;
                margin: 0 -15% 0% 3%;
            }
        }

        #Grupo3 {
            grid-column: 1/1;
           

            > div {
                display: flex;                

                .Campo{
                    width: 75%;
                    justify-content: space-bettewn;
                    margin-left: 15px;

                }
                
            }
            .revistaLabel{
                margin-left: 15px;
                margin: 15px;


               
            }
            #revista{
                margin-left: 15px;
                font-size: 18px;
                width: 90%;
            }

            .buttonFiltrar{
                width: 25%;
                margin: 20px 0 0 15px;
            }
            .buttonImprimir{
                width: 30%;
                margin: 20px 0 0 50px;
            }

            .download-table-xls-button{
                width: 30%;
                heigth: 25vh;                
                margin: 20px 0 0 15px;
                
            }
            #test-table-xls-button {
                background: #007bff;                
                color: white;
                border: none;
                box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
                
            }

            #test-table-xls-button:hover {
                background: white;
                color: #007bff;
            }
            
            
            #test-table-xls-button:focus {
                background: white;
                color: #007bff;
            }
        }
        
        > div{
            .Tabela3{
                width: 111%;
                height: 400px;
                margin: 0 -15% 0% 3%;
            }
        }
    
    
        #Grupo4 {
            grid-column: 1/1;
           

            > div {
                display: flex;
                
            
                .Campo{
                    width: 75%;
                    justify-content: space-bettewn;
                    margin-left: 15px;

                }
            }
            .revistaLabel2{
                margin-left: 15px;
                margin: 15px;

               
            }
            #revista2{
                margin-left: 15px;
                font-size: 18px;
            }

            .referenciaLabel2{
                margin-left: 15px;
                margin: 15px;
            }

            #referencia2{
                margin-left: 15px;
            }

            .buttonFiltrar{
                width: 25%;
                margin: 20px 0 0 15px;
            }
            .buttonImprimir{
                width: 30%;
                margin: 20px 0 0 50px;
            }

            .download-table-xls-button{
                width: 30%;
                heigth: 25vh;                
                margin: 20px 0 0 15px;
                
            }
            #test-table-xls-button {
                background: #007bff;                
                color: white;
                border: none;
                box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
                
            }

            #test-table-xls-button:hover {
                background: white;
                color: #007bff;
            }
            
            
            #test-table-xls-button:focus {
                background: white;
                color: #007bff;
            }
        }
        > div{
            .Tabela4{
                width: 111%;
                height: 400px;
                margin: 0 -15% 0% 8%;
            }
        }

        #Grupo5 {
            grid-column: 1/1;
           

            > div {
                display: flex;
                
            
                .Campo{
                    width: 75%;
                    justify-content: space-bettewn;
                    margin-left: 15px;

                }
            }
            .revistaLabel3{
                margin-left: 15px;
                margin: 15px;

               
            }
            #revista3{
                margin-left: 15px;
                font-size: 18px;
            }

            .referenciaLabel3{
                margin-left: 15px;
                margin: 15px;
            }

            #referencia3{
                margin-left: 15px;
            }

            .buttonFiltrar{
                width: 25%;
                margin: 20px 0 0 15px;
            }
            .buttonImprimir{
                width: 35%;
                margin: 20px 0 0 50px;
            }

            .download-table-xls-button{
                width: 30%;
                heigth: 25vh;                
                margin: 20px 0 0 15px;
                
            }
            #test-table-xls-button {
                background: #007bff;                
                color: white;
                border: none;
                box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
                
            }

            #test-table-xls-button:hover {
                background: white;
                color: #007bff;
            }
            
            
            #test-table-xls-button:focus {
                background: white;
                color: #007bff;
            }
        }
        > div{
            .Tabela5{
                width: 111%;
                height: 400px;
                margin: 0 -15% 0% 5%;
            }
        }
        
        #Grupo6 {
            grid-column: 1/1;
           

            > div {
                display: flex;                

                .Campo{
                    width: 75%;
                    justify-content: space-bettewn;
                    margin-left: 15px;

                }
                
            }

            .buttonFiltrar{
                width: 25%;
                margin: 20px 0 0 15px;
            }
            .buttonImprimir{
                width: 30%;
                margin: 20px 0 0 50px;
            }

            .download-table-xls-button{
                width: 30%;
                heigth: 25vh;                
                margin: 20px 0 0 15px;
                
            }
            #test-table-xls-button {
                background: #007bff;                
                color: white;
                border: none;
                box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
                
            }

            #test-table-xls-button:hover {
                background: white;
                color: #007bff;
            }
            
            
            #test-table-xls-button:focus {
                background: white;
                color: #007bff;
            }

        }
        
        > div{
            .Tabela6{
                width: 111%;
                height: 400px;
                margin: 0 -15% 0% -3%;
            }
        }

        #Grupo7 {
            grid-column: 1/1;
           

            > div {
                display: flex;                

                .Campo{
                    width: 75%;
                    justify-content: space-bettewn;
                    margin-left: 15px;

                }
                
            }
            .revistaLabel4{
        
                margin-left: 15px;
                margin: 15px;

               
            }
            #revista4{
                width: 75%;
                margin-left: 15px;
                font-size: 18px;
            }

            .buttonFiltrar{
                width: 25%;
                margin: 20px 0 0 15px;
            }
            .buttonImprimir{
                width: 30%;
                margin: 20px 0 0 50px;
            }

            .download-table-xls-button{
                width: 30%;
                heigth: 25vh;                
                margin: 20px 0 0 15px;
                
            }
            #test-table-xls-button {
                background: #007bff;                
                color: white;
                border: none;
                box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
                
            }

            #test-table-xls-button:hover {
                background: white;
                color: #007bff;
            }
            
            
            #test-table-xls-button:focus {
                background: white;
                color: #007bff;
            }

        }
        
        > div{
            .Tabela7{
                width: 111%;
                height: 400px;
                margin: 0 -15% 0% 7%;
            }
        }

        #Grupo8 {
            grid-column: 1/1;
           

            > div {
                display: flex;                

                .Campo{
                    width: 80%;
                    justify-content: space-bettewn;

                }
                
            }
            .revistaLabel5{
                margin-left: 15px;
                margin: 15px;

               
            }
            #revista5{
                margin-left: 15px;
                font-size: 18px;
            }

            .revistaLabel6{
                margin-left: 15px;
                margin: 15px;

               
            }
            #revista6{
                margin-left: 15px;
                font-size: 18px;
            }

            .buttonFiltrar{
                width: 40%;
                margin: 20px 0 0 15px;
            }
            .buttonImprimir{
                width: 65%;
                margin: 20px 0 0 30px;
            }

            .download-table-xls-button{
                width: 50%;
                heigth: 25vh;                
                margin: 20px 0 0 15px;
                
            }
            #test-table-xls-button {
                background: #007bff;                
                color: white;
                border: none;
                box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
                
            }

            #test-table-xls-button:hover {
                background: white;
                color: #007bff;
            }
            
            
            #test-table-xls-button:focus {
                background: white;
                color: #007bff;
            }

        }
        
        > div{
            .Tabela8{
                max-width: 75%;
                height: 400px;
                margin: 0 -15% 0% 15%;
            }
        }

        #Grupo9 {
            grid-column: 1/1;
           

            > div {
                display: flex;                

                .Campo{
                    width: 80%;
                    justify-content: space-bettewn;

                }
                
            }
            .revistaLabel7{
                margin-left: 15px;
                margin: 15px;

               
            }
            #revista7{
                margin-left: 15px;
                font-size: 18px;
            }

            .revistaLabel8{
                margin-left: 15px;
                margin: 15px;

               
            }
            #revista8{
                margin-left: 15px;
                font-size: 18px;
            }

            .revistaLabel9{
                margin-left: 15px;
                margin: 15px;

               
            }
            #revista9{
                margin-left: 15px;
                font-size: 18px;
            }

            .buttonFiltrar{
                width: 30%;
                margin: 20px 0 0 15px;
            }
            .buttonImprimir{
                width: 35%;
                margin: 20px 0 0 30px;
            }

            .download-table-xls-button{
                width: 40%;
                heigth: 25vh;                
                margin: 20px 0 0 15px;
                
            }
            #test-table-xls-button {
                background: #007bff;                
                color: white;
                border: none;
                box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
                
            }

            #test-table-xls-button:hover {
                background: white;
                color: #007bff;
            }
            
            
            #test-table-xls-button:focus {
                background: white;
                color: #007bff;
            }

        }
        
        > div{
            .Tabela9{
                max-width: 100%;
                height: 400px;
                margin: 0 -15% 0% 7%;
            }
        }

        #Grupo10 {
            grid-column: 1/1;
           

            > div {
                display: flex;                

                .Campo{
                    width: 80%;
                    justify-content: space-bettewn;
                    margin-left: 15px;
                }
                
            }
            .revistaLabel10{
                margin-left: 15px;
                margin: 15px;

               
            }
            #revista10{
                margin-left: 15px;
                font-size: 18px;
            }

            

            .buttonFiltrar{
                width: 30%;
                margin: 20px 0 0 15px;
            }
            .buttonImprimir{
                width: 35%;
                margin: 20px 0 0 30px;
            }
            .download-table-xls-button{
                width: 40%;
                heigth: 25vh;                
                margin: 20px 0 0 15px;
                
            }
            #test-table-xls-button {
                background: #007bff;                
                color: white;
                border: none;
                box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
                
            }

            #test-table-xls-button:hover {
                background: white;
                color: #007bff;
            }
            
            
            #test-table-xls-button:focus {
                background: white;
                color: #007bff;
            }

        }
        
        > div{
            .Tabela10{
                max-width: 100%;
                height: 400px;
                margin: 0 -15% 0% 7%;
            }
        }

        #Grupo11 {
            grid-column: 1/1;
           

            > div {
                display: flex;                

                .Campo{
                    width: 80%;
                    justify-content: space-bettewn;
                    margin-left: 15px;

                }
                
            }
            

            .buttonFiltrar{
                width: 30%;
                margin: 20px 0 0 15px;
            }
            .buttonImprimir{
                width: 30%;
                margin: 20px 0 0 30px;
            }

            .download-table-xls-button{
                width: 30%;
                heigth: 25vh;                
                margin: 20px 0 0 15px;
                
            }
            #test-table-xls-button {
                background: #007bff;                
                color: white;
                border: none;
                box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
                
            }

            #test-table-xls-button:hover {
                background: white;
                color: #007bff;
            }
            
            
            #test-table-xls-button:focus {
                background: white;
                color: #007bff;
            }

        }
        
        > div{
            .Tabela11{
                width: 100%;
                height: 400px;
                margin: 0 -15% 0% 8%;
            }
        }


        @media only screen and (max-width: 767px){
            div{
               grid-column: 1/1;
              
               

               > .Tabela1{
                    max-width: 45%;
                    margin-top: 10%;
                    margin-left: -1%;
                   
               } 
               
            }
            
            #Grupo1{
                display: grid;
                grid-template-column: 1fr;
                grid-gap: 5px;
          

              
                > div {                   
                    
                    .Campo{
                        grid-column: 1/1;
                        margin:  0 0 0 -1%;
                        justify-content: center;
                    }
                    #data {
                        display: grid;
                        justify-content: space-bettewn;
                        background-color: transparent;
                        border: none;
                        border-bottom: 1px solid black;                
                        outline: none;
                        height: 2rem;
                        width: 60%;
                        font-size: 1rem;
                        margin: 0 2% 0 0;
                        padding: 0;
                        box-shadow: none;
                        box-sizing: content-box;
                        transition: all 0.3s;
                    }  
                    #data1 {
                        display: grid;
                        justify-content: space-bettewn;
                        background-color: transparent;
                        border: none;
                        border-bottom: 1px solid black;                
                        outline: none;
                        height: 2rem;
                        width: 60%;
                        font-size: 1rem;
                        margin: 0 2% 0 -10%;
                        padding: 0;
                        box-shadow: none;
                        box-sizing: content-box;
                        transition: all 0.3s;
                    }  
                    #filtro{
                        
                        border-style: hidden hidden solid hidden;
                        border-radius: 0%;
                        width: 43%;
                        height: 5vh;
                        margin: 20px 0 0 0;
                        border-bottom: 1px solid black;
                        font-size: 2vh;
                    }
    
                    #pdf{
                        border-style: hidden hidden solid hidden;
                        border-radius: 0%;
                        width: 43%;
                        height: 5vh;                        
                        margin: 85px 0 0 -43%;
                        border-bottom: 1px solid black;
                        font-size: 2vh;
                    
                    }

                    #test-table-xls-button {
                        background: #007bff;                
                        color: white;
                        border: none;
                        heigth: 10%;
                        width: 43%;
                        margin: 20px 0 0 0;
                    }

                    .botao{
                        display: flex;
                        width: 90%;
                        
                    }
                   
                    

                }
            }

            > .Tabela2{
                max-width: 45%;
                margin-top: 10%;
                margin-left: -1%;
           } 
           
            #Grupo2{
                display: grid;
                grid-template-column: 1fr;
                grid-gap: 5px;


                > div {                   
                    
                    .Campo{
                        grid-column: 1/1;
                        margin:  0 0 0 -1%;
                        justify-content: center;
                    }
                    .revistaLabel{
                        margin: 10px 0 0 0;
                    }
                    #revista{
                        border-style: hidden hidden solid hidden;
                        border-radius: 0%;
                        width: 45%;
                        margin: 0 0 0 -0.5%;
                        border-bottom: 1px solid black;
                        font-size: 2vh;
                    }
                    #data {
                        display: grid;
                        justify-content: space-bettewn;
                        background-color: transparent;
                        border: none;
                        border-bottom: 1px solid black;                
                        outline: none;
                        height: 2rem;
                        width: 60%;
                        font-size: 1rem;
                        margin: 0 2% 0 0;
                        padding: 0;
                        box-shadow: none;
                        box-sizing: content-box;
                        transition: all 0.3s;
                    }  
                    #data1 {
                        display: grid;
                        justify-content: space-bettewn;
                        background-color: transparent;
                        border: none;
                        border-bottom: 1px solid black;                
                        outline: none;
                        height: 2rem;
                        width: 60%;
                        font-size: 1rem;
                        margin: 0 2% 0 -10%;
                        padding: 0;
                        box-shadow: none;
                        box-sizing: content-box;
                        transition: all 0.3s;
                    }  



                    #filtro{
                        
                        border-style: hidden hidden solid hidden;
                        border-radius: 0%;
                        width: 43%;
                        height: 5vh;
                        margin: 20px 0 0 0;
                        border-bottom: 1px solid black;
                        font-size: 2vh;
                    }
    
                    #pdf{
                        border-style: hidden hidden solid hidden;
                        border-radius: 0%;
                        width: 43%;
                        height: 5vh;                        
                        margin: 80px 0 0 -43%;
                        border-bottom: 1px solid black;
                        font-size: 2vh;
                    
                    }
                    
                    #test-table-xls-button {
                        background: #007bff;                
                        color: white;
                        border: none;
                        width: 43%;               
                        margin: 20px 0 0 0;
                    }

                    .botao{
                        display: flex;
                        width: 90%;
                        
                    }                
                    
            

                }
                
            }

            > .Tabela3{
                max-width: 45%;
                margin-top: 10%;
                margin-left: -1%;
           } 

           #Grupo3{
            display: grid;
            grid-template-column: 1fr;
            grid-gap: 5px;


            > div {                   
                
                .Campo{
                    grid-column: 1/1;
                    margin:  0 0 0 -1%;
                    justify-content: center;
                }
                .revistaLabel{
                    margin: 10px 0 0 0;
                }
                #revista{
                    border-style: hidden hidden solid hidden;
                    border-radius: 0%;
                    width: 45%;
                    margin: 0 0 0 -0.5%;
                    border-bottom: 1px solid black;
                    font-size: 2vh;
                }
                #data {
                    display: grid;
                    justify-content: space-bettewn;
                    background-color: transparent;
                    border: none;
                    border-bottom: 1px solid black;                
                    outline: none;
                    height: 2rem;
                    width: 60%;
                    font-size: 1rem;
                    margin: 0 2% 0 0;
                    padding: 0;
                    box-shadow: none;
                    box-sizing: content-box;
                    transition: all 0.3s;
                }  
                #data1 {
                    display: grid;
                    justify-content: space-bettewn;
                    background-color: transparent;
                    border: none;
                    border-bottom: 1px solid black;                
                    outline: none;
                    height: 2rem;
                    width: 60%;
                    font-size: 1rem;
                    margin: 0 2% 0 -10%;
                    padding: 0;
                    box-shadow: none;
                    box-sizing: content-box;
                    transition: all 0.3s;
                }  


                #filtro{
                        
                    border-style: hidden hidden solid hidden;
                    border-radius: 0%;
                    width: 40%;
                    height: 5vh;
                    margin: 20px 0 0 0;
                    border-bottom: 1px solid black;
                    font-size: 2vh;
                }

                #pdf{
                    border-style: hidden hidden solid hidden;
                    border-radius: 0%;
                    width: 40%;
                    height: 5vh;                        
                    margin: 70px 0 0 -40%;
                    border-bottom: 1px solid black;
                    font-size: 2vh;
                
                }

                #test-table-xls-button {
                    background: #007bff;                
                    color: white;
                    border: none;
                    heigth: 10%;
                    width: 43%;
                    margin: 20px 0 0 0;
                }

                .botao{
                    display: flex;
                    width: 90%;
                    
                }
               
                

            }
        }

        > div .Tabela4{
            max-width: 42%;
            margin-top: 10%;
            margin-left: -1%;
        }
           
        #Grupo4{
            display: grid;
            grid-template-column: 1fr;
            grid-gap: 5px;

            

            > div {                   
                
                .Campo{
                    grid-column: 1/1;
                    margin:  0 0 0 -1%;
                    justify-content: center;
                }
                .revistaLabel2{
                    margin: 10px 0 0 0;
                }
                #revista2{
                    border-style: hidden hidden solid hidden;
                    border-radius: 0%;
                    width: 40%;
                    margin: 0 0 0 -0.5%;
                    border-bottom: 1px solid black;
                    font-size: 2vh;
                }

                .referenciaLabel2{
                    margin: 10px 0 0 0;
                }

                #referencia2{
                    border-style: hidden hidden solid hidden;
                    border-radius: 0%;
                    width: 40%;
                    margin: 0 0 0 -0.5%;
                    border-bottom: 1px solid black;
                    font-size: 2vh;
                }
                
                #data {
                    display: grid;
                    justify-content: space-bettewn;
                    background-color: transparent;
                    border: none;
                    border-bottom: 1px solid black;                
                    outline: none;
                    height: 2rem;
                    width: 60%;
                    font-size: 1rem;
                    margin: 0 2% 0 0;
                    padding: 0;
                    box-shadow: none;
                    box-sizing: content-box;
                    transition: all 0.3s;
                }  
                #data1 {
                    display: grid;
                    justify-content: space-bettewn;
                    background-color: transparent;
                    border: none;
                    border-bottom: 1px solid black;                
                    outline: none;
                    height: 2rem;
                    width: 60%;
                    font-size: 1rem;
                    margin: 0 2% 0 -10%;
                    padding: 0;
                    box-shadow: none;
                    box-sizing: content-box;
                    transition: all 0.3s;
                }  



                #filtro{
                        
                    border-style: hidden hidden solid hidden;
                    border-radius: 0%;
                    width: 40%;
                    height: 5vh;
                    margin: 20px 0 0 0;
                    border-bottom: 1px solid black;
                    font-size: 2vh;
                }

                #pdf{
                    border-style: hidden hidden solid hidden;
                    border-radius: 0%;
                    width: 40%;
                    height: 5vh;                        
                    margin: 80px 0 0 -40%;
                    border-bottom: 1px solid black;
                    font-size: 2vh;
                
                }

                #test-table-xls-button {
                    background: #007bff;                
                    color: white;
                    border: none;
                    heigth: 10%;
                    width: 40%;
                    margin: 20px 0 0 0;
                }

                .botao{
                    display: flex;
                    width: 90%;
                    
                }

            }
          
        }


        > div .Tabela5{
            max-width: 40%;
            margin-top: 10%;
            margin-left: -1.5%;
        }
           

        #Grupo5{
            display: grid;
            grid-template-column: 1fr;
            grid-gap: 5px;


            > div {                   
                
                .Campo{
                    grid-column: 1/1;
                    margin:  0 0 0 -1%;
                    justify-content: center;
                }
                #data {
                    display: grid;
                    justify-content: space-bettewn;
                    background-color: transparent;
                    border: none;
                    border-bottom: 1px solid black;                
                    outline: none;
                    height: 2rem;
                    width: 60%;
                    font-size: 1rem;
                    margin: 0 2% 0 0;
                    padding: 0;
                    box-shadow: none;
                    box-sizing: content-box;
                    transition: all 0.3s;
                }  
                #data1 {
                    display: grid;
                    justify-content: space-bettewn;
                    background-color: transparent;
                    border: none;
                    border-bottom: 1px solid black;                
                    outline: none;
                    height: 2rem;
                    width: 60%;
                    font-size: 1rem;
                    margin: 0 2% 0 -10%;
                    padding: 0;
                    box-shadow: none;
                    box-sizing: content-box;
                    transition: all 0.3s;
                } 
                .revistaLabel3{
                    margin: 10px 0 0 0;
                }
                #revista3{
                    border-style: hidden hidden solid hidden;
                    border-radius: 0%;
                    width: 37%;
                    margin: 0 0 0 -0.5%;
                    border-bottom: 1px solid black;
                    font-size: 2vh;
                }

                .referenciaLabel3{
                    margin: 10px 0 0 0;
                }

                #referencia3{
                    border-style: hidden hidden solid hidden;
                    border-radius: 0%;
                    width: 37%;
                    margin: 0 0 0 -0.5%;
                    border-bottom: 1px solid black;
                    font-size: 2vh;
                } 



                #filtro{
                        
                    border-style: hidden hidden solid hidden;
                    border-radius: 0%;
                    width: 37%;
                    height: 5vh;
                    margin: 20px 0 0 0;
                    border-bottom: 1px solid black;
                    font-size: 2vh;
                }

                #pdf{
                    border-style: hidden hidden solid hidden;
                    align-items: center;
                    border-radius: 0%;
                    width: 37%;
                    height: 5vh;                        
                    margin: 70px 0 0 -37%;
                    border-bottom: 1px solid black;
                    font-size: 2vh;
                
                }

                #test-table-xls-button {
                    background: #007bff;                
                    color: white;
                    border: none;
                    heigth: 10%;
                    width: 37%;
                    margin: 20px 0 0 0;
                }

                .botao{
                    display: flex;
                    width: 90%;
                    
                }
            
                

            }
        }

        
        > div .Tabela6{
            max-width: 48.5%;
            margin-top: 10%;
            margin-left: -1.5%;
        }
           

        #Grupo6{
            display: grid;
            grid-template-column: 1fr;
            grid-gap: 5px;


            > div {                   
                
                .Campo{
                    grid-column: 1/1;
                    margin:  0 0 0 -1%;
                    justify-content: center;
                }
                #data {
                    display: grid;
                    justify-content: space-bettewn;
                    background-color: transparent;
                    border: none;
                    border-bottom: 1px solid black;                
                    outline: none;
                    height: 2rem;
                    width: 60%;
                    font-size: 1rem;
                    margin: 0 2% 0 0;
                    padding: 0;
                    box-shadow: none;
                    box-sizing: content-box;
                    transition: all 0.3s;
                }  
                #data1 {
                    display: grid;
                    justify-content: space-bettewn;
                    background-color: transparent;
                    border: none;
                    border-bottom: 1px solid black;                
                    outline: none;
                    height: 2rem;
                    width: 60%;
                    font-size: 1rem;
                    margin: 0 2% 0 -10%;
                    padding: 0;
                    box-shadow: none;
                    box-sizing: content-box;
                    transition: all 0.3s;
                } 


                #filtro{
                        
                    border-style: hidden hidden solid hidden;
                    border-radius: 0%;
                    width: 45%;
                    height: 5vh;
                    margin: 20px 0 0 0;
                    border-bottom: 1px solid black;
                    font-size: 2vh;
                }

                #pdf{
                    border-style: hidden hidden solid hidden;
                    align-items: center;
                    border-radius: 0%;
                    width: 45%;
                    height: 5vh;                        
                    margin: 70px 0 0 -45%;
                    border-bottom: 1px solid black;
                    font-size: 2vh;
                
                }

                #test-table-xls-button {
                    background: #007bff;                
                    color: white;
                    border: none;
                    heigth: 10%;
                    width: 45%;
                    margin: 20px 0 0 0;
                }

                .botao{
                    display: flex;
                    width: 90%;
                    
                }
            
                

            }
        }

        > div .Tabela7{
            max-width: 47.5%;
            margin-top: 10%;
            margin-left: -1.5%;
        }
           

        #Grupo7{
            display: grid;
            grid-template-column: 1fr;
            grid-gap: 5px;


            > div {                   
                
                .Campo{
                    grid-column: 1/1;
                    margin:  0 0 0 -1%;
                    justify-content: center;
                }
                #data {
                    display: grid;
                    justify-content: space-bettewn;
                    background-color: transparent;
                    border: none;
                    border-bottom: 1px solid black;                
                    outline: none;
                    height: 2rem;
                    width: 60%;
                    font-size: 1rem;
                    margin: 0 2% 0 0;
                    padding: 0;
                    box-shadow: none;
                    box-sizing: content-box;
                    transition: all 0.3s;
                }  
                #data1 {
                    display: grid;
                    justify-content: space-bettewn;
                    background-color: transparent;
                    border: none;
                    border-bottom: 1px solid black;                
                    outline: none;
                    height: 2rem;
                    width: 60%;
                    font-size: 1rem;
                    margin: 0 2% 0 -10%;
                    padding: 0;
                    box-shadow: none;
                    box-sizing: content-box;
                    transition: all 0.3s;
                } 
                .revistaLabel4{
                    margin: 10px 0 0 0;
                }
                #revista4{
                    border-style: hidden hidden solid hidden;
                    border-radius: 0%;
                    width: 45%;
                    margin: 0 0 0 -0.5%;
                    border-bottom: 1px solid black;
                    font-size: 2vh;
                }

                #filtro{
                        
                    border-style: hidden hidden solid hidden;
                    border-radius: 0%;
                    width: 45%;
                    height: 5vh;
                    margin: 20px 0 0 0;
                    border-bottom: 1px solid black;
                    font-size: 2vh;
                }

                #pdf{
                    border-style: hidden hidden solid hidden;
                    align-items: center;
                    border-radius: 0%;
                    width: 45%;
                    height: 5vh;                        
                    margin: 70px 0 0 -45%;
                    border-bottom: 1px solid black;
                    font-size: 2vh;
                
                }
                #test-table-xls-button {
                    background: #007bff;                
                    color: white;
                    border: none;
                    heigth: 10%;
                    width: 45%;
                    margin: 20px 0 0 0;
                }

                .botao{
                    display: flex;
                    width: 90%;
                    
                }
            
                

            }
        }

        > div .Tabela8{
            max-width: 30%;
            margin-top: 10%;
            margin-left: -1%;
        }

        
        #Grupo8{
            display: grid;
            grid-template-column: 1fr;
            grid-gap: 5px;


            > div {                   
                
                .Campo{
                    grid-column: 1/1;
                    margin:  0 0 0 -1%;
                    justify-content: center;
                }
                #data {
                    display: grid;
                    justify-content: space-bettewn;
                    background-color: transparent;
                    border: none;
                    border-bottom: 1px solid black;                
                    outline: none;
                    height: 2rem;
                    width: 60%;
                    font-size: 1rem;
                    margin: 0 2% 0 0;
                    padding: 0;
                    box-shadow: none;
                    box-sizing: content-box;
                    transition: all 0.3s;
                }  
                #data1 {
                    display: grid;
                    justify-content: space-bettewn;
                    background-color: transparent;
                    border: none;
                    border-bottom: 1px solid black;                
                    outline: none;
                    height: 2rem;
                    width: 60%;
                    font-size: 1rem;
                    margin: 0 2% 0 -10%;
                    padding: 0;
                    box-shadow: none;
                    box-sizing: content-box;
                    transition: all 0.3s;
                } 
                .revistaLabel5{
                    margin: 10px 0 0 0;
                }
                #revista5{
                    border-style: hidden hidden solid hidden;
                    border-radius: 0%;
                    width: 29%;
                    margin: 0 0 0 -0.5%;
                    border-bottom: 1px solid black;
                    font-size: 2vh;
                }
                .revistaLabel6{
                    margin: 10px 0 0 0;
                }
                #revista6{
                    border-style: hidden hidden solid hidden;
                    border-radius: 0%;
                    width: 29%;
                    margin: 0 0 0 -0.5%;
                    border-bottom: 1px solid black;
                    font-size: 2vh;
                }


                #filtro{
                        
                    border-style: hidden hidden solid hidden;
                    border-radius: 0%;
                    width: 28%;
                    height: 5vh;
                    margin: 20px 0 0 0;
                    border-bottom: 1px solid black;
                    font-size: 2vh;
                }

                #pdf{
                    border-style: hidden hidden solid hidden;
                    align-items: center;
                    border-radius: 0%;
                    width: 28%;
                    height: 3vh;                        
                    margin: 80px 0 0 -28%;
                    border-bottom: 1px solid black;
                    font-size: 2vh;
                
                }
                #test-table-xls-button {
                    background: #007bff;                
                    color: white;
                    border: none;
                    heigth: 10%;
                    width: 28%;
                    margin: 20px 0 0 0;
                }

                .botao{
                    display: flex;
                    width: 90%;
                    
                }
            
                

            }
        }

        > div .Tabela9{
            max-width: 39%;
            margin-top: 10%;
            margin-left: -1%;
        }

        
        #Grupo9{
            display: grid;
            grid-template-column: 1fr;
            grid-gap: 5px;


            > div {                   
                
                .Campo{
                    grid-column: 1/1;
                    margin:  0 0 0 -1%;
                    justify-content: center;
                }
                #data {
                    display: grid;
                    justify-content: space-bettewn;
                    background-color: transparent;
                    border: none;
                    border-bottom: 1px solid black;                
                    outline: none;
                    height: 2rem;
                    width: 60%;
                    font-size: 1rem;
                    margin: 0 2% 0 0;
                    padding: 0;
                    box-shadow: none;
                    box-sizing: content-box;
                    transition: all 0.3s;
                }  
                #data1 {
                    display: grid;
                    justify-content: space-bettewn;
                    background-color: transparent;
                    border: none;
                    border-bottom: 1px solid black;                
                    outline: none;
                    height: 2rem;
                    width: 60%;
                    font-size: 1rem;
                    margin: 0 2% 0 -10%;
                    padding: 0;
                    box-shadow: none;
                    box-sizing: content-box;
                    transition: all 0.3s;
                } 
                .revistaLabel7{
                    margin: 10px 0 0 0;
                }
                #revista7{
                    border-style: hidden hidden solid hidden;
                    border-radius: 0%;
                    width: 38%;
                    margin: 0 0 0 -0.5%;
                    border-bottom: 1px solid black;
                    font-size: 2vh;
                }
                .revistaLabel8{
                    margin: 10px 0 0 0;
                }
                #revista8{
                    border-style: hidden hidden solid hidden;
                    border-radius: 0%;
                    width: 38%;
                    margin: 0 0 0 -0.5%;
                    border-bottom: 1px solid black;
                    font-size: 2vh;
                }
                .revistaLabel9{
                    margin: 10px 0 0 0;
                }
                #revista9{
                    border-style: hidden hidden solid hidden;
                    border-radius: 0%;
                    width: 38%;
                    margin: 0 0 0 -0.5%;
                    border-bottom: 1px solid black;
                    font-size: 2vh;
                }




                #filtro{
                        
                    border-style: hidden hidden solid hidden;
                    border-radius: 0%;
                    width: 37%;
                    height: 5vh;
                    margin: 20px 0 0 0;
                    border-bottom: 1px solid black;
                    font-size: 2vh;
                }

                #pdf{
                    border-style: hidden hidden solid hidden;
                    align-items: center;
                    border-radius: 0%;
                    width: 37%;
                    height: 5vh;                        
                    margin: 70px 0 0 -37%;
                    border-bottom: 1px solid black;
                    font-size: 2vh;
                
                }
                #test-table-xls-button {
                    background: #007bff;                
                    color: white;
                    border: none;
                    heigth: 10%;
                    width: 37%;
                    margin: 20px 0 0 0;
                }

                .botao{
                    display: flex;
                    width: 90%;
                    
                }
            
                

            }
        }

        > div .Tabela10{
            max-width: 39%;
            margin-top: 10%;
            margin-left: -1%;
        }

        
        #Grupo10{
            display: grid;
            grid-template-column: 1fr;
            grid-gap: 5px;


            > div {                   
                
                .Campo{
                    grid-column: 1/1;
                    margin:  0 0 0 -1%;
                    justify-content: center;
                }
                #data {
                    display: grid;
                    justify-content: space-bettewn;
                    background-color: transparent;
                    border: none;
                    border-bottom: 1px solid black;                
                    outline: none;
                    height: 2rem;
                    width: 60%;
                    font-size: 1rem;
                    margin: 0 2% 0 0;
                    padding: 0;
                    box-shadow: none;
                    box-sizing: content-box;
                    transition: all 0.3s;
                }  
                #data1 {
                    display: grid;
                    justify-content: space-bettewn;
                    background-color: transparent;
                    border: none;
                    border-bottom: 1px solid black;                
                    outline: none;
                    height: 2rem;
                    width: 60%;
                    font-size: 1rem;
                    margin: 0 2% 0 -10%;
                    padding: 0;
                    box-shadow: none;
                    box-sizing: content-box;
                    transition: all 0.3s;
                } 
                .revistaLabel10{
                    margin: 10px 0 0 0;
                }
                #revista10{
                    border-style: hidden hidden solid hidden;
                    border-radius: 0%;
                    width: 38%;
                    margin: 0 0 0 -0.5%;
                    border-bottom: 1px solid black;
                    font-size: 2vh;
                }         


                #filtro{
                        
                    border-style: hidden hidden solid hidden;
                    border-radius: 0%;
                    width: 37%;
                    height: 5vh;
                    margin: 20px 0 0 0;
                    border-bottom: 1px solid black;
                    font-size: 2vh;
                }

                #pdf{
                    border-style: hidden hidden solid hidden;
                    align-items: center;
                    border-radius: 0%;
                    width: 37%;
                    height: 5vh;                        
                    margin: 70px 0 0 -37%;
                    border-bottom: 1px solid black;
                    font-size: 2vh;
                
                }

                #test-table-xls-button {
                    background: #007bff;                
                    color: white;
                    border: none;
                    heigth: 10%;
                    width: 37%;
                    margin: 20px 0 0 0;
                }
                .botao{
                    display: flex;
                    width: 90%;
                    
                }
            
                

            }
        }

        > div .Tabela11{
            max-width: 43%;
            margin-top: 10%;
            margin-left: -1%;
        }

        
        #Grupo11{
            display: grid;
            grid-template-column: 1fr;
            grid-gap: 5px;


            > div {                   
                
                .Campo{
                    grid-column: 1/1;
                    margin:  0 0 0 -1%;
                    justify-content: center;
                }
                #data {
                    display: grid;
                    justify-content: space-bettewn;
                    background-color: transparent;
                    border: none;
                    border-bottom: 1px solid black;                
                    outline: none;
                    height: 2rem;
                    width: 60%;
                    font-size: 1rem;
                    margin: 0 2% 0 0;
                    padding: 0;
                    box-shadow: none;
                    box-sizing: content-box;
                    transition: all 0.3s;
                }  
                #data1 {
                    display: grid;
                    justify-content: space-bettewn;
                    background-color: transparent;
                    border: none;
                    border-bottom: 1px solid black;                
                    outline: none;
                    height: 2rem;
                    width: 60%;
                    font-size: 1rem;
                    margin: 0 2% 0 -10%;
                    padding: 0;
                    box-shadow: none;
                    box-sizing: content-box;
                    transition: all 0.3s;
                } 
                  


                #filtro{
                        
                    border-style: hidden hidden solid hidden;
                    border-radius: 0%;
                    width: 41%;
                    height: 5vh;
                    margin: 20px 0 0 0;
                    border-bottom: 1px solid black;
                    font-size: 2vh;
                }

                #pdf{
                    border-style: hidden hidden solid hidden;
                    align-items: center;
                    border-radius: 0%;
                    width: 41%;
                    height: 5vh;                        
                    margin: 80px 0 0 -41%;
                    border-bottom: 1px solid black;
                    font-size: 2vh;
                
                }

                #test-table-xls-button {
                    background: #007bff;                
                    color: white;
                    border: none;
                    heigth: 10%;
                    width: 41%;
                    margin: 20px 0 0 0;
                }

                
                .botao{
                    display: flex;
                    width: 90%;
                    
                }
            
                

            }
        }

    }
        
`;
