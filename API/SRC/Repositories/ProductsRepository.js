import conexao from "../Database/mysql.js"

class ProductsRepository {

    findAll() {
        const sql = "SELECT * FROM produtosv;"
        conexao.query(sql, (erro, resultado) => {
            return new Promise((resolve, reject) => {
                if (erro) return reject("Não foi possível localizar!");
                const line = JSON.parse(JSON.stringify(resultado))
                return resolve(line)
            })
        })
    }
}

export default new ProductsRepository();