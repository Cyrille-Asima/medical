
import {Row, Col} from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom'
import Product from '../components/Product'
import Paginate from '../components/Paginate'
import { useGetProductsQuery } from '../slices/productsApiSlice'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Meta from '../components/Meta'
import ProductCarousel from '../components/ProductCarousel'


const HomeScreen = () => {

    const {pageNumber, keyword} = useParams()

    const {data, isLoading, error} = useGetProductsQuery({keyword, pageNumber})

    return (
    <>
        {!keyword ? <ProductCarousel/> : (
        <Link to='/' className='btn btn-light mb-4' >Go Back</Link>)}


        {isLoading ? (
            <Loader/>
        ) : error ? (
        <Message varian='danger'>{error?.data?.message || error.error}</Message>
        ) : (<>

            <Meta title='Welcome to MedVice'/>
            <h1> Latest Products</h1>
            <Row>
                {data.products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
                ))}
            </Row>
            <Paginate pages={data.pages}page={data.page} keyword = {keyword ? keyword : ''}/>
        </>
        ) }
    </>

    )
}

export default HomeScreen 