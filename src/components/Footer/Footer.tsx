import React from "react"
import arrowIcon from "../../assets/img/arrowIcon.png"

const Footer = () => {
    return (
        <>
            <footer className="sm:pt-1 lg:pt-1 bg-black px-0">
                <div className="p-6 mb-3 sm:flex sm:pt-10 lg:flex lg:flex-row lg:pt-8 lg:items-center text-white">
                    <div className="sm:basis-3/6 sm:text-right sm:pr-10 lg:text-right lg:basis-2/5 lg:pr-20 lg:pt-0 lg:mt-1 text-[40px] sm:text-[50px] lg:text-[66px] uppercase font-bold">
                        KROOPP
                    </div>
                    <div className="sm:basis-2/6 sm:pt-6 lg:basis-3/5 lg:pt-0 lg:mt-0 uppercase text-xs sm:text-sm lg:text-base font-mono">
                        please feel free to send us an e-mail at{" "}
                        <b className="font-bold text-sm">kropp@qodeinteractive.com</b>
                        <br />
                        for any additional inquiries
                    </div>
                </div>

                <div className="p-6 sm:flex sm:pt-4 lg:flex lg:flex-row lg:pt-5 sm:pb-8 lg:pb-12 lg:mx-auto lg:max-w-6xl text-white">
                    <div className="sm:basis-1/12 md:basis-1/12 lg:basis-1/6"></div>

                    <div className="sm:basis-10/12 sm:flex sm:justify-between md:flex md:basis-10/12 md:items-start md:justify-between lg:basis-4/6 lg:flex lg:items-start lg:justify-between xl:basis-4/6 xl:flex xl:items-start xl:justify-between">
                        <div className="font-light mb-2 mr-3">
                            <SubTitles title="about" />
                            <SubDetails
                                details={
                                    <>
                                        Shape up your site with Kropp,
                                        <br />
                                        a theme especially made for <br />
                                        fitness & gym websites.
                                    </>
                                }
                            />
                        </div>

                        <div className="font-light mb-2">
                            <SubTitles title="working hours" />
                            <SubDetails
                                details={
                                    <>
                                        Monday - Friday
                                        <br />
                                        07:00 - 22:00
                                    </>
                                }
                            />
                            <SubDetails
                                details={
                                    <>
                                        Saturday - Sunday
                                        <br />
                                        08:00 - 20:00
                                    </>
                                }
                            />
                        </div>

                        <div className="font-light mb-2">
                            <SubTitles title="location" />
                            <SubDetails
                                details={
                                    <>
                                        68 Jay Street, Brooklyn
                                        <br />
                                        NY 11201, United States
                                    </>
                                }
                            />
                            <span className="lowercase-important">
                                <SubDetails
                                    details={
                                        <>
                                            kropp@qodeinteractive.com
                                            <br />
                                            +94 777 000 8888
                                        </>
                                    }
                                />
                            </span>
                        </div>

                        <div className="font-light">
                            <SubTitles title="start now" />
                            <div className="flex sm:flex md:flex lg:flex lg:mt-2">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="pl-3 py-1 sm:pl-2 lg:w-full lg:pl-4 bg-black border border-white focus:border-white focus:outline-none text-xs rounded-l-full placeholder-white"
                                />
                                <button className="sm:flex sm:items-center sm:justify-center sm:p-1 md:flex md:items-center md:justify-center md:p-1 lg:flex lg:items-center lg:justify-center lg:p-1 border border-white focus:border-white bg-black hover:bg-slate-900 rounded-r-full border-l-0">
                                    <img src={arrowIcon} alt="Arrow Icon" width="20px" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="sm:1/12 md:1/8 lg:basis-1/6"></div>
                </div>

                <div className="px-0 py-2 mt-1 md:mt-0 sm:py-3 md:py-3 lg:py-3 xl:py-5 2xl:py-6" style={{ backgroundColor: "#131619" }}>
                    <div className="text-white text-[9px] md:text-xs lg:text-xs xl:text-sm 2xl:text-lg text-center">
                        &copy;2024 Qode Interactive, All Rights Reserved | Privacy Policy | Contact Us
                    </div>
                </div>
            </footer>
        </>

    )
}


const SubTitles: React.FC<{ title: string }> = ({ title }) => {
    return (
        <div className="uppercase mb-1 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 sm:text-left md:text-left lg:text-left xl:text-left font-bold text-sm">
            {title}
        </div>
    )
}

const SubDetails: React.FC<{ details?: any | null }> = ({ details }) => {
    return (
        <div className="text-left text-xs sm:mt-2 md:mt-2 lg:mt-2 xl:mt-2">
            {details}
        </div>
    )
}

export default Footer
