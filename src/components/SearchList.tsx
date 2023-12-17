import { RestaurantCard } from './RestaurantCard'
import { RestaurantType } from '../api.type'

export const SearchList = ({
  restaurants,
  setUserLocation,
  setZoom,
  setSelectedRestaurant,
}: {
  restaurants: RestaurantType[],
  setUserLocation: React.Dispatch<React.SetStateAction<[number, number]>>,
  setZoom: React.Dispatch<React.SetStateAction<number>>,
  setSelectedRestaurant: React.Dispatch<React.SetStateAction<RestaurantType | null>>,
}) => {

  const handleClick = (restaurant: RestaurantType) => {
    setUserLocation(restaurant.location)
    setSelectedRestaurant(restaurant)
    setZoom(17)
  };

  return (
    restaurants.map((restaurant) => {
      return (
        <RestaurantCard restaurant={restaurant} onClick={handleClick} key={restaurant.id} />
      )
    }

    ))
}
