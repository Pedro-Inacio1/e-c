import mysql from 'mysql2' 

const conexao = mysql.createConnection({
    user: 'root',
    password: 'yuuto4549',
    database: 'produtos',
    host: 'localhost',
    port: 3306
})

conexao.connect()

export default conexao