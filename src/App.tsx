import { Avatar, AvatarBadge, Button, Menu, MenuButton, MenuItem, MenuList, Tooltip, useToast } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import './App.css'
import { Map } from './components/Map'
import { SearchList } from './components/SearchList'
import { DUMMY_DATA } from './data/DUMMY_DATA'
import { RestaurantType } from './api.type';
import { Modal } from './components/Modal';
import { logoutUser } from './Appwrite/Auth';

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

  const Toast = useToast();
  
  const createToast = (message: string) => {
    return (
      Toast({
        title: message,
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    )
  }

  const handleSignIn = () => {
    setIsOpen(true);
  };

  const handleLogout = () => {
    logoutUser();
    setUser(null);
    createToast('Vous êtes déconnecté');
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
            {/* <Tooltip label={!user ? "Connectez-vous pour ajouter un restaurant" : ""} hasArrow>
              <Button size={"sm"} isDisabled={!user} colorScheme="facebook">Ajouter un restaurant</Button>
            </Tooltip> */}
          </div>
          <div className="flex flex-row items-center">
            <Menu>
              <MenuButton _hover={{ opacity: 0.8 }} _focus={{ outline: 'none' }} _active={{ opacity: 0.8 }} as={Button} variant="ghost" colorScheme="facebook" size="sm">
                <Avatar size={'sm'} cursor={"pointer"}>
                  {/* <AvatarBadge boxSize="1.25em" bg="green" /> */}
                </Avatar>
              </MenuButton>
              <MenuList zIndex={9999} bg={'gray.900'} color={'white'}>
                {user ?
                  <>
                    <MenuItem bg={'gray.900'} color={'white'}>Mon profil</MenuItem>
                    <MenuItem bg={'gray.900'} color={'white'} onClick={handleLogout}>Se déconnecter</MenuItem>
                  </>
                  : <MenuItem bg={'gray.900'} _hover={{background: 'gray.800'}} onClick={handleSignIn}>Se connecter</MenuItem>}



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
