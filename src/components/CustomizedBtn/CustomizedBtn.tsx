import CustomizedBtnType from "../../types/CustomizedBtnType"
import arrowIcon from "../../assets/img/arrowIcon.png"

const CustomizedBtn = (btn: CustomizedBtnType) => {
    return (
        <>
            <button type="button" style={{ width: `${btn.width}px`, height: `${btn.height}px` }}
                className="border  hover:border-white text-white hover:bg-slate-500 py-2 rounded-3xl flex justify-between items-center">
                <div className="px-8 text-medium text-left">{btn.title}</div>
                <div className="rounded-full" style={{ width: `${btn.height}px`, height: `${btn.height}px` }}>
                    <img src={arrowIcon} alt="Arrow Icon" width={btn.height} />
                </div>
            </button>
        </>
    )
}

export default CustomizedBtn