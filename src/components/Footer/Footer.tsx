const Footer = () => {
    return (
        <>
            <footer className="sticky bottom-0 bg-slate-500 mt-20">
                <div className="text-white flex flex-row pt-16 items-center">
                    <div className="text-right basis-2/5 uppercase font-bold pr-20" style={{ fontSize: "66px" }}>
                        KROOPP
                    </div>
                    <div className="basis-3/5 uppercase text-xs font-mono">
                        please feel free to send us an e-mail at <b className="font-bold text-sm">kropp@qodeinteractive.com</b><br />for any additional inquiries
                    </div>
                </div>

                <div className="text-white flex flex-row pt-5 pb-20">
                    <div className="basis-1/6"></div>
                    <div className="basis-4/6 flex items-start justify-between">
                        <div className="font-light">
                            <div className="uppercase text-left font-bold">
                                about
                            </div>
                            <div className="capitalize text-left text-xs">
                                Shape up your site with Kropp,<br />a theme especially made for<br />fitness & gym websites.
                            </div>
                        </div>
                        <div className="font-light">
                            <div className="uppercase text-left font-bold">
                                working hours
                            </div>
                            <div className="capitalize text-left text-xs">
                                Monday - Friday<br />07:00 - 22:00
                            </div>
                            <div className="mt-3 capitalize text-left text-xs">
                                Saturday - Sunday<br />08:00 - 20:00
                            </div>
                        </div>
                        <div className=" font-light">
                            <div className="uppercase text-left font-bold">
                                location
                            </div>
                            <div className="capitalize text-left text-xs">
                                68 Jay Street, Brooklyn,<br />NY 11201, United States
                            </div>
                            <div className="mt-3 capitalize text-left text-xs">
                                kropp@qodeinteractive.com<br />+94 777 000 8888
                            </div>
                        </div>
                        <div className="font-light">
                            <div className="uppercase text-left font-bold">start now</div>
                            <div className="capitalize text-left text-xs">location</div>
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
    )
}

export default Footer
