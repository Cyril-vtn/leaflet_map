import { Badge, Text, Tooltip } from '@chakra-ui/react';
import { RestaurantType } from '../api.type'
import { FaStar, FaStarHalf } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
export const RestaurantCard = ({
  restaurant,
  onClick,
}: {
  restaurant: RestaurantType,
  onClick: (restaurant: RestaurantType) => void,
}) => {

  const isOpen = () => {
    const now = new Date();
    const dayOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'][now.getDay()];
    const hours = restaurant.hours[dayOfWeek as keyof typeof restaurant.hours].split(', ');
    for (let i = 0; i < hours.length; i++) {
      const [openingTime, closingTime] = hours[i].split(' - ').map(time => {
        const [hours, minutes] = time.split(':').map(Number);
        const date = new Date();
        date.setHours(hours);
        date.setMinutes(minutes);
        return date;
      });

      if (now >= openingTime && now <= closingTime) {
        return true;
      }
    }

    return false;
  }; return (
    <div className=' p-3 border-b w-full bg-gray-900 cursor-pointer hover:bg-gray-800 transition duration-200'
      onClick={() => onClick(restaurant)}>
      <div className=' text-white flex flex-col gap-1'>
        <div className='flex justify-between items-center'>
          <Text fontSize={'large'} fontWeight={'bold'}>{restaurant.name}</Text>
          {/* adding fav icon */}
          <MdFavoriteBorder className=" text-lg inline-block text-gray-100 align-middle hover:text-red-500 transition-all duration-200" />
        </div>
        <div className='flex items-center'>
          <div className='flex items-center mr-2 justify-center'>
            <span className='mr-1 text-sm font-bold'>
              {restaurant.stars}</span>
            {
              // Afficher les étoiles complètes
              [...Array(Math.floor(restaurant.stars))].map((_, i) => (
                <span key={i} className='mr-[3px]' role='img' aria-label='star'>
                  <FaStar color={'#ffc107'} />
                </span>
              ))
            }
            {
              // Afficher une demi-étoile si nécessaire
              restaurant.stars % 1 !== 0 && (
                <span className='mr-[3px]' role='img' aria-label='half star'>
                  <FaStarHalf color={'#ffc107'} />
                </span>
              )
            }
          </div>
          {isOpen() ? (
            <Badge colorScheme='green'>Ouvert</Badge>
          ) : (
            <Badge colorScheme='red'>Fermé</Badge>
          )}
        </div>
        <p className='text-sm'>{restaurant.address}</p>
        <Tooltip hasArrow label={restaurant.description} aria-label="A tooltip" p={2} color={'gray.900'} bg={'gray.100'}>
          <Text noOfLines={1}>{restaurant.description}</Text>
        </Tooltip>
      </div>
    </div>
  )
}