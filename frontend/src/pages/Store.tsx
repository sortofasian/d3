import { ReactNode, useEffect, useState } from 'react'

import Modal, { ModalStatus } from '../components/Modal'
import Navbar from '../components/Navbar'
import Product from '../components/Product'
import Grid from '../layouts/Grid'
const apiUrl = process.env.REACT_APP_API_URL

export type ProductData = {
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
    const [modalStatus, setModalStatus] = useState<ModalStatus>({
        visible: false
    })
    const [products, setProducts] = useState<ReactNode>()

    useEffect(() => {
        const fetchProducts = async () => {
            const productData = (await fetch(`${apiUrl}/products`).then((res) => res.json()))
                .products as Array<ProductData>

            const productElements: Array<ReactNode> = [<></>]
            productData.forEach((product: ProductData) => {
                productElements.push(<Product setModalStatus={setModalStatus} details={product} />)
            })

            setProducts(productElements)
        }

        fetchProducts()
    }, [])

    useEffect(() => console.log(products), [products])

    return (
        <>
            <Navbar />
            <Modal status={modalStatus} setStatus={setModalStatus} />
            <br />
            <Grid>{products}</Grid>
        </>
    )
}

export default Store
