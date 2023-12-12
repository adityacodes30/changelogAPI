# NODE api with postgres modelled for <a href='https://chronos.framer.website/'>Chronos</a>


### Changelog API Documentation
<i> Note : This is a WIP [Work in Progress] </i>

## Introduction
Welcome to the Changelog API documentation! This API, built using the Express framework in Node.js, is designed to manage and track changes and updates for products within an application. Explore the following endpoints for various operations related to products, updates, and update points.

## API Endpoints

### Product Endpoints

#### 1. Get All Products
- **Endpoint:** `GET /product`
- **Description:** Retrieve a list of all products.

#### 2. Get One Product
- **Endpoint:** `GET /product/:id`
- **Description:** Retrieve details for a specific product identified by its unique ID.

#### 3. Update Product
- **Endpoint:** `PUT /product/:id`
- **Description:** Update product details. Requires a valid request body with the `name` property.

#### 4. Create Product
- **Endpoint:** `POST /product`
- **Description:** Create a new product. Requires a valid request body with the `name` property.

#### 5. Delete Product
- **Endpoint:** `DELETE /product/:id`
- **Description:** Delete a product identified by its unique ID.

### Update Endpoints

#### 1. Get All Updates
- **Endpoint:** `GET /update`
- **Description:** Retrieve a list of all updates.

#### 2. Get One Update
- **Endpoint:** `GET /update/:id`
- **Description:** Retrieve details for a specific update identified by its unique ID.

#### 3. Update Update
- **Endpoint:** `PUT /update/:id`
- **Description:** Update update details. Supports optional fields like `title`, `body`, `status`, and `version`.

#### 4. Create Update
- **Endpoint:** `POST /update`
- **Description:** Create a new update. Requires a valid request body with `title`, `body`, and `productId`.

#### 5. Delete Update
- **Endpoint:** `DELETE /update/:id`
- **Description:** Delete an update identified by its unique ID.

### Update Point Endpoints

#### 1. Get All Update Points
- **Endpoint:** `GET /updatepoint`
- **Description:** Retrieve a list of all update points.

#### 2. Get One Update Point
- **Endpoint:** `GET /updatepoint/:id`
- **Description:** Retrieve details for a specific update point identified by its unique ID.

#### 3. Update Update Point
- **Endpoint:** `PUT /updatepoint/:id`
- **Description:** Update update point details. Supports optional fields like `name` and `description`.

#### 4. Create Update Point
- **Endpoint:** `POST /updatepoint`
- **Description:** Create a new update point. Requires a valid request body with `name`, `description`, and `updateId`.

#### 5. Delete Update Point
- **Endpoint:** `DELETE /updatepoint/:id`
- **Description:** Delete an update point identified by its unique ID.

## Error Handling
The API provides basic error handling for server errors. In case of an error, a JSON response with a generic error message is returned.

## Middleware
The API uses Express Validator for input validation and a custom middleware (`handleInputErrors`) to handle input validation errors.

## Getting Started
To get started with the Changelog API, clone the repository and follow the setup instructions in the project's README. Explore the codebase and use the provided endpoints to manage and track changes in your application.

## Conclusion
The Changelog API simplifies the process of tracking and managing product updates. Use the provided endpoints to interact with the API and enhance the change management process in your application.
