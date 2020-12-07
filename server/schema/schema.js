const graphql = require('graphql')
//destructering 
//pay attention to capitalization
const {GraphQLObjectType} = graphql

//defining a new type
//this is a function that takes in an object
const BookType = new GraphQLObjectType({
    name: 'Book',
    //fields property is actually a function
    //the reason it needs to be a function is when we have multiple types and 
    //they have references to one another then unless we wrap them in a function one type might 
    //not necessarily know what another type is.
    fields: () => ({
        //we have to use a graphql string (in type) in order for it to understand
        id: {type:}
    })
})