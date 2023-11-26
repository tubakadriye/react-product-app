//rafce

import { useParams } from "react-router-dom"

const ProductDetailsPage = () => {

    const params = useParams();
    //const {productId} =params;
    //console.log(productId);
    console.log(params); // id=3 comes from app.jsx path :id
  return (
    <div>ProductDetailsPage</div>
  )
}

export default ProductDetailsPage