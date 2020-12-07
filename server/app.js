const express = require('express');
//invoke the function to create our app
const app = express();
//tell the app to listen to port
app.listen(4000, () => {
    //this is the callback function that will tell us when the port is working
    console.log('now listening for requests on port 4000');
});