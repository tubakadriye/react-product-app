import { Card } from "react-bootstrap";

// we destruct the product. we can use props
// const product = props 
const ProductCard = ({product}) => { 
  return (
    <Card className='h-100'>
                <Card.Img height = {200} 
                className='object-fit-cover'
                src={product.images[0]}/>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <h5>Price: ${product.price}</h5>
                </Card.Footer>
            </Card>
  )
}

export default ProductCard;