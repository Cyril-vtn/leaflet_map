
import { useEffect, useState } from 'react';
import './App.css'
import { Map } from './components/Map'
import { SearchList } from './components/SearchList'
import { DUMMY_DATA } from './data/DUMMY_DATA'
import { RestaurantType } from './api.type';

function App() {
  const [userLocation, setUserLocation] = useState<[number, number]>([0, 0]);
  const [zoom, setZoom] = useState(5);
  const [isUserLocated, setIsUserLocated] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState<RestaurantType | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLocation([position.coords.latitude, position.coords.longitude]);
      setZoom(13);
      setIsUserLocated(true);
    });
  }, []);

  return (
    <div className='bg-gray-100 h-screen w-screen flex flex-col-reverse sm:flex-row'>
      <div className="bg-white  flex flex-col overflow-auto md:w-96 sm:w-screen ">
        <h1 className=' text-2xl text-center pt-3 pb-3 shadow-md '>Liste de restaurants</h1>

        <div className='flex flex-col  overflow-auto'>

          <SearchList setSelectedRestaurant={setSelectedRestaurant} restaurants={DUMMY_DATA.restaurants} setUserLocation={setUserLocation} setZoom={setZoom} />

          {/* <RestaurantCard restaurant={DUMMY_DATA.restaurants[0]} onClick={() => {
            setUserLocation(DUMMY_DATA.restaurants[0].location);
            setZoom(17);
          }} /> */}
        </div>
        {/* <div className='flex justify-center h-[15vh]  items-center'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2 mb-2' onClick={() => {
            navigator.geolocation.getCurrentPosition((position) => {
              setUserLocation([position.coords.latitude, position.coords.longitude]);
            });
            setZoom(13);
          }}>Se localiser</button>
        </div> */}


      </div >

      {/*  */}

      {/* Diviseur */}
      <div className="border-r-2 border-gray-400"></div>

      <div className="bg-gray-200 w-full h-full" >

        <Map restaurants={DUMMY_DATA.restaurants} userLocation={userLocation} zoom={zoom} isUserLocated={isUserLocated} selectedRestaurant={selectedRestaurant} />
      </div >
    </div >
  )
}


export default App
