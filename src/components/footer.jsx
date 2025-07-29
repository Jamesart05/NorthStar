import img1 from "/src/assets/visa.png"
import img2 from "/src/assets/mastercard.png"
import img3 from "/src/assets/paypal.png"
import img4 from "/src/assets/visa2.png"
import img5 from "/src/assets/arrow.png"

const Footer = () => {
    return (
        <>
            <footer className="w-full h-[32rem] flex flex-col justify-between mt-20 border-t-2 border-gray-300 px-8 lg:px-20 py-10">
                <div className="w-full flex flex-wrap lg:gap-0 justify-between mb-8">
                    <div className="mb-12 lg:mb-0 flex items-center lg:items-start w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-col gap-1">
                        <p className="font-[500] mb-3">COMPANY INFO</p>
                        <a className="cursor-pointer block hover:text-cyan-800 hover:font-medium">About Us</a>
                        <a className="cursor-pointer block hover:text-cyan-800 hover:font-medium">Latest Posts</a>
                        <a className="cursor-pointer block hover:text-cyan-800 hover:font-medium">Contact Us</a>
                        <a className="cursor-pointer block hover:text-cyan-800 hover:font-medium">Shop</a>
                    </div>
                    <div className="mb-12 lg:mb-0 flex items-center lg:items-start w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-col gap-1">
                        <p className="font-[500] mb-3">HELP LINKS</p>
                        <a className="cursor-pointer block hover:text-cyan-800 hover:font-medium">Tracking</a>
                        <a className="cursor-pointer block hover:text-cyan-800 hover:font-medium">Order Status</a>
                        <a className="cursor-pointer block hover:text-cyan-800 hover:font-medium">Delivery</a>
                        <a className="cursor-pointer block hover:text-cyan-800 hover:font-medium">Shipping Info</a>
                        <a className="cursor-pointer block hover:text-cyan-800 hover:font-medium">FAQ</a>
                    </div>
                    <div className="mb-12 lg:mb-0 flex items-center lg:items-start w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-col gap-1">
                        <p className="font-[500] mb-3">USEFUL LINKS</p>
                        <a className="cursor-pointer block hover:text-cyan-800 hover:font-medium">Special Offers</a>
                        <a className="cursor-pointer block hover:text-cyan-800 hover:font-medium">Gift cards</a>
                        <a className="cursor-pointer block hover:text-cyan-800 hover:font-medium">Advertising</a>
                        <a className="cursor-pointer block hover:text-cyan-800 hover:font-medium">Terms of Use</a>
                    </div>
                    <div className="mb-12 lg:mb-0 w-full flex flex-col justify-center items-center lg:items-start sm:w-1/2 md:w-1/3 lg:w-1/4">
                        <p className="font-[500] text-center">GET IN THE KNOW</p>
                        <div className="flex gap-2">
                            <input className="w-[16rem] lg:w-full border-b py-3 px-8 my-4 placeholder:text-gray-600" type="email" placeholder="Enter email" />
                            <button type="submit" className="cursor-pointer"><img src={img5} className="h-6 hover:border" alt="submit" /></button>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-wrap gap-4 text-center lg:gap-0 justify-center lg:justify-between border-t border-gray-400 py-8">
                    <div>
                        <p className="font-medium">© 2020 NorthStar eCommerce.</p>
                        <p className="font-medium hover:cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-gray-600">Privacy Policy <span className="ml-3">terms of Service</span></p>
                    </div>
                    <div className="hidden lg:flex">
                        <img className="w-[4rem]" src={img1} alt="visa" />
                        <img className="w-[5rem]" src={img2} alt="mastercard" />
                        <img className="w-[5rem]" src={img3} alt="paypal" />
                        <img className="w-[5rem]" src={img4} alt="visa services" />
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;