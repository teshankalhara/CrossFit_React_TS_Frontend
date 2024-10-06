import { Link, useLocation, useNavigate } from "react-router-dom"

function NavBar() {
    const navigation = [
        { name: "Home", path: "/" },
        { name: "Pages", path: "/pages" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Blog", path: "/blog" },
        { name: "Shop", path: "/shop" },
    ]

    const navigate = useNavigate()
    const location = useLocation()
    return (
        <>
            <nav className="py-6 px-5 shadow-xl mb-5" style={{ backgroundColor: "#131619" }}>
                <ul className="flex items-center justify-between">
                    <div onClick={() => { navigate('/') }} className="cursor-pointer text-white text-2xl font-bold ml-2 mr-64">
                        KROOPP
                    </div>
                    <li>
                        <Link to="/" className={`text-sm font-medium transition-colors duration-300 ${location.pathname === "/" ? "text-blue-500" : "text-slate-100"} hover:text-blue-500`}>
                            Home
                        </Link>
                    </li>
                    {
                        navigation.slice(1).map((link, index) => {
                            const isActive = location.pathname === link.path || (link.name === "Order" && location.pathname === "/order/create")
                            return (
                                <li key={index}>
                                    <Link to={link.path} className={`text-sm font-medium transition-colors duration-300 ${isActive ? "text-blue-500" : "text-slate-100"} hover:text-blue-500`}>
                                        {link.name}
                                    </Link>
                                </li>
                            )
                        })
                    }
                    <div className="mr-4 ml-28 flex items-center justify-between">
                        <button type="button" className="bg-white uppercase antialiased text-xs px-6 py-2 text-black rounded-3xl hover:bg-slate-300 transition-all duration-300 font-bold">
                            book now
                        </button>
                    </div>
                </ul>
            </nav>
        </>
    )
}

export default NavBar