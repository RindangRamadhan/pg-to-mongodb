# pg-to-mongodb

A Node.js script to convert an SQL database to a MongoDB database.

Features

- Automatically detects the primary key for each SQL table and copys it to the MongoDB _id field.
- Optionally remaps replaces and primary keys with MongoDB ObjectId's and remaps foreign keys.
- Automatically copies across types correctly (eg numbers and dates).

## Usage

### Install 

First install dependencies:

    npm install or yarn install

### Setup

Edit config.js. Add the connection string for your SQL database. Modify the MongoDB connection string if necessary. Set the name of your target database in MongoDB.

### Run

    node index.js

### Wait

It might take some time to replicate!