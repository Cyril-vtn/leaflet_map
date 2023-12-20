import { Avatar, AvatarBadge, Button, Menu, MenuButton, MenuItem, MenuList, Tooltip } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import './App.css'
import { Map } from './components/Map'
import { SearchList } from './components/SearchList'
import { DUMMY_DATA } from './data/DUMMY_DATA'
import { RestaurantType } from './api.type';
import { Modal } from './components/Modal';

function App() {
  const [userLocation, setUserLocation] = useState<[number, number]>([0, 0]);
  const [zoom, setZoom] = useState(5);
  const [isUserLocated, setIsUserLocated] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState<RestaurantType | null>(null);
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLocation([position.coords.latitude, position.coords.longitude]);
      setZoom(13);
      setIsUserLocated(true);
    });
  }, []);

  const handleSignIn = () => {
    setIsOpen(true);
  };

  return (
    <div className='bg-gray-900 h-screen w-screen flex flex-col-reverse sm:flex-row'>
      <div className="bg-gray-900  flex flex-col overflow-auto md:w-[500px] sm:w-screen ">
        <h1 className=' text-2xl text-center h-16 pt-3 pb-3 text-white '>Liste de restaurants</h1>
        {/* small divider */}
        <div className="border-b-2 border-gray-50 w-60 rounded-lg self-center"> </div>
        <div className='flex flex-col  overflow-auto'>
          <SearchList setSelectedRestaurant={setSelectedRestaurant} restaurants={DUMMY_DATA.restaurants} setUserLocation={setUserLocation} setZoom={setZoom} />
        </div>
      </div >
      {/* Diviseur */}
      <div className="border-r-2 border-gray-50">
      </div>
      <div className="flex flex-col w-full h-full">
        <div className="bg-gray-900 w-full h-[61px] flex flex-row justify-between items-center pr-6 pl-6">
          <div>
            <Tooltip label={!user ? "Connectez-vous pour ajouter un restaurant" : ""} hasArrow>
              <Button size={"sm"} isDisabled={!user} colorScheme="facebook">Ajouter un restaurant</Button>
            </Tooltip>
          </div>
          <div className="flex flex-row items-center">
            <Menu>
              <MenuButton >
                <Avatar size={'sm'} cursor={"pointer"}>
                  <AvatarBadge boxSize="1.25em" bg="green" />
                </Avatar>
              </MenuButton>
              <MenuList zIndex={9999}>
                {user ?
                  <>
                    <MenuItem>Mon profil</MenuItem>
                    <MenuItem>Se déconnecter</MenuItem>
                  </>
                  : <MenuItem onClick={handleSignIn}>Se connecter</MenuItem>}



              </MenuList>
            </Menu>

          </div>
        </div>
        <div className="bg-gray-900 w-full h-full" >
          <Map restaurants={DUMMY_DATA.restaurants} userLocation={userLocation} zoom={zoom} isUserLocated={isUserLocated} selectedRestaurant={selectedRestaurant} />
        </div>
      </div>
      {/* Modal */}
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} setUser={setUser} />

    </div>
  )
}


export default App
