import express from 'express';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import taskRoutes from './routes/taskRoutes';
import { specs } from './swagger';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

// Documentación Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, {
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: 'Task Manager API Documentation'
}));

// API routes
app.use(taskRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Task Manager API is running' });
});

app.listen(port, () => {
  console.log(`Servidor backend corriendo en http://localhost:${port}`);
  console.log(`Documentación Swagger disponible en http://localhost:${port}/api-docs`);
});
