import { faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'

import Modal, { ModalStatus } from '../components/Modal'
import PageNav from '../components/PageNav'
import Product from '../components/Product'
import Grid from '../layouts/Grid'
const apiUrl = process.env.REACT_APP_API_URL

export type ProductType = {
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: Array<string>
}

function Store() {
    // State
    const [modalStatus, setModalStatus] = useState<ModalStatus>({ visible: false })
    const [products, setProducts] = useState<Array<ProductType>>([])

    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(30)
    const [productTotal, setTotal] = useState(0)

    // Hooks
    useEffect(() => setPage(1), [limit])
    useEffect(() => {
        const fetchProducts = async (loadPage: number) => {
            setProducts([])
            const productData = await fetch(
                `${apiUrl}/products/?limit=${limit}&skip=${(loadPage - 1) * limit}`
            ).then((res) => res.json())
            setTotal(productData.total)
            setProducts(productData.products as Array<ProductType>)
        }
        fetchProducts(page)
    }, [page, limit])

    // Render
    return (
        <>
            <Modal status={modalStatus} setStatus={setModalStatus} />
            <br />

            {products.length > 0 ? (
                <>
                    <PageNav
                        pageState={[page, setPage]}
                        limitState={[limit, setLimit]}
                        total={productTotal}
                    />
                    <Grid>
                        {products.map((product: ProductType) => {
                            const props = { setModalStatus: setModalStatus, details: product }
                            return <Product {...props} key={product.id.toString()} />
                        })}
                    </Grid>
                    <PageNav
                        pageState={[page, setPage]}
                        limitState={[limit, setLimit]}
                        total={productTotal}
                    />
                </>
            ) : (
                <h2
                    style={{
                        height: '600px',
                        lineHeight: '600px',
                        width: 'max-content',
                        margin: 'auto'
                    }}
                >
                    <FontAwesomeIcon icon={faCog} spin />
                </h2>
            )}
        </>
    )
}

export default Store
