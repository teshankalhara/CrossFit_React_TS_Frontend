import CustomizedBtn from "../CustomizedBtn/CustomizedBtn"

const SubscribeSet = () => {
    return (
        <>
            <form>
                <div className="flex">
                    <div>
                        <input type="text" style={{ backgroundColor: "#131619" }} className="w-[200px] h-[40px] border text-sm border-slate-300 rounded-full pl-5 p-2 placeholder:text-white placeholder:text-xs" placeholder="Height/cm" />
                    </div>
                    <div>
                        <input type="text" style={{ backgroundColor: "#131619" }} className="ml-1 w-[200px] h-[40px] border text-sm border-slate-300 rounded-full pl-5 p-2 placeholder:text-white placeholder:text-xs" placeholder="Weight/kg" />
                    </div>
                    <div className="ml-2">
                        <CustomizedBtn title="SUBSCRIBE" width={200} height={40} />
                    </div>
                </div>
            </form>
        </>
    )
}

export default SubscribeSet