import React, { useEffect, useState } from 'react'
import Card from './Card'
import productServices from '../components/productServices'

function Categories() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        //fetching all the products using product services
        productServices.getAll().then((response) => {
            setProducts(response.data)
            console.log(response.data)
        }).catch((error) => {
            console.log("Error fetching the data");
        })
    }, [])

    return (
        <div className='text-center'>
            <h1 className='p-4'>Categories</h1>
            <div className='container d-flex flex-wrap justify-content-evenly gap-4'>
                {products.map((product) => (
                    <Card key={product.id} product={product} />
                ))}
            </div>

        </div>
    )
}

export default Categories