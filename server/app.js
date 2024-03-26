// server/app.js
const express = require("express");
const path = require("path");
const apiRoutes = require("./routes/index.js"); // Import the routes from apiRoutes.js
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors()); // Enable CORS for all routes

// Register API routes
// app.use(express.static(path.join(__dirname, "../webflow/impression-graphics")));
app.use("/impression-graphics", apiRoutes); // Mount the apiRoutes under '/impression-graphics'

app.use(express.static("../webflow"));

// app.get('/', (req,res) => {
//   res.status.send({info: 'preset text'})
// })

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
