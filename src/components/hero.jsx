import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="w-[100%] bg-[url(/src/assets/hero.png)] h-[87vh] bg-cover flex items-center justify-center lg:justify-end overflow-x-hidden px-4 lg:px-20">
            <div className="text-white font-[700] flex flex-col items-center gap-6">
                <h1 className="text-[2.6rem] lg:text-[3.6rem] text-center">STYLISTS PICKS BEAT <br /> THE HEAT</h1>
                <Link to="/products" className="w-48 border-white border-5 text-2xl text-center py-3 hover:bg-white hover:text-cyan-700">SHOP NOW</Link>
            </div>
        </div>
    );
}

export default Hero;