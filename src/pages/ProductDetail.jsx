import {  Link, useParams } from "react-router-dom"

const ProductDetail=()=>{
   const params= useParams()
    return(
        <h2 ><Link to="/products/:productId/details"> Product Details page <br/>Product Name {params.productId} </Link> </h2>
    )
}
export default ProductDetail;