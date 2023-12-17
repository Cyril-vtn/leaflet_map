import { RestaurantType } from "../api.type";

export const DUMMY_DATA = {
  "location": [48.8566, 2.3522] as [number, number],
  "restaurants": [
    {
      "id": 1,
      "name": "Le Petit Bistrot",
      "description": "Charmant bistrot français avec une cuisine traditionnelle.",
      "address": "12 Rue de la République, 75001 Paris",
      "location": [48.8566, 2.3522],
      "image": "https://example.com/le_petit_bistrot.jpg",
      "stars": 4,
      "hours": {
        "monday": "18:00 - 23:00",
        "tuesday": "18:00 - 23:00",
        "wednesday": "18:00 - 23:00",
        "thursday": "18:00 - 23:00",
        "friday": "18:00 - 23:30",
        "saturday": "12:00 - 23:30",
        "sunday": "12:00 - 22:30"
      }
    },
    {
      "id": 2,
      "name": "La Brasserie Parisienne",
      "description": "Brasserie animée proposant des plats classiques et une sélection de bières.",
      "address": "34 Avenue des Champs-Élysées, 75008 Paris",
      "location": [48.8694, 2.3088],
      "image": "https://example.com/la_brasserie_parisienne.jpg",
      "stars": 3,
      "hours": {
        "monday": "11:30 - 15:00, 18:30 - 23:00",
        "tuesday": "11:30 - 15:00, 18:30 - 23:00",
        "wednesday": "11:30 - 15:00, 18:30 - 23:00",
        "thursday": "11:30 - 15:00, 18:30 - 23:00",
        "friday": "11:30 - 15:00, 18:30 - 23:30",
        "saturday": "11:30 - 23:30",
        "sunday": "11:30 - 23:00"
      }
    },
    {
      "id": 3,
      "name": "Chez Amélie",
      "description": "Restaurant familial spécialisé dans la cuisine française maison.",
      "address": "18 Rue du Faubourg Saint-Antoine, 75011 Paris",
      "location": [48.8530, 2.3746],
      "image": "https://example.com/chez_amelie.jpg",
      "stars": 5,
      "hours": {
        "monday": "12:00 - 15:00, 19:00 - 23:00",
        "tuesday": "12:00 - 15:00, 19:00 - 23:00",
        "wednesday": "12:00 - 15:00, 19:00 - 23:00",
        "thursday": "12:00 - 15:00, 19:00 - 23:00",
        "friday": "12:00 - 15:00, 19:00 - 23:30",
        "saturday": "12:00 - 23:30",
        "sunday": "12:00 - 23:00"
      }
    },
    {
      "id": 4,
      "name": "La Pizzeria Trattoria",
      "description": "Authentique pizzeria italienne avec four à bois.",
      "address": "22 Rue de la Pompe, 75116 Paris",
      "location": [48.8656, 2.2836],
      "image": "https://example.com/la_pizzeria_trattoria.jpg",
      "stars": 4,
      "hours": {
        "monday": "12:00 - 14:30, 19:00 - 23:00",
        "tuesday": "12:00 - 14:30, 19:00 - 23:00",
        "wednesday": "12:00 - 14:30, 19:00 - 23:00",
        "thursday": "12:00 - 14:30, 19:00 - 23:00",
        "friday": "12:00 - 14:30, 19:00 - 23:30",
        "saturday": "12:00 - 23:30",
        "sunday": "12:00 - 23:00"
      }
    },
    {
      "id": 5,
      "name": "Le Vieux Moulin",
      "description": "Restaurant romantique avec vue sur la Seine, spécialisé dans la cuisine française raffinée.",
      "address": "7 Quai de la Tournelle, 75005 Paris",
      "location": [48.8509, 2.3540],
      "image": "https://example.com/le_vieux_moulin.jpg",
      "stars": 4,
      "hours": {
        "monday": "19:00 - 23:30",
        "tuesday": "19:00 - 23:30",
        "wednesday": "19:00 - 23:30",
        "thursday": "19:00 - 23:30",
        "friday": "19:00 - 00:00",
        "saturday": "12:30 - 00:00",
        "sunday": "12:30 - 23:00"
      }
    },
    {
      "id": 6,
      "name": "Sushi Paradise",
      "description": "Sushi bar populaire offrant une variété de délices japonais.",
      "address": "56 Rue de la Roquette, 75011 Paris",
      "location": [48.8598, 2.3758],
      "image": "https://example.com/sushi_paradise.jpg",
      "stars": 3,
      "hours": {
        "monday": "12:00 - 15:00, 19:00 - 23:00",
        "tuesday": "12:00 - 15:00, 19:00 - 23:00",
        "wednesday": "12:00 - 15:00, 19:00 - 23:00",
        "thursday": "12:00 - 15:00, 19:00 - 23:00",
        "friday": "12:00 - 15:00, 19:00 - 00:00",
        "saturday": "12:00 - 00:00",
        "sunday": "12:00 - 23:00"
      }
    },
    {
      "id": 7,
      "name": "Le Café des Artistes",
      "description": "Ambiance artistique dans ce café proposant des plats créatifs et des desserts exquis.",
      "address": "19 Rue de la Grande Chaumière, 75006 Paris",
      "location": [48.8439, 2.3319],
      "image": "https://example.com/le_cafe_des_artistes.jpg",
      "stars": 5,
      "hours": {
        "monday": "08:00 - 23:00",
        "tuesday": "08:00 - 23:00",
        "wednesday": "08:00 - 23:00",
        "thursday": "08:00 - 23:00",
        "friday": "08:00 - 00:00",
        "saturday": "10:00 - 00:00",
        "sunday": "10:00 - 23:00"
      }
    },
    {
      "id": 8,
      "name": "La Cantina Mexicana",
      "description": "Restaurant mexicain coloré offrant des saveurs épicées et des margaritas savoureuses.",
      "address": "14 Rue de la Pompe, 75116 Paris",
      "location": [48.8650, 2.2865],
      "image": "https://example.com/la_cantina_mexicana.jpg",
      "stars": 4,
      "hours": {
        "monday": "11:30 - 15:00, 18:00 - 23:00",
        "tuesday": "11:30 - 15:00, 18:00 - 23:00",
        "wednesday": "11:30 - 15:00, 18:00 - 23:00",
        "thursday": "11:30 - 15:00, 18:00 - 23:00",
        "friday": "11:30 - 15:00, 18:00 - 23:30",
        "saturday": "11:30 - 23:30",
        "sunday": "11:30 - 23:00"
      }
    }
  ] as RestaurantType[]
}