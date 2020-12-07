const express = require('express');
const graphqlHTTP = require('express-graphql')
//invoke the function to create our app
const app = express();
//function fires whenever a request for graphql is made
app.use('graphql', graphHTTP({
    //must pass a schema through here
}))
//tell the app to listen to port
app.listen(4000, () => {
    //this is the callback function that will tell us when the port is working
    console.log('now listening for requests on port 4000');
});