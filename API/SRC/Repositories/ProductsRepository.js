import conexao from "../Database/mysql.js"

class ProductsRepository {

    async FindAll() {
        return new Promise ((resolve, reject) => {
            const sql = "Select nome, preco, qtd_em_estoque from produtosv;";
            conexao.query(sql, (error, result) => {
                if(error) {
                    reject("não foi possível localizar!")
                }
                else {
                    const line =  JSON.parse(JSON.stringify(result))
                    resolve(line)
                }
            })
        })
    }    
    async Create(productsData) {
        return new Promise((resolve, reject) => {
            const sql = "INSERT INTO produtsv SET ?;";
            conexao.query(sql, productsData, (error, result) => {
                if (error) {
                    reject("Não foi possível cadastrar!");
                } else {
                    const rows = JSON.parse(JSON.stringify(result));
                    resolve(rows);
                }
            });
        });
    }
}

export default new ProductsRepository();