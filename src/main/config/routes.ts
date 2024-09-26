import { Express, Router } from 'express';
import fs from 'fs';
import { join } from 'path';

export default (app: Express): void => {
  const router = Router();
  app.use('/api', router);

  const routesPath = join(__dirname, '..', 'routes');
  fs.readdirSync(routesPath)
    .filter((file) => file.endsWith('routes.js') || file.endsWith('routes.ts'))
    .forEach(async (file) => {
      const route = await import(join(routesPath, file));
      route.default(router);
    });
};
