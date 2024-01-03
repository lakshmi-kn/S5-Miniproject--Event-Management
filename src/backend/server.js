const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST'],
    credentials: true,
}));
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "registrations"
});

db.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL:", err);
        return;
    }
    console.log("Connected to MySQL");
});

app.post('/register', (req, res) => {
    const body = req.body;
    const sql = "INSERT INTO login (FirstName, LastName, PhoneNo, Email, Password) VALUES(?)";
    const values = [
        req.body.FirstName,
        req.body.LastName,
        req.body.PhoneNo,
        req.body.Email,
        req.body.Password 
    ]
    db.query(sql, [values],(err,data) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: "Database error", message: err.message });
        }
        return res.json(data);
    })
    // res.send('Status check');
    // res.send(values)
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE `Email` = ? AND `Password` = ?";
    console.log(req.body)
    db.query(sql, [req.body.Email, req.body.Password], (err, data) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: "Database error", message: err.message });
        }

        if (data.length > 0) {
            return res.json({ status: "Success", user: data[0] }); // Consider sending user details instead of "Success"
        } else {
            return res.json({ status: "Failed" });
        }
    });
});

app.get('/register', (req, res) => {
    console.log('Status');
    res.send('Status');
});


const server = app.listen(8081, '0.0.0.0', () => {
    const { port, address } = server.address();
    console.log(`Express server started on port ${port} at ${address}`);
});
