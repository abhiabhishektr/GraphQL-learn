import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Blog {
    id: ID!
    title: String!
    content: String!
    author: User!
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    getAllBlogs: [Blog]
    getBlog(id: ID!): Blog
  }

  type Mutation {
    register(name: String!, email: String!, password: String!): User
    login(email: String!, password: String!): String  # Returns JWT Token
    createBlog(title: String!, content: String!): Blog
  }
`;

export default typeDefs;
