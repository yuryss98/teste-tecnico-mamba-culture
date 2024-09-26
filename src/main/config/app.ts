import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import categoryRoute from '../routes/category.routes';

const app = express();

app.use(morgan('combined'));
app.use(helmet());
app.use(express.json());

app.use('/api', categoryRoute);

export default app;
