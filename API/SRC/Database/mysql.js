import mysql from 'mysql2' 

const conexao = mysql.createConnection({
    user: 'root',
    password: 'password',
    database: 'database',
    host: 'localhost',
    port: 3306
})

conexao.connect()

export default conexao