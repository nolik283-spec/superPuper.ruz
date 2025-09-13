import React from 'react'
import { useParams } from 'react-router'
import { useProducts } from '../hooks/products'
import { Product } from '../components/product'

export const ProductPage = () => {
    const { id } = useParams()
    const { dataProduct } = useProducts(id)
    return (
        <Product data={dataProduct} />
    )
}
