import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/appointment"); // Corrected the route path
  };

  return (
    <div
      className="relative"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/1870301/pexels-photo-1870301.jpeg?cs=srgb&dl=pexels-flowerstofox-1870301.jpg&fm=jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw'
      }}
    >
      {/* Navbar */}
      <nav className="absolute top-0 w-full bg-black bg-opacity-50 p-4 text-white">
        <div className="container mx-auto flex justify-center space-x-6">
        <a href="#home" className="hover:bg-gray-400 hover:text-white px-4 py-2 rounded transition duration-300">Home</a>
        <a href="#home" className="hover:bg-gray-400 hover:text-white px-4 py-2 rounded transition duration-300">Services</a>
        <a href="#home" className="hover:bg-gray-400 hover:text-white px-4 py-2 rounded transition duration-300">Contact Me</a>
       
        </div>
      </nav>

      <div className="flex items-center justify-center h-full text-center text-white">
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Clinic</h1>
          <p className="mb-4">
            We are dedicated to providing the best care for your furry friends. Our clinic offers a range of services to ensure the health and happiness of your pets. From routine check-ups to emergency care, our experienced team is here to help.
          </p>
          <button 
            className="bg-transparent text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded transition duration-300"
            onClick={handleClick}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
