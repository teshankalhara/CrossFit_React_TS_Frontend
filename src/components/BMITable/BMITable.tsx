const BMITable = () => {
    return (
        <>
            <div className="bg-black pt-4 rounded-full w-[400px] h-[400px] flex flex-col justify-center items-center mb-8">
                <div className="flex justify-center items-center">
                    <table border={1} className="border-collapse text-left text-xs">
                        <thead>
                            <tr className="uppercase border-b">
                                <th className="border-r p-3">bmi</th>
                                <th className="pl-5 p-3">weight status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="border-r p-3">Below 18.5</td>
                                <td className="pl-5 p-3">Underweight</td>
                            </tr>
                            <tr className="border-b">
                                <td className="border-r p-3">18.5-24.9</td>
                                <td className="pl-5 p-3">Healthy</td>
                            </tr>
                            <tr className="border-b">
                                <td className="border-r p-3">25.0-29.9</td>
                                <td className="pl-5 p-3">Overweight</td>
                            </tr>
                            <tr>
                                <td className="border-b border-r p-3 pr-10">30.0 and above</td>
                                <td className="pl-5 p-3">Obese</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="capitalize text-xs mt-5">
                    <b className="text-sm uppercase">bmr</b> metabolic rate / <b className="text-sm uppercase">bmi</b> body mass index
                </p>
            </div>
        </>
    )
}

export default BMITable