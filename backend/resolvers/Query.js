
export const getClientById = async (_parent, args, { Client }) => {
    const { clientId } = args
    return await Client.findById(clientId)
}

export const getAllClients = async (_parent, _args, { Client }) => {
    return await Client.find()
}

export const getProjectById = async (_parent, args, { Project }) => {
    const { projectId } = args
    return await Project.findById(projectId)
}

export const getAllProjects = async (_parent, _args, { Project }) => {
    return await Project.find()
}

export const client = async (parent, _args, { Client }) => {
    const { clientId } = parent
    return await Client.findById(clientId)
}
