const express = require('express');
const app = express();
const port = 3000;
const version = "v1"
const router = require('./routes/routes')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// Endpoint pour servir la documentation Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



app.use (`/api/${version}/`, router)





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})