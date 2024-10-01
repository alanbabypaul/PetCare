import { useState } from "react";
import { BiCalendarPlus } from "react-icons/bi";

const Addappoiment = ({ onsendAppoinmentDetails, lastId }) => {
  const [formOpen, setFormClose] = useState(false);
  const clearData = {
    petName: "",
    ownerName: "",
    aptNotes: "",
    aptDate: "",
    image: null,
  };

  const [formData, setFormdata] = useState(clearData);

  const onSubmit = () => {
    const appoinmentDetails = {
      id: lastId + 1,
      petName: formData.petName,
      ownerName: formData.ownerName,
      aptNotes: formData.aptNotes,
      aptDate: formData.aptDate + " " + formData.aptTime,
      image: formData.image,
    };
    onsendAppoinmentDetails(appoinmentDetails);
    setFormdata(clearData);
    setFormClose(!formOpen);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormdata({ ...formData, image: URL.createObjectURL(file) });
    }
  };

  return (
    <div >
      <button
        className="bg-green-400 text-white px-2 py-3 w-full text-left rounded-t-md"
        onClick={() => setFormClose(!formOpen)}
      >

        <div>
          <BiCalendarPlus className="inline-block align-text-top" /> Add
          Appointment
        </div>
      </button>
      {formOpen && (
        <div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="ownerName"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              
            >
              Owner Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="ownerName"
                id="ownerName"
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 py-2  "
                onChange={(event) => {
                  setFormdata({ ...formData, ownerName: event.target.value });
                }}
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="petName"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Pet Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="petName"
                id="petName"
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300  py-2  bg-transparent"
                onChange={(event) => {
                  setFormdata({ ...formData, petName: event.target.value });
                }}
                value={formData.petName}
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="aptDate"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Apt Date
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="date"
                name="aptDate"
                id="aptDate"
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 py-2  bg-transparent"
                onChange={(event) => {
                  setFormdata({ ...formData, aptDate: event.target.value });
                }}
                value={formData.aptDate}
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="aptTime"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Apt Time
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="time"
                name="aptTime"
                id="aptTime"
                className="max-w-lg block w-full shadow-sm focus:ring-green-300 focus:border-green-500 sm:max-w-xs sm:text-sm border-gray-300 py-2  bg-transparent"
                onChange={(event) => {
                  setFormdata({ ...formData, aptTime: event.target.value });
                }}
                value={formData.aptTime}
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="aptNotes"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Appointment Notes
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <textarea
                id="aptNotes"
                name="aptNotes"
                rows="3"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md bg-transparent"
                placeholder="Detailed comments about the condition"
                onChange={(event) => {
                  setFormdata({ ...formData, aptNotes: event.target.value });
                }}
                value={formData.aptNotes}
              ></textarea>
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="aptTime"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              upload Image
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="file"
                name="image"
                id="image"
                className="max-w-lg block w-full shadow-sm focus:ring-green-300 focus:border-green-500 sm:max-w-xs sm:text-sm border-gray-300 py-2"
                onChange={handleImageChange}
              />
              {formData.image && (
                <img
                  src={formData.image}
                  alt="Preview"
                  className="mt-2 w-70 h-40 object-cover rounded"
                />
              )}
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-400 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                onClick={onSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Addappoiment;
