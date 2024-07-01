import ProductsRepository from "../Repositories/ProductsRepository.js";

class ProductsController {

    async index(req, res) {
        const rows = await ProductsRepository.findAll()
        res.json(rows)
    }
}

export default new ProductsController();