import express from 'express'

import ProductsController from './SRC/Controllers/ProductsController.js';

const app = express()

app.use(express.json())

app.get('/produtos', ProductsController.index())

// app.get('/produtos', (_req, res) => {
//   try {
//     const produtos = ProductsController.index();
//     res.json(produtos); 
//   } catch (error) {
//     res.status(500).send(error.message); 
//   }
// });


export default app;