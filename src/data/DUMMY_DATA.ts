import { RestaurantType } from "../api.type";

export const DUMMY_DATA = {
  "location": [48.8566, 2.3522] as [number, number],
  "restaurants": [
    {
      "id": 1,
      "name": "Le Palais de Pékin",
      "description": "Restaurant chinois renommé pour sa cuisine pékinoise authentique.",
      "address": "8 Rue de la Grande Muraille, 75013 Paris",
      "location": [48.8274, 2.3634],
      "image": "https://example.com/le_palais_de_pekin.jpg",
      "stars": 4.5,
      "hours": {
        "monday": "12:00 - 15:00, 19:00 - 23:00",
        "tuesday": "12:00 - 15:00, 19:00 - 23:00",
        "wednesday": "12:00 - 15:00, 19:00 - 23:00",
        "thursday": "12:00 - 15:00, 19:00 - 23:00",
        "friday": "12:00 - 15:00, 19:00 - 23:30",
        "saturday": "12:00 - 23:30",
        "sunday": "12:00 - 22:30"
      }
    },
    {
      "id": 2,
      "name": "Sichuan Fusion",
      "description": "Restaurant proposant une fusion de saveurs du Sichuan et de la cuisine française.",
      "address": "20 Avenue de la Pagode, 75016 Paris",
      "location": [48.8612, 2.2643],
      "image": "https://example.com/sichuan_fusion.jpg",
      "stars": 4.2,
      "hours": {
        "monday": "19:00 - 22:30",
        "tuesday": "19:00 - 22:30",
        "wednesday": "19:00 - 22:30",
        "thursday": "19:00 - 22:30",
        "friday": "19:00 - 23:00",
        "saturday": "12:30 - 23:00",
        "sunday": "12:30 - 22:00"
      }
    },
    {
      "id": 3,
      "name": "Nouilles Express",
      "description": "Fast-food chinois spécialisé dans les nouilles faites à la main.",
      "address": "15 Rue de la Soie, 75019 Paris",
      "location": [48.8765, 2.3877],
      "image": "https://example.com/nouilles_express.jpg",
      "stars": 3.8,
      "hours": {
        "monday": "11:00 - 22:00",
        "tuesday": "11:00 - 22:00",
        "wednesday": "11:00 - 22:00",
        "thursday": "11:00 - 22:00",
        "friday": "11:00 - 23:00",
        "saturday": "12:00 - 23:00",
        "sunday": "12:00 - 21:30"
      }
    },
    {
      "id": 4,
      "name": "Canton Délices",
      "description": "Restaurant familial offrant une délicieuse cuisine cantonaise.",
      "address": "42 Avenue de la Porcelaine, 75012 Paris",
      "location": [48.8453, 2.3931],
      "image": "https://example.com/canton_delices.jpg",
      "stars": 4.0,
      "hours": {
        "monday": "12:00 - 15:00, 19:00 - 22:30",
        "tuesday": "12:00 - 15:00, 19:00 - 22:30",
        "wednesday": "12:00 - 15:00, 19:00 - 22:30",
        "thursday": "12:00 - 15:00, 19:00 - 22:30",
        "friday": "12:00 - 15:00, 19:00 - 23:00",
        "saturday": "12:00 - 23:00",
        "sunday": "12:00 - 22:00"
      }
    },
    {
      "id": 5,
      "name": "Saveurs de Shanghai",
      "description": "Restaurant spécialisé dans les saveurs authentiques de la cuisine shanghaïenne.",
      "address": "25 Rue de la Soie, 75013 Paris",
      "location": [48.8269, 2.3658],
      "image": "https://example.com/saveurs_de_shanghai.jpg",
      "stars": 4.3,
      "hours": {
        "monday": "18:30 - 22:30",
        "tuesday": "18:30 - 22:30",
        "wednesday": "18:30 - 22:30",
        "thursday": "18:30 - 22:30",
        "friday": "18:30 - 23:00",
        "saturday": "12:00 - 23:00",
        "sunday": "12:00 - 22:00"
      }
    },
    {
      "id": 6,
      "name": "Panda Gourmand",
      "description": "Restaurant végétarien chinois avec des plats gourmands et sains.",
      "address": "7 Rue du Bambou, 75020 Paris",
      "location": [48.8701, 2.3983],
      "image": "https://example.com/panda_gourmand.jpg",
      "stars": 4.1,
      "hours": {
        "monday": "12:00 - 15:00, 19:00 - 22:00",
        "tuesday": "12:00 - 15:00, 19:00 - 22:00",
        "wednesday": "12:00 - 15:00, 19:00 - 22:00",
        "thursday": "12:00 - 15:00, 19:00 - 22:00",
        "friday": "12:00 - 15:00, 19:00 - 22:30",
        "saturday": "12:00 - 22:30",
        "sunday": "12:00 - 21:30"
      }
    },
    {
      "id": 7,
      "name": "Wok d'Or",
      "description": "Restaurant buffet avec une grande variété de plats asiatiques, notamment chinois.",
      "address": "30 Avenue de la Lantern, 75017 Paris",
      "location": [48.8817, 2.3072],
      "image": "https://example.com/wok_dor.jpg",
      "stars": 3.9,
      "hours": {
        "monday": "12:00 - 15:00, 18:30 - 22:30",
        "tuesday": "12:00 - 15:00, 18:30 - 22:30",
        "wednesday": "12:00 - 15:00, 18:30 - 22:30",
        "thursday": "12:00 - 15:00, 18:30 - 22:30",
        "friday": "12:00 - 15:00, 18:30 - 23:00",
        "saturday": "12:00 - 23:00",
        "sunday": "12:00 - 22:00"
      }
    },
    {
      "id": 8,
      "name": "Dynastie Palace",
      "description": "Restaurant haut de gamme offrant une expérience culinaire impériale.",
      "address": "18 Rue de la Dynastie, 75008 Paris",
      "location": [48.8723, 2.3078],
      "image": "https://example.com/dynastie_palace.jpg",
      "stars": 4.8,
      "hours": {
        "monday": "19:00 - 23:00",
        "tuesday": "19:00 - 23:00",
        "wednesday": "19:00 - 23:00",
        "thursday": "19:00 - 23:00",
        "friday": "19:00 - 23:30",
        "saturday": "12:30 - 23:30",
        "sunday": "12:30 - 22:30"
      }
    },
    {
      "id": 9,
      "name": "Nouilles Croustillantes",
      "description": "Spécialisé dans les nouilles croustillantes et les plats de rue chinois.",
      "address": "5 Rue du Croquant, 75005 Paris",
      "location": [48.8449, 2.3518],
      "image": "https://example.com/nouilles_croustillantes.jpg",
      "stars": 4.2,
      "hours": {
        "monday": "11:30 - 22:00",
        "tuesday": "11:30 - 22:00",
        "wednesday": "11:30 - 22:00",
        "thursday": "11:30 - 22:00",
        "friday": "11:30 - 23:00",
        "saturday": "12:00 - 23:00",
        "sunday": "12:00 - 21:30"
      }
    },
    {
      "id": 10,
      "name": "Gourmandise Cantonaise",
      "description": "Petit restaurant convivial offrant des spécialités de la cuisine cantonaise.",
      "address": "14 Rue de la Gourmandise, 75018 Paris",
      "location": [48.8934, 2.3467],
      "image": "https://example.com/gourmandise_cantonaise.jpg",
      "stars": 4.1,
      "hours": {
        "monday": "12:00 - 15:00, 19:00 - 22:30",
        "tuesday": "12:00 - 15:00, 19:00 - 22:30",
        "wednesday": "12:00 - 15:00, 19:00 - 22:30",
        "thursday": "12:00 - 15:00, 19:00 - 22:30",
        "friday": "12:00 - 15:00, 19:00 - 23:00",
        "saturday": "12:00 - 23:00",
        "sunday": "12:00 - 22:00"
      }
    },
    {
      "id": 11,
      "name": "Lotus d'Or",
      "description": "Restaurant végétalien chinois avec une variété de plats à base de lotus.",
      "address": "22 Avenue du Lotus, 75014 Paris",
      "location": [48.8327, 2.3240],
      "image": "https://example.com/lotus_dor.jpg",
      "stars": 4.4,
      "hours": {
        "monday": "18:00 - 22:00",
        "tuesday": "18:00 - 22:00",
        "wednesday": "18:00 - 22:00",
        "thursday": "18:00 - 22:00",
        "friday": "18:00 - 23:00",
        "saturday": "12:30 - 23:00",
        "sunday": "12:30 - 22:30"
      }
    },
    {
      "id": 12,
      "name": "Saveurs du Yangzi",
      "description": "Cuisine raffinée inspirée des saveurs de la région du Yangzi Jiang en Chine.",
      "address": "10 Quai du Yangzi, 75013 Paris",
      "location": [48.8295, 2.3675],
      "image": "https://example.com/saveurs_du_yangzi.jpg",
      "stars": 4.6,
      "hours": {
        "monday": "19:00 - 23:00",
        "tuesday": "19:00 - 23:00",
        "wednesday": "19:00 - 23:00",
        "thursday": "19:00 - 23:00",
        "friday": "19:00 - 23:30",
        "saturday": "12:30 - 23:30",
        "sunday": "12:30 - 22:30"
      }
    },
  ] as RestaurantType[]
}