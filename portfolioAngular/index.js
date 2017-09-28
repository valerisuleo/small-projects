// 1 require pkg
const express = require('express');
const port    = process.env.PORT || 8000;
const dest    = `${__dirname}`;

// 3 create an express app
const app = express();


app.use(express.static(dest));

app.get('/*', (req, res) => res.sendFile(`${dest}/index.html`));


// 5 assign port
app.listen(port, () => console.log(`Express is listening to port ${port}`));
