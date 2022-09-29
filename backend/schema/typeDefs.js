import { gql } from 'apollo-server-express'

const typeDefs = gql`
    type Query {
        getClientById(clientId: ID!): Client
        getAllClients: [Client!]!
        
        getProjectById(projectId: ID!): Project
        getAllProjects: [Project!]!
    }
    
    type Mutation {
        addClient(newClient: newClientInput!): Client!
        addProject(newProject: newProjectInput!): Project!
        
        deleteClient(clientId: ID!): Client
        deleteProject(projectId: ID!): Project
        
        updateProject(projectId: ID!, update: updateProjectInput!): Project!
    }
    
    input updateProjectInput{
        clientId: ID
        name: String
        description: String
        status: STATUS
    }
    
    input newClientInput{
        name: String!
        email: String!
        phone: String!
    }
    
    input newProjectInput{
        clientId: ID!
        name: String!
        description: String
        status: STATUS!
    }
    
    type Project {
        id: ID!
        clientId: ID
        name: String!
        description: String
        status: STATUS
        client: Client
    }
    
    type Client {
        id: ID!
        name: String!
        email: String!
        phone: String!
    }
    
    enum STATUS {
        IN_PROGRESS
        DONE
        NOT_STARTED
    }
`

export default typeDefs
