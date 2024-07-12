import RegisterRepository from "../Repositories/RegisterRepository.js";

class RegisterController {
    async storage (req, res) {
        try {
            const dataUser = req.body
            const line = await RegisterRepository.Create(dataUser)
            res.json(line)
        }   
        catch {
            res.status(500).send("Houve um erro ao cadastrar!")
        } 
    }
}

export default new RegisterController();