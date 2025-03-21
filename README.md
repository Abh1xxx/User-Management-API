# User Management System

## Description
This project defines a Mongoose schema and model for managing user data in a MongoDB database. The schema enforces data validation and integrity, ensuring that user information is stored securely.

## Features
- Defines a `User` schema with fields: `name`, `email`, `password`, `age`, and `createdAt`
- Ensures `email` follows a valid format and is unique
- Hashes passwords before storing them for security
- Implements validation rules for required fields
- Uses Mongoose middleware (`pre-save`) for password hashing

## Technologies Used
- Node.js
- MongoDB
- Mongoose

## Installation
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <project-folder>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Usage
1. Set up your MongoDB connection in your Node.js project.
2. Import the `User` model where needed:
   ```javascript
   const User = require('./models/User');
   ```


## License
This project is licensed under the MIT License.

