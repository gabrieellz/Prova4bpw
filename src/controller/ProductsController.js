const { update } = require("../model/Products");
const Usuario = require("../model/Products");

module.exports = {
  async index(req, res) {
    const products = await Products.findAll();
    return res.json(products);
  },
  async findByid(req, res) {
    const { id } = req.params;
    const usuario = await Products.findAll({
      where: {
        id: id,
      },
    });
    return res.json(products);
  },
  async store(req, res) {
    const { nome, senha } = req.body;
    const usuario = await Products.create({
      nome,
      price,
    });
    return res.json(products);
  },
  async delete(req, res) {
    const usuario = await Products.destroy({
      where: {
        id: id,
      },
    });
    return res.json(products);
  },
  async update(req, res) {
    const { id, nome, senha } = req.body;
    const usuario = await Products.update({
      nome, price
      }, {
        where: {
          id: id
        }
    });
    return res.json(products);
  },
};
