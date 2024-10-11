import CustomizedBtn from "../CustomizedBtn/CustomizedBtn"

const SubscribeSet = () => {
    return (
        <>
            <form>
                <div className="flex flex-col sm:flex-row items-center justify-center">
                    <div className="mb-2 sm:mb-0">
                        <input type="text"
                            style={{ backgroundColor: "#131619" }}
                            className="text-white w-full sm:w-[200px] h-[40px] border text-sm border-slate-300 rounded-full pl-5 p-2 placeholder:text-white placeholder:text-xs"
                            placeholder="Name" />
                    </div>
                    <div className="mt-2 sm:mt-0 sm:ml-2">
                        <input type="email"
                            style={{ backgroundColor: "#131619" }}
                            className="text-white w-full sm:w-[200px] h-[40px] border text-sm border-slate-300 rounded-full pl-5 p-2 placeholder:text-white placeholder:text-xs"
                            placeholder="Email" />
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-4">
                        <CustomizedBtn title="SUBSCRIBE" width={200} height={40} />
                    </div>
                </div>
            </form>
        </>
    )
}

export default SubscribeSet
