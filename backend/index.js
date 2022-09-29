import express from 'express'
import { ApolloServer } from "apollo-server-express"
import resolvers from "./resolvers/resolvers.js";
import typeDefs from "./schema/typeDefs.js";
import dotenv from 'dotenv'
import connectDB from "./db/connection.js";
import Client from "./db/models/Client.js";
import Project from "./db/models/Project.js";
import cors from 'cors'
dotenv.config()


const startServer = async () => {
    const app = express()
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        context: {
            Client,
            Project
        }
    })

    await apolloServer.start()

    apolloServer.applyMiddleware({ app })

    app.use(cors())

    const port = process.env.PORT || 5000
    // connect to database
    connectDB()

    app.listen(port, () => {
        console.log(`Server is running at ${port}`)
    })
}

startServer()
