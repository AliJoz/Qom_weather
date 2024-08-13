const express = require('express');
const cors = require('cors');
const sql = require('mssql');

const app = express();
app.use(cors());
app.use(express.json());

const config = {
    user: 'weather',
    password: 'weather',
    server: 'DESKTOP-4AH15UV', 
    database: 'weather',
    options: {
        encrypt: true, // برای Azure باید این گزینه فعال باشد
        trustServerCertificate: true // این گزینه در صورت استفاده از SSL غیرفعال می‌شود
    }
};

sql.connect(config, err => {
    if (err) {
        console.log('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

app.get('/data', async (req, res) => {
    try {
        const result = await sql.query`SELECT * FROM weather_data`;
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
