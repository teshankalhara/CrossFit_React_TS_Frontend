import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Check BMI', path: '/bmi' },
    { name: 'Join US', path: '/joinus' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' }
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

const NavBar = () => {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <Disclosure as="nav" className="sticky top-0 z-50 shadow-lg shadow-black lg:py-2" style={{ backgroundColor: "#131619" }}>
            {({ open }) => (
                <>
                    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div
                                    onClick={() => navigate('/')}
                                    className="cursor-pointer text-white text-2xl font-bold lg:mr-52"
                                >
                                    KROOPP
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.path}
                                                className={classNames(
                                                    location.pathname === item.path
                                                        ? 'bg-gray-800 text-white'
                                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                                aria-current={location.pathname === item.path ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="hidden sm:flex absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button
                                    type="button"
                                    className="bg-white uppercase antialiased text-xs px-6 py-2 text-black rounded-3xl hover:bg-slate-300 transition-all duration-300 font-bold"
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as={Link}
                                    to={item.path}
                                    className={classNames(
                                        location.pathname === item.path
                                            ? 'bg-gray-800 text-white'
                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={location.pathname === item.path ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>

                        <div className="flex justify-start px-2 pb-3">
                            <button
                                type="button"
                                className="bg-white uppercase antialiased text-xs px-6 py-2 text-black rounded-3xl hover:bg-slate-300 transition-all duration-300 font-bold"
                            >
                                Book Now
                            </button>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default NavBar
