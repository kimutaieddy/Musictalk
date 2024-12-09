onst express = require('express');
const app = express();
const cors = require('cors');

app.use(cors()) ;

app.get('/', (req, res) => {
      res.send('Hello from our server!')
});

app.listen(8080,'0.0.0.0' () => {
      console.log('server listening on port 8080')
}) ;