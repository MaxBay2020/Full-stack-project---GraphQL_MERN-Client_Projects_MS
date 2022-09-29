import {Link, useParams} from 'react-router-dom'
import Spinner from "../components/Spinner";
import {useGetProjectById} from "../hooks/useQueryData";
import ClientInfo from "../components/ClientInfo";
import EditProjectForm from "../components/EditProjectForm";
import DeleteProjectButton from "../components/DeleteProjectButton";


const ProjectPage = () => {

    const {projectId} = useParams()

    const { loading, error, data } = useGetProjectById(projectId)

    if (loading) return <Spinner />;
    if (error) return <p>Something Went Wrong</p>;

    return (
        <>
            {!loading && !error && (
                <div className='mx-auto w-75 card p-5'>
                    <Link to='/' className='btn btn-light btn-sm w-25 d-inline ms-auto'>
                        Back
                    </Link>

                    <h1>{data.getProjectById.name}</h1>
                    <p>{data.getProjectById.description}</p>

                    <h5 className='mt-3'>Project Status</h5>
                    <p className='lead'>{data.getProjectById.status}</p>

                    <ClientInfo client={data.getProjectById.client} />

                    <EditProjectForm project={data.getProjectById} />

                    <DeleteProjectButton projectId={data.getProjectById.id} />
                </div>
            )}
        </>
    )
}

export default ProjectPage
