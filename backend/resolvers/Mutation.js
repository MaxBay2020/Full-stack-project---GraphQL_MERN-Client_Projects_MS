
export const addClient = async (_parent, args, { Client }) => {
    const { newClient } = args
    const client = new Client(newClient)
    await client.save()
    return client
}

export const addProject = async (_parent, args, { Project }) => {
    const { newProject } = args
    const project = new Project(newProject)
    await project.save()
    return project
}

export const deleteClient = async (_parent, { clientId }, { Client, Project }) => {
    const clientDeleted = await Client.findByIdAndRemove(clientId)

    await Project.deleteMany({clientId})
    return clientDeleted
}

export const deleteProject = async (_parent, { projectId }, { Project }) => {
    return await Project.findByIdAndRemove(projectId)
}

export const updateProject = async (_parent, { projectId, update }, { Project }) => {
    const project = await Project.findById(projectId)
    const { clientId, name, description, status } = update

    if(clientId)
        project.clientId = clientId
    if(name)
        project.name = name
    if(description)
        project.description = description
    if(status)
        project.status = status

    await project.save()
    return project
}
