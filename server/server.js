const express = require('express');
const { join } = require('path');
const { createServer } = require('livereload');
const connectLiveReload = require('connect-livereload');

const srcDir = join(__dirname, '..', 'src');

// The LiveReload server watches for file changes and notifies the browser
const lrServer = createServer();
lrServer.watch(srcDir);

// The express app is the main server
const app = express();

// connectLiveReload should come before the static and dynamnic routes. It
// injects a livereload script into the browser. This script connects to
// lrServer and refreshes the page when notified of changes.
app.use(connectLiveReload());
app.use(express.static(srcDir));

app.get('/hello', (req, res) => {
  const param = req.query;
  res.send(`Hi, ${param["first-name"]}, I hear you like ${param["favorite-food"]}`);
});

const server = app.listen(5678, () => {
  const addr = server.address();
  const addrString =
    typeof addr === 'string' ? addr : `http://localhost:${addr?.port}`;
  console.log(`Listening at ${addrString}`);
  console.log('Press CTRL-C to exit');
});
