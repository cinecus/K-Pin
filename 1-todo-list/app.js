const express = require('express');
const app = express();

const { Pool } = require('pg');

const pool = new Pool({
    user: 'admin',
    password: '1234',
    host: 'localhost',
    port: 5432,
    database: 'todo_db'
});

// Test database connection
pool.connect((err, client, done) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Successfully connected to database');
        done();
    }
});


app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello Todo List App');
})

app.get('/todos', async (req, res) => {
    const query = `
        SELECT * FROM todo;
    `;
    const result = await pool.query(query);
    res.status(200).json(result.rows);
})

app.get('/todos/:id', async (req, res) => {
    const { id } = req.params;
    const query = `
        SELECT * FROM todo WHERE id = $1;
    `;
    const result = await pool.query(query, [id]);
    if (result.rows.length === 0) {
        return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json(result.rows[0]);
})

app.post('/todos', async (req, res) => {
    const { title, due_date,status } = req.body;

    const query = `
        INSERT INTO todo (title,status, due_date)
        VALUES ($1, $2, $3)
        RETURNING *;
    `;
    
    await pool.query(query, [title, status, due_date]);
    res.status(201).json({ message: 'Todo created successfully' });
});

app.put('/todos/:id', async (req, res) => {
    const { id } = req.params;
    const { title, status, due_date } = req.body;
    const query = `
        UPDATE todo SET title = $1, status = $2, due_date = $3 WHERE id = $4;
    `;
    await pool.query(query, [title, status, due_date, id]);
    res.status(200).json({ message: 'Todo updated successfully' });
})

app.delete('/todos/:id', async (req, res) => {
    const { id } = req.params;
    const query = `
        DELETE FROM todo WHERE id = $1;
    `;
    await pool.query(query, [id]);
    res.status(200).json({ message: 'Todo deleted successfully' });
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

