import styled from "styled-components";

const StyledHeader = styled.header`
  background-color:  var(--color-background-nav);
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    #logo{
        width: 100px;
        height: 60px;

    }
    #menu-button{
        width: 30px;
    }
    #menu-overlay{
        position: fixed;
        top: 0;
        left: 0;
        width: 40%;
        height: 100vh;
        background-color: var(--color-text-dark);
        opacity: 0.8;

    }
    #menu-logo{
        width: 110px;    
        margin-top: 30px;  
        margin-bottom: 10px;

    }
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

    nav{
        display: flex;
        justify-content: space-between;
        height: 60px;
        align-items: center;

    }

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

export default StyledHeader;
