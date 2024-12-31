import express from 'express';
// eslint-disable-next-line import/extensions
import router from './routes/index.js';
/**
 * creates an express server
 */

const app = express();
const PORT = 1245;

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

export default app;
