const treesService = require("../service/trees")

class TreesController {
  async getTrees(req, res) {
    try {
      const data = await treesService.getTrees()
      res.status(200).json(data)
    } catch (error) {
      console.error(error)
      res.status(500).json("Failed to get all trees.")
    }
  }

  async createTree(req, res) {
    const requiredParams = ["speciesCommon", "speciesSci", "address", "age", "author", "lat", "long"]

    for (let requiredParam of requiredParams) {
      if (!req.body[requiredParam]) {
        return res.status(422).json({ message: `You are missing a required parameter of "${requiredParam}".` })
      }
    }

    try {
      const { id } = await treesService.createTree(req.body)
      const allTrees = await treesService.getTrees()
      const newTree = allTrees.find(tree => tree.id === id)
      res.status(201).json(newTree)
    } catch (err) {
      console.error(err)
      res.status(500).json("Failed to add new tree.")
    }
  }
}

module.exports = new TreesController()