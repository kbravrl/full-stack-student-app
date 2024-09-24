const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "K0645499b%",
    database:"crud"
});

app.get('/', (req, res) => {
    const query = "SELECT * FROM student";
    db.query(query, (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    });
});

app.post('/create', (req, res) => {
    const query = "INSERT INTO student (`name`, `surname`, `email`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.surname,
        req.body.email
    ]
    db.query(query, [values], (err, data) => {
        if(err) return console.log(err)
        return res.json(data);
    });     
});

app.put('/update/:id', (req, res) => {
    const query = "UPDATE student SET `name` = ?, `surname` = ?, `email` = ? WHERE id = ?"
    const id = req.params.id;
    const values = [
        req.body.name,
        req.body.surname,
        req.body.email
    ]
    
    db.query(query, [...values, id], (err, data) => {
        if(err) return console.log(err)
        return res.json(data);
    });     
});

app.delete('/student/:id', (req, res) => {
    const query = "DELETE FROM student WHERE id = ?"
    const id = req.params.id;

    db.query(query, [id], (err, data) => {
        if(err) return console.log(err)
        return res.json(data);
    });     
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});