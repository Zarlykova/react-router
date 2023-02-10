import {  Outlet, useNavigate,} from "react-router-dom";
import styled from "styled-components";
import { Button } from "../UI/Button"



const Products = ()=>{
      
    const navigate =useNavigate()
    
    return(
        <Card>
            <StyledDiv>
                <h2>Product Name 1 </h2>
                <Button onClick = {()=>navigate("/products/:productId/details")} > Detail</Button>

            </StyledDiv>
            <StyledDiv>
                <h2> Product Name 2 </h2>
                <Button onClick = {()=>navigate("/products/:productId/details")} > Detail</Button>
            

            </StyledDiv>
            
            <Details>
              <Outlet/>
            </Details>
            <Button onClick = {()=>navigate("/products")}>Go Back</Button>
        </Card>
        
    )
}
export default Products;

const Card=styled.div`
    background-color: cornflowerblue;
    width: 45rem;
   margin-left: 23rem;
   margin-top:2rem;
   padding: 1.5rem;
   border-radius: 2rem;
`
const StyledDiv= styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
`

const Details = styled.div`
padding: 2rem;
margin-top: 2rem;
background-color: cornflowerblue;
border-top:2px solid white;
text-align: center;

`