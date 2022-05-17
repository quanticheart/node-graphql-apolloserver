require("dotenv").config()

const mongoose = require("mongoose");
const {ApolloServer} = require("apollo-server")

const typeDefs = require("./typeDefs")
const resolvers = require("./resolvers")

mongoose.connect(process.env.mongoDbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then((url) => {
    console.log(`server up ${url}`)
}).catch((error) => {
    console.log(`server error ${error}`)
})