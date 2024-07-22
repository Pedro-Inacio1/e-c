import express from 'express';

import ProductsController from './SRC/Controllers/ProductsController.js';
import RegisterController from './SRC/Controllers/RegisterController.js';
import LoginController from './SRC/Controllers/LoginController.js'

const app = express()

app.use(express.json())

app.post('/register-products', ProductsController.Store)

app.post('/register-user', RegisterController.storage)

app.get('/products', ProductsController.Show)

app.get('/login', LoginController.Login)

export default app;