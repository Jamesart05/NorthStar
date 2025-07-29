import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import img1 from '/src/assets/cart.png'
import img2 from '/src/assets/user.png'
import img3 from '/src/assets/hamburger.png'
import img4 from '/src/assets/close.png'

const Navbar = () => {
    const state = useSelector((state)=> state.cart.cartItems)
    const [style, setStyle] = useState('')
    const [style1, setStyle1] = useState('')
    const mobile = 'absolute w-screen h-screen bg-[rgba(0,0,0,0.4)] top-27 left-0 flex justify-end z-99'
    const hidden = 'hidden'
    const open = img3
    const close = img4

    useEffect(() => {
        setStyle(hidden)
        setStyle1(img3)
    }, [])

    const toggle = () => {
        if(style === mobile){
            setStyle(hidden)
            setStyle1(img3)
        }else{
            setStyle(mobile)
            setStyle1(img4)
        }
    }


    return (
        <nav className="relative w-screen max-h-12 lg:h-24 flex items-end px-4 lg:px-20 pt-21 pb-6 justify-between">
            <div className={style}>
                <div className="w-[96vw] h-[100vh] bg-cyan-900 text-white p-6 flex flex-col items-center gap-8">
                    <Link onClick={toggle} className="w-full text-center font-medium p-3 border-b text-2xl hover:font-bold" to="/">Home</Link>
                    <Link onClick={toggle} className="w-full text-center font-medium p-3 border-b text-2xl hover:font-bold" to="/about">About</Link>
                    <Link onClick={toggle} className="w-full text-center font-medium p-3 border-b text-2xl hover:font-bold" to="/contact">Contact us</Link>
                </div>
            </div>
            <div className="flex items-end gap-[16rem]">
                <Link to="/"><h2 className="text-3xl lg:text-4xl cursor-pointer">NorthStar</h2></Link>
                <div className="hidden lg:flex gap-12">
                    <Link className="font-medium hover:text-cyan-900 hover:font-bold" to="/">Home</Link>
                    <Link className="font-medium hover:text-cyan-900 hover:font-bold" to="/about">About</Link>
                    <Link className="font-medium hover:text-cyan-900 hover:font-bold" to="/contact">Contact us</Link>
                </div>
            </div>
            <div className="flex items-end gap-4 lg:gap-8">
                <img className="cursor-pointer" src={img2} alt="user" />
                <Link className="relative" to="/cart"><img className="cursor-pointer" src={img1} alt="cart" /> <span className="absolute top-[-6px] right-[-6px] w-4 h-4 rounded-full bg-cyan-800 text-white text-[.8rem] flex items-center justify-center">{state.length}</span></Link>
                <div className="block lg:hidden">
                    <div 
                        onClick={toggle} 
                        style={{ backgroundImage: `url(${style1})` }}
                        className={`w-[1.8rem] h-[1.8rem] bg-cover bg-center cursor-pointer`}
                    ></div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;