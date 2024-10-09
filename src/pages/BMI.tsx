import InputType from "../components/InputBMI/InputBMI"

const BMI = () => {
    return (
        <>
            <div className="p-8 text-slate-100">
                <h1 className="mb-1 text-slate-50 font-bold" style={{fontSize:"42px"}}>INPUT YOUR BMI</h1>
                <div className="flex">
                    <div className="basis-1 px-10 py-2">
                        <p>
                            Quaerat molestias consequuntur harum pariatur fuga, accusantium incidunt quibusdam quis alias consequatur unde repellat vel, est aperiam inventore.
                        </p>
                        <InputType />
                    </div>
                    <div className="px-10 py-2">
                        <p>
                            Quaerat molestias consequuntur harum pariatur fuga, accusantium incidunt quibusdam quis alias consequatur unde repellat vel, est aperiam inventore.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BMI