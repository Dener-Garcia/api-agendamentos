import sqlite3 from 'sqlite3'

const SQLite = sqlite3.verbose()

// funcao com promisse para facilitar querys e usar async await
/**
 * Função para executar comandos SQL no banco de dados.
 * @param {string} command - O comando SQL a ser executado.
 * @param {Array} params - Os parâmetros a serem passados para o comando SQL.
 * @param {string} method - O método de execução (all, get, run).
 * @returns {Promise} - Retorna uma promessa que resolve com os resultados ou rejeita com o erro.
 */

function query(command, params, method = 'all') {
    return new Promise(function (resolve, reject) {
        db[method](command, params, function (error, result) {
            if (error) {
                reject(error)
            }
            else {
                resolve(result)
            }
        })
        })
}

// Obtém o diretório atual do arquivo

const dbPath = './src/database/database'

const db = new SQLite.Database(dbPath, SQLite.OPEN_READWRITE | SQLite.OPEN_CREATE, (err) => {
    if (err) {
        return console.log("erro ao conectar ao banco: ", err)
    } else {
        return console.log("Conectado ao banco")
    }
})

export { 
    db,
    query
 }