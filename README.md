# Arithmetic Operations API

This API allows users to perform arithmetic operations like addition, subtraction, multiplication, and division. The API endpoints use HTTP methods such as POST for data transfer and the server validates the incoming data before processing.

Make sure you have the following tools installed on your machine:

- [Node.js](https://nodejs.org/) - JavaScript runtime built on Chrome's V8 JavaScript engine.
- [npm](https://www.npmjs.com/) - Node Package Manager, typically installed with Node.js.

## Setting Up the Project

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/devVinit/node-arithmetic-operations.git
   cd node-arithmetic-operations
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

   This command will install all the project dependencies defined in the `package.json` file.

## Running the Project Locally

Now that the project is set up, you can run it locally. Follow the steps below:

**Start the Application:**

```bash
npm start
```

This command will start your Node.js application. Visit [http://localhost:4000](http://localhost:4000) in your browser to see your application running.

## Project Structure

Here is an overview of the project structure:

## Endpoints

1. Addition

   - URL: `/add`
   - Method: `POST`

2. Subtraction

   - URL: `/subtract`
   - Method: `POST`

3. Multiplication

   - URL: `/multiply`
   - Method: `POST`

4. Division
   - URL: `/divide`
   - Method: `POST`

## Sample Data

For the endpoints, send the data as JSON in the following format:

```json
{
  "numberA": 10,
  "numberB": 2
}
```
