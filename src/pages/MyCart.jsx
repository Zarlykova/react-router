import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../UI/Button";

const MyCart = ()=>{
    const navigate =useNavigate()
    return(
        <Card>
            <Div>
                 <h3>My Cart page blaa blaa blaa </h3>
            </Div>
           
            <Button onClick = {()=>navigate("/products")}>Go Back</Button>
        </Card>
        
    )
}
export default MyCart;
const Card=styled.div`
    background-color: cornflowerblue;
    width: 45rem;
   margin-left: 23rem;
   margin-top:2rem;
   padding: 1.5rem;
   border-radius: 2rem;
`
const Div=styled.div`
    margin-bottom: 2rem;
`