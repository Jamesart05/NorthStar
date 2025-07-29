import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const Navbar = () => {
    const state = useSelector((state)=> state.cart.cartItems)
    const [style, setStyle] = useState('')
    const [style1, setStyle1] = useState('')
    const mobile = 'absolute w-screen h-screen bg-[rgba(0,0,0,0.4)] top-27 left-0 flex justify-end'
    const hidden = 'hidden'
    const open = 'bg-[url(/src/assets/hamburger.png)]'
    const close = 'bg-[url(/src/assets/close.png)]'

    useEffect(() => {
        setStyle(hidden)
        setStyle1(open)
    }, [])

    const toggle = () => {
        if(style === mobile){
            setStyle(hidden)
            setStyle1(open)
        }else{
            setStyle(mobile)
            setStyle1(close)
        }
    }


    return (
        <nav className="relative w-screen h-24 flex items-end px-8 lg:px-20 pt-21 pb-6 justify-between">
            <div className={style}>
                <div className="w-[72vw] h-[60vh] bg-cyan-900 text-white p-6 flex flex-col items-center gap-8">
                    <Link onClick={toggle} className="w-full text-center font-medium p-3 border-b text-2xl hover:font-bold" to="/">Home</Link>
                    <Link onClick={toggle} className="w-full text-center font-medium p-3 border-b text-2xl hover:font-bold" to="/about">About</Link>
                    <Link onClick={toggle} className="w-full text-center font-medium p-3 border-b text-2xl hover:font-bold" to="/contact">Contact us</Link>
                </div>
            </div>
            <div className="flex items-end gap-[16rem]">
                <Link to="/"><h2 className="text-4xl cursor-pointer">NorthStar</h2></Link>
                <div className="hidden lg:flex gap-12">
                    <Link className="font-medium hover:text-cyan-900 hover:font-bold" to="/">Home</Link>
                    <Link className="font-medium hover:text-cyan-900 hover:font-bold" to="/about">About</Link>
                    <Link className="font-medium hover:text-cyan-900 hover:font-bold" to="/contact">Contact us</Link>
                </div>
            </div>
            <div className="flex items-end gap-8">
                <img className="cursor-pointer" src="/src/assets/user.png" alt="user" />
                <Link className="relative" to="/cart"><img className="cursor-pointer" src="/src/assets/cart.png" alt="cart" /> <span className="absolute top-[-6px] right-[-6px] w-4 h-4 rounded-full bg-cyan-800 text-white text-[.8rem] flex items-center justify-center">{state.length}</span></Link>
                <div onClick={toggle} className={`w-[1.8rem] h-[1.8rem] ${style1} bg-cover bg-center cursor-pointer`}>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;