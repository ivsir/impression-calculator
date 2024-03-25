// server/app.js
const express = require("express");
const apiRoutes = require("./routes/index.js"); // Import the routes from apiRoutes.js

const app = express();
const port = 3000;

app.use(express.json()); // Parse JSON bodies

// Register API routes
app.use('/impression-graphics', apiRoutes); // Mount the apiRoutes under '/api'

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
