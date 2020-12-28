import * as express from 'express';
import routes from './routes';
import * as passport from 'passport';

import './middleware/localstrategy';
import './middleware/bearerstrategy';
import '../utils/debug';


const path = require('path');


const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(passport.initialize());

app.use(routes);

// refresh fix
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    });
  });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
