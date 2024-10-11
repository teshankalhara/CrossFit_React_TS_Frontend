import arrowIcon from "../../assets/img/arrowIcon.png"

const Footer = () => {
    return (
        <>
            <footer className="bottom-0 bg-back pt-1">
                <div className="text-white flex flex-row pt-16 items-center">
                    <div className="text-right basis-2/5 uppercase font-bold pr-20" style={{ fontSize: "66px" }}>
                        KROOPP
                    </div>
                    <div className="basis-3/5 uppercase text-xs font-mono">
                        please feel free to send us an e-mail at <b className="font-bold text-sm">kropp@qodeinteractive.com</b><br />for any additional inquiries
                    </div>
                </div>

                <div className="text-white flex flex-row pt-5 pb-20 mx-auto max-w-6xl">
                    <div className="basis-1/6"></div>

                    <div className="basis-4/6 flex items-start justify-between">
                        <div className="font-light">
                            <div className="uppercase text-left font-bold">about</div>
                            <div className="capitalize text-left text-xs mt-2">
                                Shape up your site with Kropp,<br />a theme especially made for<br />fitness & gym websites.
                            </div>
                        </div>

                        <div className="font-light">
                            <div className="uppercase text-left font-bold">working hours</div>
                            <div className="capitalize text-left text-xs mt-2">
                                Monday - Friday<br />07:00 - 22:00
                            </div>
                            <div className="mt-3 capitalize text-left text-xs">
                                Saturday - Sunday<br />08:00 - 20:00
                            </div>
                        </div>

                        <div className="font-light">
                            <div className="uppercase text-left font-bold">location</div>
                            <div className="capitalize text-left text-xs mt-2">
                                68 Jay Street, Brooklyn,<br />NY 11201, United States
                            </div>
                            <div className="mt-3 capitalize text-left text-xs">
                                kropp@qodeinteractive.com<br />+94 777 000 8888
                            </div>
                        </div>

                        <div className="font-light">
                            <div className="uppercase text-left font-bold">start now</div>
                            <div className="flex mt-2">
                                <input type="email" placeholder="Email" className="w-full bg-black border border-white focus:border-white focus:outline-none p-1 text-xs pl-4 rounded-l-full placeholder-white" />
                                <button className="flex items-center justify-center border border-white focus:border-white bg-black hover:bg-slate-900 rounded-r-full p-1 border-l-0">
                                    <img src={arrowIcon} alt="Arrow Icon" width="20px" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="basis-1/6"></div>
                </div>

                <div className="py-3" style={{ backgroundColor: "#131619" }}>
                    <div className="text-white text-xs text-center">
                        &copy; 2024 Qode Interactive, All Rights Reserved | Privacy Policy | Contact Us
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer
