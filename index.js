const express = require('express');
const app = express();

const { proxy, scriptUrl } = require('rtsp-relay')(app);

const handler = proxy({
  url: `rtsp://${process.env.MTX_PATH}:8554/mystream`,
  // if your RTSP stream need credentials, include them in the URL as above
  verbose: false,
});


// the endpoint our RTSP uses
app.ws('/api/stream', handler);


app.get('/', (req, res) =>
  res.send(`
  <canvas id='canvas'></canvas>

  <script src='${scriptUrl}'></script>
  <script>
    loadPlayer({
      url: 'ws://localhost:2000/api/stream',
      canvas: document.getElementById('canvas')
    });
  </script>
`),
);

app.listen(2000);
