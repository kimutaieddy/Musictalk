const express = require('express');
const app = express(); 


console.log(app);
app.listen(8080, (err) => {
    if (err) {
        console.error('Failed to start server:', err);
    } else {
        console.log('Server is running on port 8080');
    }
});