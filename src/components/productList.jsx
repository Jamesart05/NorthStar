import { Products } from "../data/products"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const ProductList = () => {
    return(
        <>
            <main className="w-screen py-16 px-8">
                <h1 className="text-center mb-4 text-4xl font-medium">Discover NEW arrivals</h1>
                <h4 className="text-center mb-24 text-[1.2rem]">Recently added shirts</h4>
                <div className="w-full flex flex-wrap gap-16 lg:gap-6 items-center justify-center">
                    {Products.map(product => {
                        
                        return(
                            <Link to={`/product-details/${product.id}`} className="w-full lg:w-[21.5%] flex flex-col items-center justify-center cursor-pointer hover:shadow-2xl transition-shadow" key={product.id}>
                                <img className="w-full" src={product.image} alt={product.name} />
                                <p className="font-bold mt-4 border-b-[1px] border-transparent hover:border-b-[1px] hover:border-black transition ease-in">{product.name}</p>
                                <p className="text-[1.1rem] text-cyan-800 mt-2 mb-6 border-b-[1px] border-transparent hover:border-b-[1px] hover:border-cyan-700 transition ease-in">${product.price}</p>
                            </Link>
                        )
                    })}
                </div>
            </main>
        </>
    )
}

export default ProductList