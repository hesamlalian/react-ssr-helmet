import path from 'path';
import fs from 'fs';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';

import App from '../src/App';
import { Helmet } from 'react-helmet';

const PORT = process.env.PORT || 3006;
const app = express();

app.get('/', (req, res) => {
  const app =  ReactDOMServer.renderToString(<App />);
  const helmet = Helmet.renderStatic();
  const indexFile = path.resolve('./public/index.html');

  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    const html = `<!DOCTYPE html>
    <html lang="en">
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
      </head>
      <body>
        <div id="root">
          ${ app }
        </div>
      </body>
    </html>
  `

    return res.send(html);
    
  });
});

app.use(express.static('./public'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
