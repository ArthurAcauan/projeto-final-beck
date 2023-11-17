const express = require('express');
const sqlite3 = require('sqlite3');

const app = express();
app.use(express.static('html'));

const PORT = 3030;

const db  = new sqlite3.Database('frasesMotivacionais.db');
db.run('CREATE TABLE IF NOT EXISTS Frases (id INTEGER PRIMARY KEY AUTOINCREMENT, descrição TEXT, autor TEXT)');

app.use(express.json());

app.listen(PORT, ()=> {
    console.log(`Servidor iniciando na porta ${PORT}`);
});


app.get('/frases', (req, res)=> {
    const db = new sqlite3.Database('frasesMotivacionais.db');
    const sql = `SELECT descrição,autor FROM frases`;
    
    
    db.all(sql, [], (erro, linhas) => {
        if(erro) throw erro;
        res.json(linhas);
    });
})

app.get('/frases/n/:numero', (req, res)=> {
    const db = new sqlite3.Database('frases.db');
    const sql = `SELECT descrição, autor FROM frases LIMIT ?`;
    
    db.all(sql, [req.params.numero], (erro, linhas) => {
        if(erro) throw erro;
        res.json(linhas);
    });
});

app.get('/frases/autoria/:nome', (req, res)=> {
    const db = new sqlite3.Database('frases.db');
    const sql = `SELECT descrição, autor FROM frases WHERE autor=?`;
    
    db.all(sql, [req.params.nome], (erro, linhas) => {
        if(erro) throw erro;
        res.json(linhas);
    });
});

app.get('/frases/aleatorio', (req, res)=> {
    const db = new sqlite3.Database('frases.db');
    const sql = `SELECT descrição, autor FROM frases`;
    
    db.all(sql, [], (erro, linhas) => {
        if(erro) throw erro;
        const nAleatorio = Number.parseInt(Math.random()*linhas.length)
        res.json(linhas[nAleatorio]);
    });
})
