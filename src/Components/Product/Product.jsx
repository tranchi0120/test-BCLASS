import style from './style.module.scss'
import ProductItem from '@components/Product/ProductItem/ProductItem.jsx'
import { useEffect } from 'react'
import axiosInstance from '@/API/api.js'

const Product = () => {
    useEffect(() => {
        const fetchingProduct = async () => {
            try {
                const res = await axiosInstance.get("product")
                const { data } = res
                console.log({ data })
            } catch (error) {
                console.error("Error fetching products:", error)
            }
        }
        fetchingProduct()
    }, [])

    return (
        <div className={style.containerGlobal}>
            <div className={style.product_header}>
                <p className={style.product_offer}>DON'T MISS SUPER OFFERS</p>
                <h1 className={style.product_title}>Our best products</h1>
            </div>

            <ProductItem />
        </div>
    )
}

export default Product
