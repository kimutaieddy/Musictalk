const express = require('express');
const app = express(); 


console.log(app);
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
