/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex("trees").del()
  await knex("trees").insert([
    {
      id: 1,
      species_common: "Madrona",
      species_sci: "Arbutus menziesii",
      is_native: true,
      height: 120,
      circ: 150,
      age: 45,
      author: "Sam Rice",
      img_url: "https://albersvistagardens.org/wp-content/uploads/madronas_lowangle.jpg",
      address: "6210 36th Ave NE",
      neighborhood: "Bryant",
      lat: 47.674370,
      long: -122.288648
    },
    {
      id: 2,
      species_common: "Himalayan Cedar",
      species_sci: "Cedrus deodara",
      is_native: false,
      height: 120,
      circ: 80,
      age: 110,
      author: "Peter Tilton",
      img_url: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Cedrus_deodara_Manali_2.jpg",
      address: "1923 Naomi Pl",
      neighborhood: "Ravenna",
      lat: 47.673290,
      long: -122.306720
    },
    {
      id: 3,
      species_common: "Douglas Fir",
      species_sci: "Pseudotsuga menziesii",
      is_native: true,
      height: 130,
      circ: 100,
      age: 93,
      author: "John Giuliani",
      img_url: "https://cdn.britannica.com/34/118234-050-12C9BAC8/Douglas-fir.jpg",
      address: "1213 NW Culbertson Drive",
      neighborhood: "Llandover Woods",
      lat: 47.731810,
      long: -122.372400
    },
    {
      id: 4,
      species_common: "Red Alder",
      species_sci: "Alnus rubra",
      is_native: true,
      height: 45,
      circ: 30,
      age: 40,
      author: "John Depp",
      img_url: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Red_alder_leaves.jpg",
      address: "1400 Discovery Park Blvd",
      neighborhood: "Magnolia",
      lat: 47.662510,
      long: -122.429031
    }
  ])
}

// {
//   "id": 1,
//   "species_common": "Madrona",
//   "species_sci": "Arbutus menziesii",
//   "is_native": true,
//   "height": 120,
//   "circ": 150,
//   "age": 45,
//   "author": "Sam Rice",
//   "img_url": "https://albersvistagardens.org/wp-content/uploads/madronas_lowangle.jpg",
//   "address": "6210 36th Ave NE",
//   "neighborhood": "Bryant",
//   "lat": "47.674370",
//   "long": "-122.288648"
// },
// {
//   "id": 2,
//   "species_common": "Himalayan Cedar",
//   "species_sci": "Cedrus deodara",
//   "is_native": false,
//   "height": 120,
//   "circ": 80,
//   "age": 110,
//   "author": "Peter Tilton",
//   "img_url": "https://upload.wikimedia.org/wikipedia/commons/d/dc/Cedrus_deodara_Manali_2.jpg",
//   "address": "1923 Naomi Pl",
//   "neighborhood": "Ravenna",
//   "lat": "47.673290",
//   "long": "-122.306720"
// },
// {
//   "id": 3,
//   "species_common": "Douglas Fir",
//   "species_sci": "Pseudotsuga menziesii",
//   "is_native": true,
//   "height": 130,
//   "circ": 100,
//   "age": 93,
//   "author": "John Giuliani",
//   "img_url": "https://cdn.britannica.com/34/118234-050-12C9BAC8/Douglas-fir.jpg",
//   "address": "1213 NW Culbertson Drive",
//   "neighborhood": "Llandover Woods",
//   "lat": "47.731810",
//   "long": "-122.372400"
// },
// {
//   "id": 4,
//   "species_common": "Red Alder",
//   "species_sci": "Alnus rubra",
//   "is_native": true,
//   "height": 45,
//   "circ": 30,
//   "age": 40,
//   "author": "John Depp",
//   "img_url": "https://upload.wikimedia.org/wikipedia/commons/c/c0/Red_alder_leaves.jpg",
//   "address": "1400 Discovery Park Blvd",
//   "neighborhood": "Magnolia",
//   "lat": "47.662510",
//   "long": "-122.429031"
// }