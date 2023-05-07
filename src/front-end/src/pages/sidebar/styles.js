import styled from "styled-components";

const StyledSideBar = styled.main`

.sidebar{
   flex: 3;
   marrgin: 20px;
   padin-bottom: 20px;
   background-color: #fdfbfb;
   border-radius: 10px;
   display: flex;
    flex-direction: column;
    align-items: center;
}
.sidebarItem{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.sidbarTitle{
    margin: 10px;
    padding: 5px;
    width: 80%;
    border-top: 1px solid  #a7a4a4;
    border-bottom: 1px solid  #a7a4a4;
    font-family: 'Varela Round', sans-serif;
    font-size: 12px;
    color: #222;
    fotn-weight: 600;
    line-height: 20px;
    text-align: center;


}
.sidebarItem > img{
    margin-top: 15px;

}
.sidebarItem > p {
    padding: 30px;

}
.sidebarList{
    list-style: none;
    margin-bottom: 30px;

}
.sidebarListItem{
    display: inline-block;
    width: 50%;
    margin-top: 15px;
    cursor: pointer;

}

.sidebarSocial{
    margin-top: 15px;
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;



}

.sidebarIcon{
    font-size: 16px;
    margin-left: 15px;
    cursor: pointer;
}



`;

export default StyledSideBar;