import SubscribeSet from "../components/SubscribeSet/SubscribeSet"

const JoinUs = () => {
    return (
        <>
            <div className="text-center pb-16">
                <div className="text-center mb-8">
                    <h1 className="text-white uppercase font-bold text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px]">
                        join us
                    </h1>
                </div>

                <div className="relative text-center text-white mb-6">
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

                <div className="text-white mt-2">
                    <p className="mt-2 text-xs sm:text-sm md:text-base lg:text-lg">
                        FILL THE FORM BELOW TO START YOUR JOURNEY
                    </p>
                </div>

                <div className="mt-8 flex justify-center items-center">
                    <SubscribeSet />
                </div>
            </div>
        </>
    )
}

export default JoinUs
