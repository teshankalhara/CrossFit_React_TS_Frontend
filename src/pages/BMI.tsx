import BMITable from "../components/BMITable/BMITable"
import InputBMI from "../components/InputBMI/InputBMI"

const BMI = () => {
    return (
        <>
            <div className="px-8 text-slate-100 mt-8 pt-10" style={{ backgroundColor: "#131619" }}>
                <div className="flex">
                    <div className="basis-1/2 px-10 py-2">
                        <h1 className="mb-1 text-slate-50 font-bold" style={{ fontSize: "42px" }}>INPUT YOUR BMI</h1>
                        <p>
                            Body Mass Index (BMI) is a measure that uses weight and height to determine if a person is underweight, normal, overweight, or obese, indicating health risks.
                        </p>
                        <InputBMI />
                    </div>
                    <div className="basis-1/2">
                        <div className="flex justify-center items-center">
                            <BMITable />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BMI