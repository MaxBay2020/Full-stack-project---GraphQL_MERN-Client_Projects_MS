import { useQuery, gql } from '@apollo/client'

export const GET_ALL_CLIENTS = gql`
    query getAllClients{
        getAllClients {
            id,
            name,
            email,
            phone
        }
    }
`

export const GET_ALL_PROJECTS = gql`
    query getAllProjects{
        getAllProjects {
            id,
            name,
            status,
            client {
                name
            }
        }
    }
`

export const GET_SINGLE_PROJECT = gql`
    query getProjectById($projectId: ID!) {
        getProjectById(projectId: $projectId) {
            id,
            name,
            description,
            status,
            client {
                id,
                name,
                email,
                phone
            }
        }
    }
`

export const useGetAllClients = () => {
    return useQuery(GET_ALL_CLIENTS)
}

export const useGetAllProjects = () => {
    return useQuery(GET_ALL_PROJECTS)
}

export const useGetProjectById = (projectId) => {
    return useQuery(GET_SINGLE_PROJECT, {
        variables: {
            projectId
        }
    })
}
