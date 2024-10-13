import BMITable from "../components/BMITable/BMITable"
import InputBMI from "../components/InputBMI/InputBMI"

const BMI = () => {
    return (
        <>
            <div className="pt-4 py-5" style={{ backgroundColor: "#131619" }}>
                <div className="lg:px-8 text-slate-100">
                    <div className="lg:flex">
                        <div className="relative lg:basis-1/2 lg:py-2 sm:px-10 sm:pt-10 pl-5 pt-2">
                            <h1 className="absolute lg:inset-0 text-[80px] sm:text-[70px] lg:text-[80px] font-extrabold text-black opacity-10 sm:flex sm:items-start sm:justify-start"
                                style={{ textShadow: '2px 2px 0px white, -2px -2px 0px white, 2px -2px 0px white, -2px 2px 0px white' }}>
                                BMI
                            </h1>
                            <div className="lg:relative lg:z-10 lg:py-3 lg:mt-4 sm:mt-6 mt-8">
                                <h1 className="lg:mb-1 text-slate-50 font-bold" style={{ fontSize: "42px" }}>INPUT YOUR BMI</h1>
                            </div>
                            <div className="lg:px-6 lg:relative lg:z-99">
                                <p>
                                    Body Mass Index (BMI) is a measure that uses weight and height to determine if a person is underweight, normal, overweight, or obese, indicating health risks.
                                </p>
                                <InputBMI/>
                            </div>
                        </div>
                        <div className="lg:basis-1/2 lg:pt-8">
                            <div className="flex justify-center items-center">
                                <BMITable />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BMI