import SubscribeSet from "../components/SubscribeSet/SubscribeSet"

const JoinUs = () => {
    return (
        <>
            <div className="text-center pb-16 sm:pt-4 pt-10" style={{ backgroundColor: "#131619" }}>
                <div className="text-center sm:mb-8 mb-3">
                    <h1 className="text-white uppercase font-bold text-[28px] sm:text-[36px] md:text-[48px] lg:text-[72px]">
                        join us
                    </h1>
                </div>

                <div className="relative text-center text-white sm:mb-6 mb-3">
                    <h1 className="absolute inset-0 text-[40px] sm:text-[50px] md:text-[70px] lg:text-[80px] font-extrabold text-black opacity-10 flex items-center justify-center"
                        style={{ textShadow: '2px 2px 0px white, -2px -2px 0px white, 2px -2px 0px white, -2px 2px 0px white' }}>
                        GO!
                    </h1>
                    <div className="relative z-10">
                        <div className="flex justify-center items-center">
                            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">START HERE</h2>
                        </div>
                    </div>
                </div>

                <div className="text-white sm:mt-2 mt-1">
                    <p className="mt-2 text-xs sm:text-sm md:text-base lg:text-lg">
                        FILL THE FORM BELOW TO START YOUR JOURNEY
                    </p>
                </div>

                <div className="sm:mt-8 mt-4 flex justify-center items-center">
                    <SubscribeSet />
                </div>
            </div>
        </>
    )
}

export default JoinUs
