import { Link } from "react-router-dom"
import img1 from "/src/assets/hm.png"
import img2 from "/src/assets/abid.png"
import img3 from "/src/assets/ah.png"
import img4 from "/src/assets/khan.png"
import img5 from "/src/assets/stacy.png"
import img6 from "/src/assets/tiffany.png"
import img7 from "/src/assets/james.png"
import img8 from "/src/assets/testimonial.png"
import img9 from "/src/assets/contact.jpg"

const About  = () => {
    return(
        <>
            <div style={{backgroundImage: `url(${img9})`}} className={`bg-cover bg-no-repeat p-20 flex items-center justify-center lg:justify-start h-[24rem] lg:items-end`}>
                <h1 className="text-white text-3xl lg:text-5xl">ABOUT NORTHSTAR</h1>
            </div>
            <main className="w-screen p-4 lg:p-20 grid lg:flex items-center gap-8 lg:gap-12">
                <div className="bg-[url(/src/assets/beauty.png)] h-[32rem] lg:h-[42rem] bg-cover bg-center bg-no-repeat flex justify-center items-end w-full lg:w-1/2 lg:p-20">
                    <Link className="mb-12 lg:mb-0  text-cyan-800 lg:text-[1.6rem] bg-white py-4 px-8 rounded-3xl hover:bg-cyan-700 hover:text-white" to="/products">BUY NOW</Link>
                </div>
                <div className="bg-[url(/src/assets/cool.png)] h-[32rem] lg:h-[42rem] bg-cover bg-center bg-no-repeat flex justify-center items-end w-full lg:w-1/2 lg:p-20">
                    <Link className="mb-12 lg:mb-0  text-cyan-800 lg:text-[1.6rem] bg-white py-4 px-8 rounded-3xl hover:bg-cyan-700 hover:text-white" to="/products">BUY NOW</Link>
                </div>
            </main>
            <section className="w-screen mt-20">
                <h2 className="text-center text-3xl lg:text-[2.6rem] font-bold p-2 pb-2 lg:pb-20 lg:p-20">The Founders</h2>
                <div className="w-screen flex flex-wrap justify-center gap-6 p-4 lg:p-20">
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-[23.6%]">
                        <img className="w-full" src={img1} alt="HM Jawad" />
                        <p className="font-medium text-[1.2rem] py-4">HM Jawad</p>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-[23.6%]">
                        <img className="w-full" src={img2} alt="HM Jawad" />
                        <p className="font-medium text-[1.2rem] py-4">Furqan Abid</p>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-[23.6%]">
                        <img className="w-full" src={img3} alt="HM Jawad" />
                        <p className="font-medium text-[1.2rem] py-4">Abdullah Ah</p>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-[23.6%]">
                        <img className="w-full" src={img4} alt="HM Jawad" />
                        <p className="font-medium text-[1.2rem] py-4">Abrar Khan</p>
                    </div>
                </div>
            </section>
            <h2 className="text-center text-[2.6rem] font-bold p-20 pt-40 pb-20">Testimonials</h2>
            <main className="flex flex-col gap-24 lg:gap-48 items-center pb-20 ">
                <div className="lg:w-[64%] px-8 lg:px-0 flex flex-wrap justify-center lg:gap-12">
                    <img className="w-[26%] h-[16rem]" src={img5} alt="" />
                    <div className="w-[64%] flex flex-col justify-between">
                        <img className="w-fit" src={img8}alt="" />
                        <p className="lg:text-[1.4rem] font-bold text-gray-700 py-4">Once we ordered some accessories items and we got the <br /> products delivered in our doorstep, the customer support <br /> was super helpful and they answered all my queries.</p>
                        <p className="lg:text-[1.4rem] font-medium">Stacy</p>
                    </div>
                </div>
                <div className="lg:w-[64%] px-8 lg:px-0 flex flex-wrap justify-center lg:gap-12">
                    <img className="w-[26%] h-[16rem]" src={img6} alt="" />
                    <div className="w-[64%] flex flex-col justify-between">
                        <img className="w-fit" src={img8} alt="" />
                        <p className="lg:text-[1.4rem] font-bold text-gray-700 py-4">I ordered 5 shirts from them and received them in no time. <br /> The customer support was awesome.</p>
                        <p className="lg:text-[1.4rem] font-medium">Tiffany</p>
                    </div>
                </div>
                <div className="lg:w-[64%] px-8 lg:px-0 flex flex-wrap justify-center lg:gap-12">
                    <img className="w-[26%] h-[16rem]" src={img7} alt="" />
                    <div className="w-[64%] flex flex-col justify-between">
                        <img className="w-fit" src={img8} alt="" />
                        <p className="lg:text-[1.4rem] font-bold text-gray-700 py-4">I got a wrong shirt so I contacted them and they happily offered me a refund. I will surely shop from them again.</p>
                        <p className="lg:text-[1.4rem] font-medium">James</p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default About