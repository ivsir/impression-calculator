// routes/apiRoutes.js
const express = require("express");
const fetch = require("node-fetch");
const dotenv = require("dotenv");

const router = express.Router();
dotenv.config();
const apiKey = process.env.API_KEY;

const collectionId = "65fb1d38166b51f1ba8e1d38";
const siteId = "65e8035562f0a5e67d899e93";
const productId = `65fb30e6ac50534dc47485b5`;

const url = "https://api.webflow.com/v2";
const getProductsURL = `https://api.webflow.com/v2/sites/${siteId}/products`;
const getProductURL = `https://api.webflow.com/v2/sites/${siteId}/products/${productId}`;
const getItemsURL = `https://api.webflow.com/v2/collections/${collectionId}/items`;
const getOrdersURL = `https://api.webflow.com/v2/sites/${siteId}/orders`;
const getUserURL = "https://api.webflow.com/v2/token/authorized_by";
const orderId = ``;

// Define request handler functions
async function getProductsHandler(req, res) {
  try {
    const response = await fetch(getProductsURL, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    });
    const data = await response.json();
    console.log(data)
    console.log("success")
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getProductHandler(req, res) {
  try {
    const response = await fetch(getProductURL, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    });
    const data = await response.json();
    console.log(data)
    console.log("success")
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


async function getItemsHandler(req, res) {
  try {
    const response = await fetch(getItemsURL, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    });
    const data = await response.json();
    console.log(data)
    console.log("success")
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getOrdersHandler(req, res) {
  try {
    const response = await fetch(getOrdersURL, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    });
    const data = await response.json();
    console.log(data)
    console.log("success")
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getUserHandler(req, res) {
  try {
    const response = await fetch(getUserURL, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    });
    const data = await response.json();
    console.log(data)
    console.log("success")
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function updateOrderHandler(req, res) {
  try {
    const response = await fetch(getOrdersURL, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    });
    const data = await response.json();
    console.log(data)
    console.log("success")
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Register request handlers with Express Router
router.get('/products', getProductsHandler);
router.get(`/products/${productId}`, getProductHandler);
router.get('/items', getItemsHandler);
router.get('/orders', getOrdersHandler);
router.get('/user', getUserHandler);
router.put(`/orders/${orderId}`, updateOrderHandler);

module.exports = router;
