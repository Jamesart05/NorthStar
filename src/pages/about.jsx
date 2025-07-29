import { Link } from "react-router-dom"

const About  = () => {
    return(
        <>
            <div className="bg-[url(/src/assets/hero.jpg)] h-[24rem] bg-cover bg-no-repeat p-20 flex items-center lg:items-end">
                <h1 className="text-white text-5xl">ABOUT NORTHSTAR</h1>
            </div>
            <main className="w-screen p-6 lg:p-20 grid lg:flex items-center gap-8 lg:gap-12">
                <div className="bg-[url(/src/assets/beauty.png)] h-[42rem] bg-cover bg-center bg-no-repeat flex justify-center items-end w-full lg:w-1/2 lg:p-20">
                    <Link className="mb-12 lg:mb-0  text-cyan-800 text-[1.6rem] bg-white py-4 px-8 rounded-3xl hover:bg-cyan-700 hover:text-white" to="/products">BUY NOW</Link>
                </div>
                <div className="bg-[url(/src/assets/cool.png)] h-[42rem] bg-cover bg-center bg-no-repeat flex justify-center items-end w-full lg:w-1/2 lg:p-20">
                    <Link className="mb-12 lg:mb-0  text-cyan-800 text-[1.6rem] bg-white py-4 px-8 rounded-3xl hover:bg-cyan-700 hover:text-white" to="/products">BUY NOW</Link>
                </div>
            </main>
            <section className="w-screen mt-20">
                <h2 className="text-center text-[2.6rem] font-bold p-8 pb-2 lg:pb-20 lg:p-20">The Founders</h2>
                <div className="w-screen flex flex-wrap justify-center gap-6 p-8 lg:p-20">
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-[23.6%]">
                        <img className="w-full" src="/src/assets/hm.png " alt="HM Jawad" />
                        <p className="font-medium text-[1.2rem] py-4">HM Jawad</p>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-[23.6%]">
                        <img className="w-full" src="/src/assets/abid.png " alt="HM Jawad" />
                        <p className="font-medium text-[1.2rem] py-4">HM Jawad</p>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-[23.6%]">
                        <img className="w-full" src="/src/assets/ah.png " alt="HM Jawad" />
                        <p className="font-medium text-[1.2rem] py-4">HM Jawad</p>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-[23.6%]">
                        <img className="w-full" src="/src/assets/khan.png " alt="HM Jawad" />
                        <p className="font-medium text-[1.2rem] py-4">HM Jawad</p>
                    </div>
                </div>
            </section>
            <h2 className="text-center text-[2.6rem] font-bold p-20 pt-40 pb-20">Testimonials</h2>
            <main className="flex flex-col gap-56 items-center pb-20">
                <div className="lg:w-[64%] px-12 lg:px-0 flex flex-wrap justify-center gap-12">
                    <img className="w-[16rem] h-[16rem]" src="/src/assets/stacy.png" alt="" />
                    <div className="flex flex-col justify-between">
                        <img className="w-fit" src="/src/assets/testimonial.png" alt="" />
                        <p className="text-[1.4rem] font-bold text-gray-700 py-4">Once we ordered some accessories items and we got the <br /> products delivered in our doorstep, the customer support <br /> was super helpful and they answered all my queries.</p>
                        <p className="text-[1.4rem] font-medium">Stacy</p>
                    </div>
                </div>
                <div className="lg:w-[64%] px-12 lg:px-0 flex flex-wrap justify-center gap-12">
                    <img className="w-[16rem] h-[16rem]" src="/src/assets/tiffany.png" alt="" />
                    <div className="flex flex-col justify-between">
                        <img className="w-fit" src="/src/assets/testimonial.png" alt="" />
                        <p className="text-[1.4rem] font-bold text-gray-700 py-4">I ordered 5 shirts from them and received them in no time. <br /> The customer support was awesome.</p>
                        <p className="text-[1.4rem] font-medium">Tiffany</p>
                    </div>
                </div>
                <div className="lg:w-[64%] px-12 lg:px-0 flex flex-wrap justify-center gap-12">
                    <img className="w-[16rem] h-[16rem]" src="/src/assets/james.png" alt="" />
                    <div className="flex flex-col justify-between">
                        <img className="w-fit" src="/src/assets/testimonial.png" alt="" />
                        <p className="text-[1.4rem] font-bold text-gray-700 py-4">I got a wrong shirt so I contacted them and they happily offered me a refund. I will surely shop from them again.</p>
                        <p className="text-[1.4rem] font-medium">James</p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default About