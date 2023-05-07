import styled from "styled-components";
const StyledMain = styled.main`
// background-color: var(--color-background-home);
// justify-content: center;
// align-items: center;

// .text-top{
//     color: var(--color-text-top);
//     font-size: 2.5rem;
//     margin-botton: 2rem;
// }
// .text-bottom{
//     color: var(--color-text-bottom);
//     font-size: 2.5rem;
//     margin-top: 2rem;
// }

.header{
    margin-top: 60px;
}
.headerTitles{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Lora', serif;
    color: #444
  
}

.headerTitleSm{
    position: absolute;
    top: 18%;
    font-size:18px;
}

.headerTitleLg{
    position: absolute;
    top: 20%;
    font-size: 100px;

}
.headerImg{
    width: 100%;
    height: 450px;
    margin-top: 80px;
    object-fit: cover;


}

`;

export default StyledMain;
