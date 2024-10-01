
import { FaTrash } from "react-icons/fa"

const AppoinmentInfo = ({appoimentListItem,onDelete})=>{
 

 
    return(


        <div className="border rounded-md p-4 mb-4 shadow-md">
        <h2 className="text-xl font-bold">{appoimentListItem.petName}</h2>
        <p className="text-gray-700"><strong>Owner:</strong> {appoimentListItem.ownerName}</p>
        <p className="text-gray-700"><strong>Notes:</strong> {appoimentListItem.aptNotes}</p>
        <p className="text-gray-700"><strong>Date & Time:</strong> {new Date(appoimentListItem.aptDate).toLocaleString()}</p>
        {appoimentListItem.image && (
          <div className="flex justify-center mt-2">
            <img src={appoimentListItem.image} alt="Appointment" className="w-70 h-32 object-cover mt-2 rounded " />
          </div>

        )}
        <button

        onClick={()=>onDelete(appoimentListItem.id)}
         
          className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 flex items-center"
        >
          <FaTrash className="mr-2" /> Delete
        </button>
      </div>
    )
}

export default AppoinmentInfo;