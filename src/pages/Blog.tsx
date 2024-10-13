const Blog = () => {
    return (
        <>
            <div className="pt-4 py-5 pb-10" style={{ backgroundColor: "#131619" }}>
                <div className="mt-1 flex flex-col items-center justify-center">
                    <div className="relative lg:py-2 lg:pb-0 sm:px-10 sm:pt-10 pt-2 text-center">
                        <h1 className="absolute pl-24 sm:pl-28 lg:pl-0 uppercase lg:inset-0 text-[70px] sm:text-[70px] lg:text-[80px] font-extrabold text-black opacity-10"
                            style={{ textShadow: "2px 2px 0px white, -2px -2px 0px white, 2px -2px 0px white, -2px 2px 0px white", }}>
                            part
                        </h1>
                        <div className="lg:relative lg:z-10 lg:py-2 lg:mt-4 sm:mt-6 mt-6 sm:mb-0 mb-2">
                            <h1 className="lg:mb-1 text-slate-50 font-bold uppercase lg:text-[42px] text-[30px] mb-5 lg:pt-0 pt-2">
                                be a part of our fit family
                            </h1>
                        </div>
                    </div>
                    <div className="lg:px-6 lg:relative text-center">
                        <p className="text-white sm:pr-8">
                            Training helps you think and feel better. join us!
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}


export default Blog