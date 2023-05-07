import styled from "styled-components";
const StyledHeader = styled.header`


.header{
    margin-top: 90px;
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
    top:10%;
    font-size:20px;
}

.headerTitleLg{
    position: absolute;
    top: 16%;
    font-size: 100px;

}
.headerImg{
    width: 100%;
    height: 450px;
    margin-top: 108px;
    object-fit: cover;


}

`;

export default StyledHeader;
