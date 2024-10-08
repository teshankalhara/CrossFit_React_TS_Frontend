import CustomizedBtn from '../CustomizedBtn/CustomizedBtn'

const InputBMI = () => {
    return (
        <>
            <form className="py-4">
                <div className="flex">
                    <div>
                        <input type="text" style={{ backgroundColor: "#131619" }} className="w-[200px] h-[40px] border text-sm border-slate-300 rounded-full pl-5 p-2 placeholder:text-white placeholder:text-xs" placeholder="Height/cm" />
                    </div>
                    <div>
                        <input type="text" style={{ backgroundColor: "#131619" }} className="ml-1 w-[200px] h-[40px] border text-sm border-slate-300 rounded-full pl-5 p-2 placeholder:text-white placeholder:text-xs" placeholder="Weight/kg" />
                    </div>
                </div>
                <div className="flex mt-2">
                    <div>
                        <input type="text" style={{ backgroundColor: "#131619" }} className="w-[200px] h-[40px] border text-sm border-slate-300 rounded-full pl-5 p-2 placeholder:text-white placeholder:text-xs" placeholder="Height/cm" />
                    </div>
                    <div>
                        <select style={{ backgroundColor: "#131619" }} className="text-xs ml-1 w-[200px] h-[40px] border border-slate-300 rounded-full pl-5 p-2 text-white">
                            <option value="" disabled selected >Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>
                <div className="flex mt-2">
                    <div>
                        <input type="text" style={{ backgroundColor: "#131619" }} className="w-[404px] h-[40px] border text-sm border-slate-300 rounded-full pl-5 p-2 placeholder:text-white placeholder:text-xs" placeholder="Select an activity factor :" />
                    </div>
                </div>
                <div className='flex mt-2'>
                    <div>
                        <CustomizedBtn title='CALCULATE' width={200} height={40} />
                    </div>
                </div>
            </form>
        </>
    )
}

export default InputBMI