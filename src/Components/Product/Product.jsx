import style from './style.module.scss'
import ProductItem from '@components/Product/ProductItem/ProductItem.jsx'
import { useEffect, useState } from 'react'
import axiosInstance from '@/API/api.js'

const Product = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const fetchingProduct = async () => {
            setLoading(true)
            try {
                const res = await axiosInstance.get('product')
                const result = res.data.contents
                console.log(result)
                setProducts(result)
            } catch (error) {
                console.log('Error fetching products')
            } finally {
                setLoading(false)
            }
        }
        fetchingProduct()
    }, [])

    return (<div className={style.containerGlobal}>
        <div className={style.product_header}>
            <p className={style.product_offer}>DON'T MISS SUPER OFFERS</p>
            <h1 className={style.product_title}>Our best products</h1>
        </div>

        {loading && <div>Loading.....</div>}

        <div className={style.product_sale}>

        </div>
        <div className={style.product_List}>
            {!loading && products?.map((product) => (<ProductItem
                key={product.id}
                name={product.name}
                price={product.price}
                images={product.images}
            />))}
        </div>
    </div>)
}

export default Product
