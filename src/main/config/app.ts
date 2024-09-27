import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import setupRoutes from './routes';
import swaggerDocument from '../docs/swagger.json';
import { errorHandler } from '../middlewares/error-handle';
import 'express-async-errors';

const app = express();

app.use(morgan('combined'));
app.use(helmet());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
setupRoutes(app);
app.use(errorHandler);
export default app;
