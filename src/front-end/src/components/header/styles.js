import styled from "styled-components";

const StyledTopBar = styled.nav`
/* Estilo para desktop */
.top{
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    background-color: var( --color-background-nav);
}

   

    #logo{
        width: 100px;
        height: 60px;

    }
    /* Configurações para o botão do menu no desktop */
    #menu-button{
        width: 30px;
    }
    /* Configurações do overlay do menu no desktop */
    #menu-overlay{
        position: fixed;
        top: 0;
        left: 0;
        width: 40%;
        height: 100vh;
        background-color: var(--color-text-dark);
        opacity: 0.8;

    }
    /* Configurações do logo no menu no desktop */
    #menu-logo{
        width: 110px;    
        margin-top: 30px;  
        margin-bottom: 10px;

    }
    /* Configurações do menu no desktop */

    #menu-items{
        position: fixed;
        top: 0;
        right: 0;
        background-color: var(--color-background-nav);
        width: 60%;
        height: 100vh;
        display: none;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
     }
        #menu-items.active{
            display: flex;
        }
    /* Configurações de itens da lista no desktop */

     ul{
            list-style: none;
            text-align: center;
     }
        ul li{
            margin: 20px 0;
        }
     ul li a{
        color: var(--color-text-light);

     }
   
     /* Configurações do estilo para telas maiores */

    @media(min-width: 700px){
        #menu-button,
        #menu-logo,
        #menu-overlay{
            display: none;
        }
        #menu-items{
            display: flex;
            position: static;
            height: 60px;
            width: auto;
        }
        ul{
            display: flex;
            flex-direction: row;
            height: 60px;
            align-items: center;
        }
        ul li{
            margin: 0 ;
            margin-left: 20px;
        }

    }
    .topImg {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 15px;
        cursor: pointer;
      }
      /* Configurações do estilo para telas menores */
      @media(max-width: 700px){
        #logo {
          display: block;
        }
        #menu-button {
          order: 1;
          margin-right: 10px;
        }
        #menu-items {
          order: 2;
        }
        nav {
          justify-content: space-between;
        }
        
      }
      
      .image-searche-top {
        width: 10vw;
        display: flex;
        align-items: center;
        justify-content: space-around;
      }
  
      

`;

export default StyledTopBar;
