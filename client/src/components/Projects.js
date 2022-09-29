import Spinner from "./Spinner";
import {useGetAllProjects} from "../hooks/useQueryData";
import ProjectCard from "./ProjectCard";
import AddProjectModal from "./AddProjectModal";

const Projects = () => {

    const {data, loading, error} = useGetAllProjects()



    if(loading)
        return <Spinner />

    if(error)
        return <p>Something went wrong...</p>

    const renderProjects = () => (
        <>
            {data.getAllProjects.length > 0 ? (
                <div className='row mt-4'>
                    {data.getAllProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            ) : (
                <p>No Projects</p>
            )}
        </>
    )

    return (
        <>

            <AddProjectModal />
            {
                !loading && !error && renderProjects()
            }
        </>
    )
}

export default Projects
