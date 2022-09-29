import { useMutation, gql } from '@apollo/client'
import {GET_ALL_CLIENTS, GET_ALL_PROJECTS} from "./useQueryData.js";

const DELETE_CLIENT = gql`
    mutation deleteClient($clientId: ID!){
        deleteClient(clientId: $clientId){
            id,
            name
        }
    }
`

const ADD_CLIENT = gql`
    mutation addClient($newClient: newClientInput!) {
        addClient(newClient: $newClient) {
            id,
            name,
            email,
            phone
        }
    }
`

const ADD_PROJECT = gql`
    mutation addProject($newProject: newProjectInput!) {
        addProject(newProject: $newProject) {
            id,
            name,
            description,
            status
            client {
                name
            }
        }
    }
`

const UPDATE_PROJECT = gql`
    mutation updateProject($projectId: ID!, $update: updateProjectInput!) {
        updateProject(projectId: $projectId, update: $update) {
            id,
            clientId,
            name,
            status,
            client{
                name
            }
        }
    }
`

export const useDeleteClient= (clientId) => {
    const [deleteClient, { data, loading, error }] = useMutation(DELETE_CLIENT, {
        variables: {
            clientId
        },
        // mutation变化后重新渲染视图：
        // 方法一：重新请求指定gql的API，这样做不好，因为apollo有cache机制，我们只需要更新cache即可，不需要请求API
        refetchQueries: [{query: GET_ALL_CLIENTS}, {query: GET_ALL_PROJECTS}]

        // 方法二：更新储存过query中的数据
        // deleteClient是从graphql返回回来的数据，是在后端配置的
        // update(cache, { data: {deleteClient} }){
        //     // 先从指定的query所在的cache中拿到数据
        //     // getAllClients是query的名字
        //     // GET_ALL_CLIENTS是gql语句的名字
        //     const { getAllClients } = cache.readQuery({ query: GET_ALL_CLIENTS })
        //
        //     // 改变cache中的数据
        //     cache.writeQuery({
        //         query: GET_ALL_CLIENTS,
        //         data: {
        //             getAllClients: getAllClients.filter(client => client.id !== deleteClient.id)
        //         }
        //     })
        // }
    })

    return {
        deleteClient,
        data,
        loading,
        error
    }
}

export const useAddClient = (newClient) => {
    const [addClient] = useMutation(ADD_CLIENT, {
        variables: {
            newClient
        },
        update(cache, { data: {addClient} }){
            const { getAllClients } = cache.readQuery({ query: GET_ALL_CLIENTS })

            // 改变cache中的数据
            cache.writeQuery({
                query: GET_ALL_CLIENTS,
                data: {
                    // 注意！这里不能使用push，不然会出错，应该使用spread operator！
                    getAllClients: [...getAllClients, addClient]
                }
            })
        }
    })

    return {
        addClient,
    }
}

export const useAddProject = () => {
    const [addProject] = useMutation(ADD_PROJECT, {
        update(cache, {data: {addProject}}){
            const { getAllProjects } = cache.readQuery({ query: GET_ALL_PROJECTS })

            cache.writeQuery({
                query: GET_ALL_PROJECTS,
                data: {
                    getAllProjects: [...getAllProjects, addProject]
                }
            })
        }
    })

    return addProject
}

export const useUpdateProject = () => {

    const [updateProject] = useMutation(UPDATE_PROJECT, {
        refetchQueries: [{query: GET_ALL_CLIENTS}]
    })

    return updateProject
}

const DELETE_PROJECT = gql`
    mutation deleteProject($projectId: ID!) {
        deleteProject(projectId: $projectId){
            id
        }
    }
`

export const useDeleteProject = () => {
    const [deleteProject] = useMutation(DELETE_PROJECT, {
        update(cache, {data: {deleteProject}}){
            const { getAllProjects } = cache.readQuery({ query: GET_ALL_PROJECTS })

            cache.writeQuery({
                query: GET_ALL_PROJECTS,
                data: {
                    getAllProjects: getAllProjects.filter(project => project.id !== deleteProject.id)
                }
            })
        }
    })

    return deleteProject
}

