import { connect } from "react-redux";
import IMG from '../../assets/img/logo.jpg'
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className='w-full py-6 top-0 transition duration-300 ease-in-out z-40 fixed'>
                <div className="bg-white px-4 sm:px-6">
                    <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                        <div className="-ml-4 -mt-2 hidden lg:flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                        <Link to='/' className="ml-4 mt-2">
                            <img
                                src={IMG}
                                width={80}
                                height={80}
                                className=""
                                alt="logo"
                            />
                        </Link>
                            <div className="ml-4 mt-2 flex-shrink-0">
                            <Link to='/engineering' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-blue-500 transition duration-300 ease-in-out mx-4">Engineering</Link>
                            <Link to='/courses' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-blue-500 transition duration-300 ease-in-out mx-4">Courses</Link>
                            <Link to='/languages' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-blue-500 transition duration-300 ease-in-out mx-4">Languages</Link>
                            <Link to='/admission' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-blue-500 transition duration-300 ease-in-out mx-4">Admission</Link>
                            <Link to='/about' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-blue-500 transition duration-300 ease-in-out mx-4">About us</Link>
                            <Link to='/contact' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-blue-500 transition duration-300 ease-in-out mx-4">Contact</Link>
                        
                            <Link
                                to="/contact"
                                className="inline-flex ml-12 items-center rounded-md border border-transparent bg-blue-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-900 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                            >
                            Register Me
                           
                            </Link>
                            
                            </div>
                        </div>
                    </div>
                </div>
        </nav>
    )
}
const mapStateToProps = state =>{

}

export default connect(mapStateToProps, {

}) (Navbar)