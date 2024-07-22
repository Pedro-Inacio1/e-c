import conexao from "../Database/mysql.js";

class LoginRepository {

    async GetUser(email, password) {
        return new Promise((resolve, reject) => {
            let sql = `SELECT email, senha FROM cadastrarusuarios SET email = ? AND password = ?`
            conexao.query(sql, (error, result) => {
                if(error) {
                    res.status(404).send("Usuário não encontrado!")
                    return reject
                }else {
                    const row = JSON.parse(JSON.stringfy(result))
                    resolve(row)
                }  
            })
        })
    }
}

export default new LoginRepository();