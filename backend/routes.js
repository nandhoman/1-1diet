// Load the MySQL pool connection
const pool = require('../config/db.config.js');

app.get('/recipes', (request, response) => {
    pool.query('SELECT * FROM recipes', (error, result) => {
        if (error) throw error;
 
        response.send(result);
    });
});

