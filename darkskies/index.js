const express = require('express');
const port    = process.env.PORT || 4000;
// link the routes
const routes   = require('./config/routes');
const app     = express();
const dest    = `${__dirname}/public`;

app.use(express.static(dest));
// link routes
app.use('/api', routes);

app.get('/*', (req, res) => res.sendFile(`${dest}/index.html`));

app.listen(port, () => console.log(`Express has started on port: ${port}`));
