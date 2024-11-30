import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import typeDefs from './schema/typeDefs';
import blogResolvers from './resolvers/blogResolvers';
import userResolvers from './resolvers/userResolvers';

dotenv.config();
connectDB();

const server = new ApolloServer({
    typeDefs,
    resolvers: [blogResolvers, userResolvers],
    context: ({ req }) => {
        const token = req.headers.authorization || '';
        // Token decoding logic can go here
    },
});

// const app = express() as any;
const app = express() 

server.start().then(() => {
    server.applyMiddleware({ app });
    app.listen({ port: 4000 }, () =>
        console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
    );
});
