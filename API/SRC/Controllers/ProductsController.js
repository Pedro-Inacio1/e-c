import ProductsRepository from "../Repositories/ProductsRepository.js";

class ProductsController {

    async Show(req, res) {
        try {
            const row = await ProductsRepository.FindAll()
            res.json(row)
        }
        catch {
            res.status(500).send({error : "Não foi possível localizar!!"})
        }
    }

    async Store(req, res) {
        try {
            const productsData = req.body
            const line = await ProductsRepository.Create(productsData)
            res.json(line)
        }
        catch {
            res.status(500).send({ error: "Não foi possível cadastrar!" })
        }
    }
}

export default new ProductsController();