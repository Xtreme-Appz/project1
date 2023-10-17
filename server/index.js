```javascript
const express = require('express');
const next = require('next');
const dbConnect = require('./utils/dbConnect');
const errorHandler = require('./utils/errorHandler');
const strainsRoutes = require('./routes/strains');
const cultivatorsRoutes = require('./routes/cultivators');
const dispensariesRoutes = require('./routes/dispensaries');
const usersRoutes = require('./routes/users');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Connect to database
  dbConnect();

  // Middleware
  server.use(express.json());

  // Routes
  server.use('/api/strains', strainsRoutes);
  server.use('/api/cultivators', cultivatorsRoutes);
  server.use('/api/dispensaries', dispensariesRoutes);
  server.use('/api/users', usersRoutes);

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.use(errorHandler);

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
}).catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});
```