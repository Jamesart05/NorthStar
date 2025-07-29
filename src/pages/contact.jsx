import img1 from "/src/assets/contact.jpg"

const Contact  = () => {
    return(
        <>
            <div style={{backgroundImage: `url(/src/assets/contact.jpg)`}} className={`h-[24rem] bg-cover bg-no-repeat p-20 flex items-center justify-center lg:justify-start lg:items-end`}>
                <h1 className="text-white text-3xl lg:text-5xl">CONTACT US</h1>
            </div>
            <main className="px-4 lg:px-20 pt-30 pb-12 lg:flex gap-16">
                <div className="lg:w-2/3">
                    <h2 className="mb-6 text-gray-700 text-3xl font-bold">We would love to hear from you</h2>
                    <p className="text-gray-600">If you have any type of suggestions, you can contact us here. We would love to here from you.</p>
                    <form className="flex flex-col gap-8 mt-12" action="">
                        <div className="lg:flex gap-6">
                            <div className="flex flex-col w-full gap-2">
                                <label htmlFor="">Name</label>
                                <input className="h-14 border-[1px] border-gray-300 p-2 " type="text" />
                            </div>
                            <div className="flex flex-col w-full gap-2">
                                <label htmlFor="">Email</label>
                                <input className="h-14 border-[1px] border-gray-300 p-2 " type="email" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="">Message</label>
                            <textarea className="w-full h-60 border-[1px] border-gray-300" name="message" id=""></textarea>
                        </div>
                        <button className="bg-cyan-900 text-white text-[1.2rem] w-fit px-4 py-4 cursor-pointer hover:bg-cyan-700 mb-24 lg:mb-0" type="submit">SEND MESSAGE</button>
                    </form>
                </div>
                <div className="lg:w-1/3">
                    <h2 className="mb-6 text-gray-700 text-2xl font-bold">We would love to hear from you</h2>
                    <p className="text-gray-600">UET Lahore, Punjab, Pakistan <br /> Phone: +923039898987</p>
                    <h2 className="my-6 text-gray-700 text-2xl font-bold">Get in touch</h2>
                    <p className="text-gray-600">You can get in touch with us on this provided email.</p>
                    <p className="text-gray-600 mt-4">Emain: hmjawad087.com</p>
                </div>
            </main>
        </>
    )
}

export default Contact