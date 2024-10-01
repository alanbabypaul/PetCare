import { Link } from "react-router-dom"

const Nav = ()=>{
    return (
       
         <>
      <nav className="absolute top-0 w-full bg-black bg-opacity-50 p-4 text-white mt-1">
      <div className="container mx-auto flex justify-center space-x-6">
      <Link to="/" className="hover:bg-gray-400 hover:text-white px-4 py-2 rounded transition duration-300">
                        Home
                    </Link>
      <a href="#home" className="hover:bg-gray-400 hover:text-white px-4 py-2 rounded transition duration-300">Services</a>
      <a href="#home" className="hover:bg-gray-400 hover:text-white px-4 py-2 rounded transition duration-300">Contact Me</a>

      </div>
    </nav>
    </>
    )
}
export default Nav