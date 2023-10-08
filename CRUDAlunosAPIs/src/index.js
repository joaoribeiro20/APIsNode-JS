const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL
    
})
//console.log(pool)

const PORT = 3333;
const app = express();

app.use(express.json());

app.get('/',  (req, res) => { console.log('olá mundo') });

app.get('/alunos', async (req, res) => {
    try {
        const  rows  = await pool.query('SELECT * FROM alunos')
        console.log(rows)
        console.log('')
        return res.status(200).send(rows)
        
    } catch (error) {
        return res.status(400).send(error)
    }
});



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// Rotas para CRUD
//criar
//ler
//atualiuzar
//deletar

// Rota de criação (Create)



