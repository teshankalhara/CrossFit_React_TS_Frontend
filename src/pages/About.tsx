import CustomizedBtn from "../components/CustomizedBtn/CustomizedBtn"

const About = () => {
    return (
        <>
            <div className="pt-4 py-5" style={{ backgroundColor: "#131619" }}>
                <div className="sm:flex">
                    <div className="basis-1/2">

                    </div>
                    <div className="basis-1/2">
                        <div className="relative lg:basis-1/2 lg:py-2 sm:px-10 sm:pt-10 pl-5 pt-2">
                            <h1 className="absolute lg:inset-0 text-[70px] sm:text-[70px] lg:text-[80px] font-extrabold text-black opacity-10 sm:flex sm:items-start sm:justify-start"
                                style={{ textShadow: '2px 2px 0px white, -2px -2px 0px white, 2px -2px 0px white, -2px 2px 0px white' }}>
                                LOOK
                            </h1>
                            <div className="lg:relative lg:z-10 lg:py-2 lg:mt-4 sm:mt-6 mt-8 sm:mb-0 mb-2">
                                <h1 className="lg:mb-1 text-slate-50 font-bold uppercase lg:text-[42px] text-[32px] mb-5 lg:pt-0 pt-2">find us near you</h1>
                            </div>
                            <div className="lg:px-6 lg:relative ">
                                <p className="text-white sm:pr-8">
                                    Nor his own and his standard-bearers. Do the princes take advantage of him with labor? I did not want to use the diam, because you get it.
                                </p>
                            </div>
                            <div className="lg:px-6 relative mt-4">
                                <CustomizedBtn title="View more" width={200} height={40}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About