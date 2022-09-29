import { FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {deleteProject, useDeleteProject} from "../hooks/useMutationData";

const DeleteProjectButton = ({projectId}) => {

    const navigate = useNavigate()
    const deleteProject = useDeleteProject()

    const handleDeleteProject = async () => {
        await deleteProject({
            variables: {
                projectId
            }
        })

        navigate('/')
    }

    return (
        <>
            <div className='d-flex mt-5 ms-auto'>
                <button className='btn btn-danger m-2' onClick={()=>handleDeleteProject()}>
                    <FaTrash className='icon' /> Delete Project
                </button>
            </div>
        </>
    )
}

export default DeleteProjectButton
