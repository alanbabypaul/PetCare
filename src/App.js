
import './App.css';

import Search from './components/Search';
import Addappoiment from './components/Addappoinment';
import { BiCalendar } from 'react-icons/bi';
// import appoimentList from './components/data.json'

import AppoinmentInfo from './components/AppoinmentInfo';
import { useCallback, useState,useEffect } from 'react';

function App() {
  // states
  const [appoinmentData,setAppoinmentData] =useState([])
  const [querry,setQuerry]= useState("")
  const [orderBy,setOrderBy]= useState("asc")
  const [sortBy,setSortBy]= useState("petName")
  const [showAll, setShowAll] = useState(false);
// fetching data
  const fetchData = useCallback(()=>{
    fetch('./data.json')
   .then(response => response.json())
   .then(data => {
      setAppoinmentData(data)
    })
  },[])
// use effect
  useEffect(()=>{
    fetchData()
  },[fetchData])




  // handleDelete
  const handleDelete = (id) => {
    // console.log(id)
    setAppoinmentData(appoinmentData.filter(item => item.id!== id))
  }
  // filter search
  
  const filteredAppointment = appoinmentData
  .filter(item => 
    (item.petName && item.petName.toLowerCase().includes(querry.toLowerCase())) ||
    (item.ownerName && item.ownerName.toLowerCase().includes(querry.toLowerCase())) ||
    (item.aptNotes && item.aptNotes.toLowerCase().includes(querry.toLowerCase()))
  )
  .sort((a, b) => {
    if (!a[sortBy] || !b[sortBy]) return 0; // Handle undefined sortBy property
    let order = (orderBy === 'asc') ? 1 : -1;
    return a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? -1 * order : 1 * order;
  });

// 
const displayedAppointments = showAll ? filteredAppointment : filteredAppointment.slice(0, 2);

  return (
    
    <div className="App container mx-auto flex flex-col items-center text-center" style={{
      marginTop:'77px'
    }}>
      <h1 className='font-bold text-3xl text-gray-600'>Welcome to the Book Appointment</h1>
      <div className="mt-4">
        <BiCalendar style={{ fontSize: '3rem', color: '#708090' }} />
      </div>
      <div className="w-full max-w-4xl mt-6">
        
        <Search
          querry={querry}
          onQuerryChange={myQuerry => setQuerry(myQuerry)}
          orderBy={orderBy}
          onOrderByChange={mySort => setOrderBy(mySort)}
          sortBy={sortBy}
          onSortByChange={mySort => setSortBy(mySort)}
        />
      </div>
      <div className="flex w-full max-w-4xl mt-6 space-x-6">
      
        <div className="flex-1">
          <Addappoiment
            onsendAppoinmentDetails={myAppoinment => setAppoinmentData([...appoinmentData, myAppoinment])}
            lastId={appoinmentData.reduce((max, item) => Number(item.id) > max ? Number(item.id) : max, 0)}
          />
        </div>
        
        <div className="flex-1">
          <ul>
            {displayedAppointments.map((appoimentListItem) => (
              <AppoinmentInfo
                appoimentListItem={appoimentListItem}
                key={appoimentListItem.id}
                onDelete={handleDelete}
              />
            ))}
          </ul>

          {!showAll && filteredAppointment.length >5 &&(
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setShowAll(true)}>viewMore</button>
          )}

{showAll && (
            <button
              onClick={() => setShowAll(false)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
export default App;
