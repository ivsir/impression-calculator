const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

const apiKey = '39ac4e9fb86175d6a4a56d337451471cc4cbd56d84fb5af150a2ee5cd2785bcc';
const collectionId = '65fb1d38166b51f1ba8e1d38';
const apiUrl = `https://api.webflow.com/v2/sites/${collectionId}`;

app.get('/products', async (req, res) => {
  try {
    const response = await fetch(apiUrl, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    });
    const data = await response.json();
    console.log(data)
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     authorization: `Bearer ${apiKey}`
//   }
// };

// fetch(`https://api.webflow.com/v2/sites/${collectionId}/products`, options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));