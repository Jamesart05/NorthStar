import { StarIcon as StarSolid } from "@heroicons/react/24/solid";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";
import { useParams } from 'react-router'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from "../redux/cartSlice";
import { Products } from "../data/products";
import { ToastContainer, toast } from 'react-toastify';

const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const totalStars = 5;

    return (
        <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
            <StarSolid key={`full-${i}`} className="w-5 h-5 text-amber-500" />
        ))}
        {hasHalfStar && <HalfStarIcon className="w-5 h-5 text-amber-500" />}
        {[...Array(totalStars - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
            <StarOutline key={`empty-${i}`} className="w-5 h-5 text-gray-300" />
        ))}
        </div>
    );
};


const ProductDetails = () => {
    const [cartBtn, setCartBtn] = useState("ADD TO CART")
    const [qty, setQty] = useState(1)
    {/* Now we need a product id which is passed from the product page. */}
    const proid = useParams();
    const proDetail = Products.filter(x=> x.id == proid.id)
    const product = proDetail[0];
    const dispatch = useDispatch()

    const handleCart = (product) => {
        if (cartBtn === "ADD TO CART") {
            dispatch(addToCart(product))
            setCartBtn("REMOVE FROM CART")
        }
        else{
            dispatch(removeFromCart(product))
            setCartBtn("ADD TO CART")
        }
        toast("Product added to cart!");
    }

    const [price, setPrice] = useState(product.price)

    const increment = (product) => {
        product.quantity += 1
        setQty(product.quantity)
        setPrice(prev => Math.round(prev + product.price))
    }

    const decrement = (product) => {
        if(qty > 0){
            product.quantity -= 1
            setQty(product.quantity)
        }else{
            setQty(0)
        }
        setPrice(prev => Math.round(prev - product.price))
    }

    return(
        <>
            <main className="w-screen p-8 lg:p-20 lg:pr-40 lg:flex gap-12">
                <div className="relative w-full lg:w-1/2 lg:h-[50rem]  lg:p-4">
                    <img className="w-full h-full" src={product.image} alt={product.name} />
                    <p className="absolute top-16 left-16 bg-amber-600 text-white font-bold w-fit px-1 py-2 rounded-[3rem]">-24%</p>
                </div>
                <div className="lg:w-1/2">
                    <h1 className="text-4xl font-bold my-6">{product.name}</h1>
                    <div className="flex gap-1">
                        <StarRating rating={4} />
                        <p className="text-[.8rem]">(15)</p>
                    </div>
                    <div className="relative my-6">
                        <p className="text-2xl text-gray-400">${product.price} <span className="text-cyan-900 px-4" >${price.toFixed(2)}</span></p>
                        <span className="absolute w-18 h-[.1rem] top-[1.1rem] bg-gray-400"></span>
                    </div>
                    <p className="text-[1.1rem] text-gray-600">{product.description}.</p>
                    <div className="flex items-center gap-5 my-6 mb-12">
                        <button onClick={()=>{increment(product)}} className="border px-4 py-1 text-[1.4rem] flex items-center justify-center rounded cursor-pointer hover:bg-black hover:text-white">+</button>
                        <p className="text-[1.4rem]">{qty}</p>
                        <button onClick={()=>{decrement(product)}} className="border px-4 py-1 text-[1.4rem] flex items-center justify-center rounded cursor-pointer hover:bg-black hover:text-white">-</button>
                    </div>
                    <a onClick={()=>handleCart(product)} className="bg-cyan-800 text-white px-8 py-4 font-medium hover:bg-white hover:text-cyan-950 hover:border y-16 cursor-pointer" >{cartBtn}</a>
                    <ToastContainer />
                </div>
            </main>
        </>
    )
}

export default ProductDetails