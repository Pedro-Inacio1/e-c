import mysql from 'mysql'

const conexao = mysql.createConnection({
    user: 'root',
    password: 'yuuto4549',
    database: 'produtos', 
    host: 'localhost',
    port: 8000
})

export default conexao;