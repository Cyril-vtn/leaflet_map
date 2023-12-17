export type RestaurantType = {
  id: number,
  name: string,
  description: string,
  address: string,
  location: [number, number], // [latitude, longitude],
  image: string,
  stars: number,
  hours: {
    monday: string,
    tuesday: string,
    wednesday: string,
    thursday: string,
    friday: string,
    saturday: string,
    sunday: string
  },
  // menu: MenuType[], don't know if I add this yet
}