import React , { useContext ,useEffect}from 'react'
import {  GlobalContext } from '../../context/GlobalState'


export const ProductView = () => {
    const { products,getProducts } = useContext(GlobalContext)
    console.log(products)
    useEffect(() => {
        getProducts()
    },[])
    return (
        <section>
            {
                products.map(product => (
                    <div>
                        <h1>{product.name}</h1>
                        <p>{product.price}</p>
                        
                    </div>
                ))
            }
            {!products && <div>hry</div>}
            <h1>Home</h1>
        </section>
    )
}