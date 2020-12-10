const graphql = require('graphql')
const _ = require('lodash');
//why was this here- probably put itself there??
// const { buildResolveInfo } = require('graphql/execution/execute')


//dummy data for population and checking routes

var books = [
    {name: 'Name of the Wind', genre: 'Fantasy', id: '1'},
    {name: 'The Final Empire', genre: 'Fantasy', id: '2'},
    {name: 'The Long Earth', genre: 'Sci-Fi', id: '3'}
];
    




//destructuring 
//pay attention to capitalization
//have to had a string to describe the types below
//added graphqlschema here to export
const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql

//defining a new type
//this is a function that takes in an object
const BookType = new GraphQLObjectType({
    name: 'Book',
    //fields property is actually a function
    //the reason it needs to be a function is when we have multiple types and 
    //they have references to one another then unless we wrap them in a function one type might 
    //not necessarily know what another type is.
    //Remember this is an ES6 function.
    fields: () => ({
        //we have to use a graphql string (in type) in order for it to understand
        id: {type:GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    //there are four different types of queries to set up and ech one os going to be a different field inside this root query type
    //we don't need to wrap a field inside a function because we don't need to worry about the order
    fields: {
        //the name here matters because when we are trying to query from the front end this is the name of the parameter
        book: {
            type: BookType,
            //when someone querries the book type they will pass the argument along
            args: {id: {type: GraphQLString}},
            //resolve function takes in 2 parameters 
            //this is the function where we write code to get which ever data we need from the database or other source
            resolve(parent, args){
                //where the code goes
                //lodash dot find in the books array where the parameter is an id property that takes in the args id
                return _.find(books,  { id: args.id})
            }
        }
    }
})
//export it
//then pass through our initial route query
module.exports = new GraphQLSchema({
    query: RootQuery
})