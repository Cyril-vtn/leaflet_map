import { Marker, Popup } from 'react-leaflet'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { RestaurantType } from '../api.type'
import { ChangeView } from './ChangeMapView'
import { DivIcon } from 'leaflet'
import { renderToStaticMarkup } from 'react-dom/server'
import MarkerIcon from './svg/MarkerIcon'


export const Map = ({
  restaurants,
  userLocation,
  zoom = 13,
  isUserLocated,
}: {
  restaurants: RestaurantType[],
  userLocation: [number, number],
  zoom: number,
  isUserLocated: boolean,
  selectedRestaurant: RestaurantType | null,
}) => {




  const Loader: React.FC = () => {
    return (
      <div className="flex justify-center items-center h-full w-full">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-blue-500 motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
        </div>
      </div>
    );
  };

  const svgMarkup = renderToStaticMarkup(<MarkerIcon />);

  const customMarkerIcon = new DivIcon({
    html: svgMarkup,
    className: 'my-custom-icon', // optional, for custom CSS
  });

  if (!isUserLocated) {
    return (
      <Loader />
    )
  }

  return (
    isUserLocated && (
      <MapContainer center={userLocation} zoom={zoom} scrollWheelZoom={true} className='h-full w-full'>
        <ChangeView center={userLocation} zoom={zoom} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {restaurants.map((restaurant) => (
          <Marker position={restaurant.location} key={restaurant.id} icon={customMarkerIcon}>
            <Popup>
              <h2>{restaurant.name}</h2>
              <p>{restaurant.description}</p>
            </Popup>
          </Marker>
        ))
        }
      </MapContainer >
    ))

}
