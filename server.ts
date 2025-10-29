import express, { Request, Response } from 'express';
import path from 'path';
import sql from 'mssql'; // Import mssql for database connection
import dotenv from 'dotenv';
import cors from 'cors'; // Import CORS for handling cross-origin requests

dotenv.config(); // Load environment variables from .env file

const app = express();
app.use(express.json()); // Enable JSON parsing for POST requests
app.use(cors()); // Enable CORS for all routes

/*// SQL Server connection configuration
const dbConfig = {
    user: process.env.DB_USER || 'asiacox03',  
    password: process.env.DB_PASSWORD || '163527',    
    server: process.env.DB_SERVER || 'ASIAMONET\\SQLEXPRESS',
    database: process.env.DB_NAME || 'BloodHavenDB',
    options: {
        encrypt: true, // Use true if using Azure SQL Database
        // Use 'true' for Azure SQL Database, 'false' for local SQL Server
        trustServerCertificate:false, // Change to true if using self-signed certificates
        // Use 'true' for local SQL Server, 'false' for Azure SQL Database
        enableArithAbort: true,
        trustedConnection: true,
        integratedSecurity: true,
        connectionTimeout: 30000
    },
};*/

// Test database connection on startup
sql.connect(dbConfig).then(() => {
    console.log('Successfully connected to SQL Server');
    console.log('Database config:', {
        server: dbConfig.server,
        database: dbConfig.database
    });
}).catch(err => {
    console.error('Failed to connect to SQL Server:', err);
});

// Serve static files (React front-end)
app.use(express.static(path.join(__dirname, 'build')));

// Serve React app for root route (i.e. /)
app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Route to insert a new contact into the database
app.post('/contacts', async (req: Request, res: Response) => {
    const { fullName, email, subject, message } = req.body;

    try {
        await sql.connect(dbConfig);

        // Use a parameterized query to avoid SQL injection
        const request = new sql.Request();
        request.input('FullName', sql.NVarChar, fullName);
        request.input('EmailAddress', sql.NVarChar, email);
        request.input('Subject', sql.NVarChar, subject);
        request.input('Message', sql.Text, message);

        // Insert the contact data into dbo.Contacts
        await request.query(`
            INSERT INTO dbo.Contacts (FullName, EmailAddress, Subject, Message)
            VALUES (@FullName, @EmailAddress, @Subject, @Message)
        `);

        // Send success message as JSON response
        res.status(200).json({ message: 'Contact information submitted successfully.' });
    } catch (err: any) {
        res.status(500).json({ message: 'Database error: ' + err.message });
    }
});

// Example API route to fetch donor data from the database
app.get('/donors', async (req: Request, res: Response) => {
    try {
        await sql.connect(dbConfig);

        // Query the Donors table (adjust query as needed)
        const result = await sql.query('SELECT * FROM dbo.Donors');

        // Send the data as JSON
        res.json(result.recordset);
    } catch (err: any) {
        res.status(500).json('Database error: ' + err.message);
    }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
