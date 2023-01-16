// const db = require("../db/db")
const db = require("../db/knex")

class TreeDAO {
  async getTrees() {
    const trees = await db("trees").select().from("trees")
      .returning("allTrees")
    return trees
  }

  async createTree(speciesCommon, speciesSci, isNative, height, circ, age, author, imageURL, address, neighborhood, lat, long) {
    const [id] = await db("trees").insert({
      species_common: speciesCommon,
      species_sci: speciesSci,
      is_native: isNative,
      height,
      circ,
      age,
      author,
      img_url: imageURL,
      address,
      neighborhood,
      lat,
      long
    })
      .returning("id")

    return id
  }
}

module.exports = new TreeDAO()