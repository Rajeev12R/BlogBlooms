# BlogBlooms

BlogBlooms is a web application for creating and managing blog posts. It allows users to sign up, sign in, create blog posts with cover images, and view existing blog posts.

## Table of Contents

- [Introduction](#introduction)
- [Folder Structure](#folder-structure)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

BlogBlooms is built using Node.js and Express.js for the server-side logic, MongoDB as the database with Mongoose for modeling, and EJS for server-side rendering of views. Authentication is handled using JWT tokens stored in cookies. This application provides a simple and intuitive interface for users to manage their blog posts.

## Folder Structure

``` markdown 
BlogBlooms/
├── middlewares/
│   └── authentication.js     # Middleware for handling user authentication
├── models/
│   ├── blog.js               # Mongoose model for Blog schema
│   └── user.js               # Mongoose model for User schema
├── public/
│   ├── images/               # Static images used in the application
│   └── uploads/              # Uploaded blog cover images stored here
│       ├── 1719061055716-daria-nepriakhina-xY55bL5mZAM-unsplash.jpg
│       ├── 1719061306854-a-l-vrqa96bolAc-unsplash.jpg
│       ├── 1719061868910-glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg
│       └── 1719063760643-brigitte-tohm-EAay7Aj4jbc-unsplash.jpg
├── routes/
│   ├── blog.js               # Express routes for blog-related operations
│   └── user.js               # Express routes for user-related operations
├── services/
│   └── authentication.js     # Services for JWT token management
├── views/
│   ├── partials/
│   │   ├── head.ejs          # Partial template for HTML head section
│   │   └── nav.ejs           # Partial template for navigation bar
│   ├── addBlog.ejs           # EJS template for creating new blog posts
│   ├── home.ejs              # EJS template for displaying home page with blog posts
│   ├── signin.ejs            # EJS template for user sign-in page
│   └── signup.ejs            # EJS template for user sign-up page
└── README.md                 # This README file
```

## Features

- User authentication (sign up, sign in, logout) using JWT tokens stored in cookies.
- Create, read, update, and delete (CRUD) operations for blog posts.
- Uploading and displaying cover images for blog posts.
- Responsive and intuitive user interface with Bootstrap CSS framework.

## Setup Instructions

To set up BlogBlooms locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Rajeev12R/BlogBloom.git
   cd BlogBloom
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Define variables such as `PORT`, `MONGODB_URI`, and `JWT_SECRET`.

4. Start the application:
   ```bash
   npm start
   ```

5. Open your web browser and navigate to `http://localhost:8000` to view the application.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS (Embedded JavaScript)
- JWT (JSON Web Tokens)
- Multer (for file uploads)
- Bootstrap (for styling)

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

This README.md file provides a comprehensive overview of your project, including its purpose, folder structure, features, setup instructions, technologies used, contribution guidelines, and licensing information. Adjust the content as per your specific project details and preferences.
