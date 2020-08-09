import React , { useContext }from 'react'
import {  GlobalContext } from '../../context/GlobalState'


export const ProductView = () => {
    const { products } = useContext(GlobalContext)
    console.log(products)
    return (
        <section>
            {
                products.map(product => (
                    <div>
                        <h1>{product.name}</h1>
                    </div>
                ))
            }
            {!products && <div>hry</div>}
            <h1>Home</h1>
        </section>
    )
}