const express = require('express');
const { Pool } = require('pg');
const app = express();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const port = 3000;

app.use(express.json());

const pool = new Pool({
    user: 'admin',
    password: '1234',
    host: 'localhost',
    port: 5432,
    database: 'auth_db'
});

app.post('/register', async (req, res) => {
    const { username, password, first_name, last_name, phone } = req.body;

    //check if user already exists
    let query = `
        SELECT * FROM users WHERE username = $1
    `;
    const checkUser = await pool.query(query,[username]);
    if (checkUser.rows.length > 0) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    query = `
        INSERT INTO users (username, password, first_name, last_name, phone)
        VALUES ($1, $2, $3, $4, $5);
    `;
    await pool.query(query, [username, hashedPassword, first_name, last_name, phone]);
    res.status(201).json({ message: 'User registered successfully' });
});

app.post('/login', async(req, res) => {
    const { username, password } = req.body;
    let query = `
        SELECT * FROM users WHERE username = $1
    `

    const users = await pool.query(query,[username])
    if(users.rows.length === 0){
        return res.status(400).json({ message: 'User or password is incorrect' });
    }

    const user = users.rows[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid){
        return res.status(400).json({ message: 'User or password is incorrect' });
    }

    const token = jwt.sign({ id: user.id }, 'secret_key', { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', access_token: token });
});

app.get('/profile',(req,res,next) => {
    const token = req.headers.authorization.split(' ')[1];

    if(!token){
        return res.status(401).json({ message: 'Unauthorized' });
    }
    const decoded = jwt.verify(token, 'secret_key');
    req.user = decoded.id;
    next();
},async (req, res) => {
    const query = `
        SELECT * FROM users WHERE id = $1
    `
    const user = await pool.query(query,[req.user]);
    res.status(200).json(user.rows[0]);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

