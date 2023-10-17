```javascript
const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const db = require('./config/db');
const passport = require('./config/passport');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const strainsRoutes = require('./routes/strains');
const cultivatorsRoutes = require('./routes/cultivators');
const dispensariesRoutes = require('./routes/dispensaries');
const usersRoutes = require('./routes/users');

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());
  server.use(passport.initialize());

  server.use('/api/strains', strainsRoutes);
  server.use('/api/cultivators', cultivatorsRoutes);
  server.use('/api/dispensaries', dispensariesRoutes);
  server.use('/api/users', usersRoutes);

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  db.sync().then(() => {
    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  });
});
```