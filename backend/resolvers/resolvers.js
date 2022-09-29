import {
    getClientById,
    getAllClients,
    getProjectById,
    getAllProjects,
    client,
} from "./Query.js";
import {
    addClient,
    addProject,
    deleteClient, deleteProject, updateProject,

} from "./Mutation.js";

const resolvers = {
    Query : {
        getClientById,
        getAllClients,
        getProjectById,
        getAllProjects
    },

    Mutation: {
        addClient,
        addProject,

        deleteClient,
        deleteProject,

        updateProject,

    },

    Project: {
        client
    }
}

export default resolvers
