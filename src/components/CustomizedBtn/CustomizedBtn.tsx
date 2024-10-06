import CustomizedBtnType from "../../types/CustomizedBtnType"

const CustomizedBtn = (btn: CustomizedBtnType) => {
    return (
        <>
            <button type="button" style={{ width: `${btn.width}px`, height: `${btn.height}px` }}
                className="border  hover:border-white text-white hover:text-black hover:bg-slate-500 py-2 rounded-3xl flex justify-between items-center">
                <div className="px-8 text-medium text-left">{btn.title}</div>
                <div className="border hover:border-black rounded-full px-1 py-2 text-sm" style={{ width: `${btn.height}px`, height: `${btn.height}px` }}>
                    Icon
                </div>
            </button>
        </>
    )
}

export default CustomizedBtn