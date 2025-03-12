User Management System

Description

This project defines a Mongoose schema and model for managing user data in a MongoDB database. The schema enforces data validation and integrity, ensuring that user information is stored securely.

Features

Defines a User schema with fields: name, email, password, age, and createdAt

Ensures email follows a valid format and is unique

Hashes passwords before storing them for security

Implements validation rules for required fields

Uses Mongoose middleware (pre-save) for password hashing

Technologies Used

Node.js

MongoDB

Mongoose

bcrypt for password hashing

Installation

Clone the repository:

git clone <repository-url>
cd <project-folder>

Install dependencies:

npm install

Usage

Set up your MongoDB connection in your Node.js project.

Import the User model where needed:

const User = require('./models/User');

Create a new user:

const newUser = new User({
    name: 'John Doe',
    email: 'johndoe@example.com',
    password: 'securepassword123',
    age: 25
});

await newUser.save();
console.log('User saved successfully');

License

This project is licensed under the MIT License.

 