import SubscribeSet from "../components/SubscribeSet/SubscribeSet"
import BMI from "./BMI"

const Home = () => {
    return (
        <>
            <div>
                <div className="text-white">
                    Home
                </div>
                <SubscribeSet/>
                <BMI/>
            </div>
        </>
    )
}

export default Home