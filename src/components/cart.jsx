import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from "../redux/cartSlice";
import { useEffect, useState } from "react";
// import { ToastContainer, toast } from 'react-toastify';

const Cart = () => {
    const [total, setTotal] = useState(0)
    const state = useSelector((state)=> state.cart.cartItems)
    const dispatch = useDispatch()

    const handleClose = (item) => {
        dispatch(removeFromCart(item))
    }

    const cartItemss = (cartItem) => {
        return(
            <tr key={cartItem.id} className="border-b-[.2px] border-gray-300 h-[6rem]">
                <td className="text-[1.1rem] font-bold text-gray-600">{cartItem.name}</td>
                <td className="hidden lg:block pt-8 text-[1.2rem] text-gray-600">${cartItem.price}</td>
                <td className="text-[1.4rem] text-gray-600">{cartItem.quantity}</td>
                <td className="text-[1.2rem] text-gray-600">${(cartItem.price * cartItem.quantity).toFixed(2)}</td>
                <td ><img onClick={() => {handleClose(cartItem)}} className="w-[2rem] cursor-pointer hover:transition-shadow" src="/src/assets/cancel.png" alt="" /></td>
            </tr>
        );
    }

    useEffect(() => {
        const total = state.reduce((acc, item) => acc + (item.price * item.quantity ) , 0);
        setTotal(total.toFixed(2));
    }, [state]);
    
    const emptyCart = () => {
        <tr className="border-b-[.2px] border-gray-300 h-[6rem]">
            <td className="text-[1.1rem] font-bold text-gray-600">
                <div className="w-full flex items-center justify-center">
                    <h1>Your cart is empty</h1>
                </div>
            </td>
        </tr>
    }

    // const notify = () => toast("Product added to cart!");
    
    return(
        <>
            <main className="p-4 lg:p-20 lg:pt-10">
                <div className="flex">
                    <Link className="text-[1.1rem] text-gray-500 hover:text-black" to="/">HOME</Link>
                    <span className="px-1 text-gray-500">/</span>
                    <Link className="text-[1.1rem]" to="/cart">SHOPPING CART</Link>
                </div>
                <table className="w-full text-left my-24">
                    <tr className="border-b-[.2px]  border-gray-300 h-[5rem]">
                        <th className="text-2xl font-medium">Product</th>
                        <th className="hidden lg:block  text-2xl pt-8 font-medium">Price</th>
                        <th className="text-2xl font-medium">Quantity</th>
                        <th className="text-2xl font-medium">Total</th>
                        <th></th>
                    </tr>
                    {state.length === 0 && emptyCart()}
                    {state.length !== 0 && state.map(cartItemss)}
                </table>
                <h1 className="text-4xl font-medium mb-8">Cart Totals</h1>
                <div className="lg:w-2/5 flex justify-between border-b-[.2px] border-gray-300 py-4">
                    <p className="text-[1.2rem] text-gray-600">Shipping Fee</p>
                    <p className="text-[1.2rem] text-gray-600">FREE!!!</p>
                </div>
                <div className="lg:w-2/5 flex justify-between border-b-[.2px] border-gray-300 py-4 mb-12">
                    <p className="text-[1.2rem] text-gray-600">Total</p>
                    <p className="text-[1.2rem] text-gray-600">${total}</p>
                </div>
                <Link className="bg-amber-600 text-white py-5 px-10 text-[1.2rem] hover:bg-amber-800" to="/checkout"> PROCEED TO CHECKOUT</Link>
            </main>
        </>
    )
}

export default Cart