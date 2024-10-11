import BMI from "./BMI"
import JoinUs from "./JoinUs"

const Home = () => {
    return (
        <>
            <div>
                <div className="text-white">
                    Home
                </div>
                <JoinUs/>
                <BMI/>
            </div>
        </>
    )
}

export default Home