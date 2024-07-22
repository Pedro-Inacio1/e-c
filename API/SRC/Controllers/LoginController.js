import LoginRepository from "../Repositories/LoginRepository.js";

class LoginController {

    async Login(req, res) {
        try {
            const verify = req.body
            const row = await LoginRepository.GetUser(verify)
            res.json(row)
        }
        catch {
            res.status(404).send({error : "Usuário não encontrado!"})
        }
    }
}

export default new LoginController()