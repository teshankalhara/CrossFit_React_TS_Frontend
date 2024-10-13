import CustomizedBtn from '../CustomizedBtn/CustomizedBtn'

const InputBMI = () => {
    return (
        <>
            <form className="sm:py-4 sm:pt-5 py-5 pb-8 mb-2">
                <div className="sm:flex">
                    <div>
                        <input type="text" style={{ backgroundColor: "#131619" }} className="m-2 sm:m-0 w-[200px] h-[40px] border text-sm border-slate-300 rounded-full pl-5 p-2 placeholder:text-white placeholder:text-xs" placeholder="Height/cm" />
                    </div>
                    <div>
                        <input type="text" style={{ backgroundColor: "#131619" }} className="m-2 sm:m-0 sm:ml-1 w-[200px] h-[40px] border text-sm border-slate-300 rounded-full pl-5 p-2 placeholder:text-white placeholder:text-xs" placeholder="Weight/kg" />
                    </div>
                </div>
                <div className="sm:flex sm:mt-2">
                    <div>
                        <input type="text" style={{ backgroundColor: "#131619" }} className="m-2 sm:m-0 w-[200px] h-[40px] border text-sm border-slate-300 rounded-full pl-5 p-2 placeholder:text-white placeholder:text-xs" placeholder="Height/cm" />
                    </div>
                    <div>
                        <select
                            style={{ backgroundColor: "#131619" }}
                            className="m-2 sm:m-0 sm:ml-1 text-xs w-[200px] h-[40px] border border-slate-300 rounded-full pl-5 p-2 text-white"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Gender
                            </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                </div>
                <div className="sm:flex sm:mt-2 m-2 sm:-m-0">
                    <div>
                        <input type="text" style={{ backgroundColor: "#131619" }} className="sm:m-0 w-[340px] sm:w-[404px] h-[40px] border text-sm border-slate-300 rounded-full pl-5 p-2 placeholder:text-white placeholder:text-xs" placeholder="Select an activity factor :" />
                    </div>
                </div>
                <div className='sm:flex sm:pr-16 m-2 sm:-m-0 sm:mt-4 sm:justify-start'>
                    <div>
                        <CustomizedBtn title='CALCULATE' width={200} height={40} />
                    </div>
                </div>
            </form>
        </>
    )
}

export default InputBMI