import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import setupRoutes from './routes';

const app = express();

app.use(morgan('combined'));
app.use(helmet());
app.use(express.json());

setupRoutes(app);

export default app;
