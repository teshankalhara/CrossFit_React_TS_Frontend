import React from "react"
import arrowIcon from "../../assets/img/arrowIcon.png"

const Footer = () => {
    return (
        <>
            <footer className="lg:bottom-0 lg:pt-1 bg-black">
                <div className="lg:flex lg:flex-row lg:pt-16 lg:items-center text-white">
                    <div className="lg:text-right lg:basis-2/5 lg:pr-20 text-[66px] uppercase font-bold">
                        KROOPP
                    </div>
                    <div className="lg:basis-3/5 uppercase text-xs font-mono">
                        please feel free to send us an e-mail at <b className="font-bold text-sm">kropp@qodeinteractive.com</b><br />for any additional inquiries
                    </div>
                </div>

                <div className="lg:flex lg:flex-row lg:pt-5 lg:pb-20 lg:mx-auto lg:max-w-6xl text-white">
                    <div className="lg:basis-1/6"></div>

                    <div className="lg:basis-4/6 lg:flex lg:items-start lg:justify-between">
                        <div className="font-light">
                            <SubTitles title="about" />
                            <SubDetails details={<>Shape up your site with Kropp,<br />a theme especially made for <br />fitness & gym websites.</>} />
                        </div>

                        <div className="font-light">
                            <SubTitles title="working hours" />
                            <SubDetails details={<>Monday - Friday<br />07:00 - 22:00</>} />
                            <SubDetails details={<>Saturday - Sunday<br />08:00 - 20:00</>} />
                        </div>

                        <div className="font-light">
                            <SubTitles title="location" />
                            <SubDetails details={<>68 Jay Street, Brooklyn<br />NY 11201, United States</>} />
                            <SubDetails details={<>kropp@qodeinteractive.com<br />+94 777 000 8888</>} />
                        </div>

                        <div className="font-light">
                            <SubTitles title="start now" />
                            <div className="lg:flex lg:mt-2">
                                <input type="email" placeholder="Email" className="lg:w-full lg:pl-4 bg-black border border-white focus:border-white focus:outline-none  text-xs rounded-l-full placeholder-white" />
                                <button className="lg:flex lg:items-center lg:justify-center lg:p-1 border border-white focus:border-white bg-black hover:bg-slate-900 rounded-r-full  border-l-0">
                                    <img src={arrowIcon} alt="Arrow Icon" width="20px" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="lg:basis-1/6"></div>
                </div>

                <div className="py-2 sm:py-3 md:py-3 lg:py-3 xl:py-5 2xl:py-6" style={{ backgroundColor: "#131619" }}>
                    <div className="text-white text-[10px] sm:text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-lg text-center">
                        &copy; 2024 Qode Interactive, All Rights Reserved | Privacy Policy | Contact Us
                    </div>
                </div>

            </footer>
        </>
    )
}


const SubTitles: React.FC<{ title: string }> = ({ title }) => {
    return (
        <div className="uppercase lg:text-left font-bold">
            {title}
        </div>
    )
}

const SubDetails: React.FC<{ details?: any | null }> = ({ details }) => {
    return (
        <div className="capitalize lg:text-left text-xs lg:mt-2">
            {details}
        </div>
    )
}

export default Footer
