import conexao from '../Database/mysql.js'

class RegisterRepository 
{
    async Create(dataUser) {
        return new Promise ((resolve, reject) => {
            const sql = "INSERT INTO CadastrarUsuarios SET ?"
            conexao.query(sql, dataUser, (error, result) => {
                if(error) {
                    reject("Não foi possível cadastrar usuário")
                }
                else {
                    const row = JSON.parse(JSON.stringify(result))
                    resolve(row)
                }
            })
        })
    }
}

export default new RegisterRepository();