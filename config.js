const Pool = require('pg').Pool
const postgres = new Pool({
    user: 'root',
    host: 'localhost',
    database: 'db_name',
    password: '',
    port: 5432,
})

module.exports = {

    postgresConnetion: postgres, // Insert your connection postgre here.
    mongoConnectionString: "<mongoConnectionString>", // This puts the resulting database in MongoDB running on your local PC.
    targetDatabaseName: "<targetDatabaseName>", // Specify the MongoDB database where the data will end up.
    skip: [
        "sql-table-to-skip-1", // Add the tables here that you don't want to replicate to MongoDB.
        "sql-table-to-skip-2"
    ],
    remapKeys: false // Set this to false if you want to leave table keys as they are, set to true to remap them to MongoDB ObjectId's.
};