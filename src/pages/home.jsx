import Hero from "../components/hero";
import ProductList from "../components/productList";
import { Link } from "react-router-dom";
import { Products } from "../data/products";

const Home = () => {
    const arr = Products.filter(product => product.id >= 9)

    return (
        <div className="w-full">
            <Hero/>
            <ProductList/>
            <section className="w-full px-8 lg:px-20 flex flex-wrap items-center justify-between my-24">
                <div className="w-1/2 lg:w-1/5 flex items-start gap-6">
                    <img src="/src/assets/shipping.png" alt="shipping" />
                    <div>
                        <p className="font-extrabold text-[1rem]">FREE SHIPPING</p>
                        <p className="text-[1.1rem] my-2 text-gray-700">Enjoy free shipping on all orders above $100</p>
                    </div>
                </div>
                <div className="w-1/2 lg:w-1/5 flex items-start gap-6">
                    <img src="/src/assets/support.png" alt="support" />
                    <div>
                        <p className="font-extrabold text-[1rem]">SUPPORT 24/7</p>
                        <p className="text-[1.1rem] my-2 text-gray-700">Our support is there to help you for queries</p>
                    </div>
                </div>
                <div className="w-1/2 lg:w-1/5 flex items-start gap-6">
                    <img src="/src/assets/return.png" alt="return" />
                    <div>
                        <p className="font-extrabold text-[1rem]">30 DAYS RETURN</p>
                        <p className="text-[1.1rem] my-2 text-gray-700">Simply return it within 30 days for an exchange</p>
                    </div>
                </div>
                <div className="w-1/2 lg:w-1/5 flex items-start gap-6">
                    <img src="/src/assets/secure.png" alt="secure" />
                    <div>
                        <p className="font-extrabold text-[1rem]">100% PAYMENT SECURE</p>
                        <p className="text-[1.1rem] my-2 text-gray-700">Our payments are secured with 256 bit encryption</p>
                    </div>
                </div>
            </section>
            <main className="w-full px-8 lg:px-20 flex flex-wrap gap-6 my-24">
                <section className="bg-black text-white w-full lg:w-[49%] h-[32rem] flex flex-col items-center justify-center">
                    <h2 className="text-4xl">PEACE OF MIND</h2>
                    <p className="my-8 text-[1.2rem] text-center">A one-stop platform for all your fashion needs, <br /> hassle-free. Buy with a peace of mind.</p>
                    <Link className="bg-white text-cyan-800 px-6 py-3 hover:font-bold" to="/products">BUY NOW</Link>
                </section>
                <aside className="bg-black text-white w-full lg:w-[49%] h-[32rem] flex flex-col items-center justify-center">
                    <h2 className="text-4xl">BUY 2 GET 1 FREE</h2>
                    <p className="my-8 text-[1.2rem] text-center">End of season sale. Buy any 2 items of your choice <br /> and get 1 free.</p>
                    <Link className="bg-white text-cyan-800 px-6 py-3 hover:font-bold" to="/products">BUY NOW</Link>
                </aside>
            </main>
            <main>
                <main className="w-screen my-16 text-center">
                    <h1 className="text-center mb-4 text-4xl font-medium">Top Sellers</h1>
                    <h4 className="text-center mb-24 text-[1.2rem]">Browse Our Top Selling Products</h4>
                    <div className="flex flex-wrap gap-6 w-full px-8 lg:px-0 items-center justify-center mb-16">
                        {arr.map(product => {
                            return(
                                <Link to={`/product-details/${product.id}`} className="w-full lg:w-[21.5%] flex flex-col items-center justify-center cursor-pointer hover:shadow-2xl transition-shadow" key={product.id}>
                                    <img className="w-full" src={product.image} alt={product.name} />
                                    <p className="font-bold mt-4 border-b-[1px] border-transparent hover:border-b-[1px] hover:border-black transition ease-in">{product.name}</p>
                                    <p className="text-[1.1rem] text-cyan-800 mt-2 mb-6 border-b-[1px] border-transparent hover:border-b-[1px] hover:border-cyan-700 transition ease-in">${product.price}</p>
                                </Link>
                            )
                        })}
                    </div>
                    <Link className="bg-cyan-800 text-[1.1rem] text-white px-6 py-4 hover:bg-cyan-950" to="/products">SHOP NOW</Link>
                </main>
            </main>
        </div>
    );
}

export default Home;