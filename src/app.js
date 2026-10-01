const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
const productRoutes = require('./routes/products');

const app = express();

app.use(express.json());

// หน้า Swagger UI และ Route สำหรับ Spec JSON ดิบ
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get('/api-docs.json', (req, res) => res.json(swaggerSpec));

// API Routes
app.use('/api/products', productRoutes);

// Handling 404
app.use((req, res) => res.status(404).json({ error: 'Not found' }));

module.exports = app;