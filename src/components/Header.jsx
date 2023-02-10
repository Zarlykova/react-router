
import styled from "styled-components";

import { NavLink} from "react-router-dom";
import { hover } from "@testing-library/user-event/dist/hover";

const Header = ()=>{
   
    
    return(
        <StyledHeader>
            <h3>LOGO</h3>
            <NavList>
                <li><NavLink style={{listStyle:"none",textDecoration:"none",color:"white"}} to="/products" >Products </NavLink> </li> 
                <li> <NavLink style={{listStyle:"none",textDecoration:"none",color:"white"}} to="/myCart" >My Cart </NavLink> </li>
                <li><NavLink style={{listStyle:"none",textDecoration:"none",color:"white"}} to="/myOrders" >My Orders </NavLink> </li> 
            </NavList>
       
        
        </StyledHeader>
    )
}

export default Header;


const StyledHeader = styled.header`
    background-color: #50c2ff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    font-size: 1.5rem;
    
`

const NavList = styled.ul`
list-style: none;
display: flex;
gap:30px;
color: white;
font-size: 25px;
cursor: pointer;


`
