import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../products'
import{Link} from 'react-router-dom'
import{Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import Rating from '../components/Rating'

const ProductScreen = () => {

    const {id:productID} = useParams()
    const product = products.find((p) =>p._id === productID)

    return (
        <>
            <Link className='btn btn-light my-3' to="/">Go Back</Link>

            <Row>
                <col md={5}>
                    <Image src={product.image} alt={product.name} fluid/>
                </col>
                <col md={4}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup>
                            <Rating value={product.rating} text={`${product.numReviews}reviews`}/>
                        </ListGroup>
                    </ListGroup>
                </col>
                <col md={3}></col>
            </Row>
        </>
    )
}

export default ProductScreen