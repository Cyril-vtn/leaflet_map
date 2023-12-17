import { RestaurantType } from '../api.type'

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
    <div className='border-b w-full border-gray-400 cursor-pointer hover:bg-gray-50 transition duration-200'
      onClick={() => onClick(restaurant)}>
      <div className='p-2'>
        <h3 className='text-l font-bold'>{restaurant.name}</h3>
        <div className='flex items-center'>
          <div className='flex items-center'>
            <span className='mr-1' role='img' aria-label='stars'>
              {restaurant.stars}</span>
            {[...Array(restaurant.stars)].map((_, i) => (
              <svg key={i} className='w-4 h-4 text-yellow-500' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                <path d='M10 15.27L16.18 19l-1.64-7.03L22 9.24l-7.19-.61L10 2 7.19 8.63 0 9.24l5.46 2.73L3.82 19z' />
              </svg>
            ))}
          </div>
          <p className='ml-2 text-sm text-gray-500'>{isOpen() ? 'Ouvert' : 'Fermé'}</p>
        </div>
        <p className='text-sm'>{restaurant.address}</p>
        <p className='text-center'>{restaurant.description}</p>
      </div>
    </div>
  )
}