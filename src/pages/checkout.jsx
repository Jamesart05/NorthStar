import { Link } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
import { clearCart } from "../redux/cartSlice";
import { useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';

const Checkout = () => {
    const dispatch = useDispatch()
    const state = useSelector((state)=> state.cart.cartItems)
    const [total,setTotal] = useState(0)
    const [style, setStyle] = useState('')
    const open = 'absolute w-screen h-screen bg-[rgba(0,0,0,0.4)] top-27 left-0 flex justify-end'
    const hidden = 'hidden'
    useEffect(() => {
        setStyle(hidden)
    }, [])

    const toggle = () => {
        clearTimeout(checkOut)
    }

    const check = () => {
        if(style === mobile){
            setStyle(hidden)
        }else{
            setStyle(open)
        }
        toggle
    }

    const checkOut = setTimeout(() => {
        toggle()
    }, 5000)

    useEffect(() => {
        const total = state.reduce((acc, item) => acc + (item.price * item.quantity ) , 0);
        setTotal(total.toFixed(2));
    }, [state]);

    const notify = () => {
        toast("Order PLaced Successfully!");
        dispatch(clearCart())
    }    

    return(
        <>
            <main className="pt-10 px-4 lg:p-20">
                <div className="flex">
                    <Link className="text-[1.1rem] text-gray-500 hover:text-black" to="/">HOME</Link>
                    <span className="px-1 text-gray-500">/</span>
                    <Link className="text-[1.1rem]" to="/checkout">CHECKOUT</Link>
                </div>
                <h1 className="text-4xl font-bold mt-8">Shipping details</h1>
                <form action="" className="flex flex-col lg:w-1/2 mt-6 mb-12">
                    <label className="text-[1.1rem] text-gray-600 relative" htmlFor="">Full Name <span className="absolute text-red-700 text-[1.2rem]">*</span></label>
                    <input type="text" className="border border-gray-300 w-full p-3 my-1 mb-5"/>
                    <label className="text-[1.1rem] text-gray-600 relative" htmlFor="">Street address <span className="absolute text-red-700 text-[1.2rem]">*</span></label>
                    <input type="text" className="border border-gray-300 w-full p-3 my-1 mb-5"/>
                    <label className="text-[1.1rem] text-gray-600 relative" htmlFor="">Town / City<span className="absolute text-red-700 text-[1.2rem]">*</span></label>
                    <input type="text" className="border border-gray-300 w-full p-3 my-1 mb-5"/>
                    <label className="text-[1.1rem] text-gray-600 relative" htmlFor="">Phone <span className="absolute text-red-700 text-[1.2rem]">*</span></label>
                    <input type="number" className="border border-gray-300 w-full p-3 my-1 mb-5"/>
                    <label className="text-[1.1rem] text-gray-600 relative" htmlFor="">Email address<span className="absolute text-red-700 text-[1.2rem]">*</span></label>
                    <input type="email" className="border border-gray-300 w-full p-3 my-1 mb-5"/>
                </form>
                <h1 className="text-4xl font-bold my-8">Your order </h1>
                <div className="w-full border border-gray-300 border-b-0">
                    <div className="border-b border-gray-300 px-3 py-4 flex">
                        <p className="w-1/2 font-bold">Product</p>
                        <p className="font-bold text-gray-600">Total</p>
                    </div>
                    {state.length !== 0 && state.map((cartItem) => {
                        return(
                            <div className="border-b border-gray-300 px-3 py-4 flex">
                                <p className="w-1/2 text-[1.1rem] text-gray-500">{cartItem.name}</p>
                                <p className="text-[1.1rem] text-gray-600">${cartItem.quantity * cartItem.price}</p>
                            </div>
                        )
                    })}
                    <div className="border-b border-gray-300 px-3 py-4 flex">
                        <p className="w-1/2 text-[1.1rem] text-gray-500">Total</p>
                        <p className="text-[1.1rem] text-gray-600">${total}</p>
                    </div>
                </div>
                <div className="w-full border border-gray-300 p-8 my-12">
                    <div className="w-full bg-gray-100 p-6 border border-gray-300">
                        <p className="text-[1.1rem]">Cash on delivery. Please contact us if you require assistance or wish to make alternate arrangements.</p>
                    </div>
                    <div className="flex justify-end mt-12">
                        <button onClick={notify} className="bg-amber-600 text-white py-3 px-4 text-[1.2rem] hover:bg-amber-800 cursor-pointer">PLACE ORDER</button>
                        <ToastContainer />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Checkout