const treeDAO = require("../dao/trees")

class TreesService {
  getTrees() {
    return treeDAO.getTrees()
  }

  createTree(treeDto) {
    const { speciesCommon, speciesSci, isNative, height, circ, age, author, imageURL, address, neighborhood, lat, long } = treeDto
    return treeDAO.createTree(speciesCommon, speciesSci, isNative, height, circ, age, author, imageURL, address, neighborhood, lat, long)
  }
}

module.exports = new TreesService()