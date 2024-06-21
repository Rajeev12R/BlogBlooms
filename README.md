
---

# BlogBlooms

BlogBlooms is a web application for blogging built using Node.js, Express.js, MongoDB, and Bootstrap. It allows users to sign in, sign up, write and manage their blogs.

## Features

- User authentication (sign in, sign up) with password hashing for security.
- Ability to write and publish blogs.
- Responsive UI using Bootstrap for a seamless experience across devices.
- User profile management with basic role-based access (USER and ADMIN).

## Technologies Used

- **Backend**: Node.js, Express.js, MongoDB (mongoose for ORM)
- **Frontend**: HTML, CSS (Bootstrap), JavaScript
- **Database**: MongoDB
- **Other Tools**: npm (Node Package Manager), Bootstrap CDN for styling, bcrypt for password hashing

## Installation

1. Clone the repository:

   ```bash
   git clone <https://github.com/Rajeev12R/BlogBloom.git>
   cd BlogBlooms
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up MongoDB:
   - Install MongoDB locally or use a cloud-based MongoDB service.
   - Update the MongoDB connection URI in `app.js` or `.env` file if used.

4. Start the server:

   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:8000` to see the application running.

## Folder Structure

```
BlogBlooms/
├── models/         # Mongoose models (e.g., User model)
├── routes/         # Express routes (e.g., user.js, blog.js)
├── views/          # EJS templates (e.g., home.ejs, signin.ejs, signup.ejs)
├── public/         # Static assets (e.g., images, CSS)
├── app.js          # Entry point of the application
└── README.md       # Project documentation
```

## Usage

- Navigate to `http://localhost:8000` in your browser to access the homepage.
- Use the navigation bar to sign in, sign up, or access other features based on your role.

## Contributing

Contributions are welcome! Feel free to open issues or pull requests for any improvements or fixes.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to expand on each section based on additional functionalities or specific configurations in your project. Adjust the paths and details as per your actual project structure and setup.
