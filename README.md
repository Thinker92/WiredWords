# WiredWords Blog Site

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

WiredWords is a CMS-style blog site designed for developers to publish articles, blog posts, and their thoughts and opinions on various tech topics. It follows the Model-View-Controller (MVC) architectural pattern and uses technologies such as Express.js, Handlebars.js, Sequelize, and express-session for user authentication.

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install all dependencies.
4. Create a `.env` file for environment variables with your MySQL user, password, and database name.
5. Run `npm run seed` to populate the database with initial data.
6. Run `npm start` to start the application.

## Usage

WiredWords provides a user-friendly interface for developers to publish and read tech-related blog posts. Users can perform the following actions:

- **Homepage**: Visit the homepage to see existing blog posts.
- **Login/Signup**: Click the "Login" or "Signup" option to create an account or log in.
- **Dashboard**: Once logged in, users can access their dashboard, where they can create new blog posts, view their existing posts, edit or delete posts, and log out.
- **Create New Post**: In the dashboard, users can create new blog posts by providing a title and content.
- **Edit/Delete Posts**: Users can edit or delete their existing posts in the dashboard.
- **Leave Comments**: Users can leave comments on blog posts when viewing them.
- **Session Management**: The application supports session management, requiring users to log in again after being idle for a set time.

### API Endpoints

The application exposes API endpoints for managing categories, products, and tags. You can test these API routes using tools like Postman or Insomnia.

### Categories

- **GET all categories**: `http://localhost:3001/api/categories`
- **GET a single category by ID**: `http://localhost:3001/api/categories/:id`
- **POST a new category**: `http://localhost:3001/api/categories`
  - Body: `{"category_name": "Electronics"}`
- **PUT update a category by ID**: `http://localhost:3001/api/categories/:id`
  - Body: `{"category_name": "Electronics and Gadgets"}`
- **DELETE a category by ID**: `http://localhost:3001/api/categories/:id`

### Products

- **GET all products**: `http://localhost:3001/api/products`
- **GET a single product by ID**: `http://localhost:3001/api/products/:id`
- **POST a new product**: `http://localhost:3001/api/products`
  - Body: `{"product_name": "Laptop", "price": 1000.00, "stock": 5, "tagIds": [1, 2]}`
- **PUT update a product by ID**: `http://localhost:3001/api/products/:id`
  - Body: `{"product_name": "High-end Laptop", "price": 2000.00}`
- **DELETE a product by ID**: `http://localhost:3001/api/products/:id`

### Tags

- **GET all tags**: `http://localhost:3001/api/tags`
- **GET a single tag by ID**: `http://localhost:3001/api/tags/:id`
- **POST a new tag**: `http://localhost:3001/api/tags`
  - Body: `{"tag_name": "Seasonal"}`
- **PUT update a tag by ID**: `http://localhost:3001/api/tags/:id`
  - Body: `{"tag_name": "Holiday Seasonal"}`
- **DELETE a tag by ID**: `http://localhost:3001/api/tags/:id`

## Contributing

1. Fork the project.
2. Create a new branch (`git checkout -b feature/fooBar`).
3. Commit your changes (`git commit -am 'Add some fooBar'`).
4. Push to the branch (`git push origin feature/fooBar`).
5. Create a new Pull Request.

## License

This project is licensed under the terms of the MIT License.


If you have any questions or need further information, please feel free to ask!
