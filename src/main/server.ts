import 'dotenv/config';
import app from './config/app';

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
