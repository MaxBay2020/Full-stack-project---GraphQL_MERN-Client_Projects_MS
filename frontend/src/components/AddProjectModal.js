import { useState } from 'react';
import { FaList } from 'react-icons/fa';
import {useAddProject, useUpdateProject} from "../hooks/useMutationData";
import {useGetAllClients} from "../hooks/useQueryData";

const AddProjectModal = () => {

    const [project, setProject] = useState({
        name: '',
        description: '',
        clientId: '',
        status: ''
    });

    const addProject = useAddProject()
    const {data, loading, error} = useGetAllClients()

    const onSubmit = (e) => {
        e.preventDefault();

        if (project.name === '' || project.description === '' || project.status === '') {
            return alert('Please fill in all fields');
        }
        addProject({
            variables: {
                newProject: project
            }
        })

    };

    if (loading) return null;
    if (error) return <h2>'Something Went Wrong'</h2>

    const handleOnChange = e => {
        const {name, value} = e.target

        setProject({
            ...project,
            [name]: value
        })
    }

    return (
        <>
            {!loading && !error && (
                <>
                    <button
                        type='button'
                        className='btn btn-primary'
                        data-bs-toggle='modal'
                        data-bs-target='#addProjectModal'
                    >
                        <div className='d-flex align-items-center'>
                            <FaList className='icon' />
                            <div>New Project</div>
                        </div>
                    </button>

                    <div
                        className='modal fade'
                        id='addProjectModal'
                        aria-labelledby='addProjectModalLabel'
                        aria-hidden='true'
                    >
                        <div className='modal-dialog'>
                            <div className='modal-content'>
                                <div className='modal-header'>
                                    <h5 className='modal-title' id='addProjectModalLabel'>
                                        New Project
                                    </h5>
                                    <button
                                        type='button'
                                        className='btn-close'
                                        data-bs-dismiss='modal'
                                        aria-label='Close'
                                    />
                                </div>
                                <div className='modal-body'>
                                    <form onSubmit={onSubmit}>
                                        <div className='mb-3'>
                                            <label className='form-label'>Name</label>
                                            <input
                                                type='text'
                                                className='form-control'
                                                id='name'
                                                name='name'
                                                value={project.name}
                                                onChange={(e) => handleOnChange(e)}
                                            />
                                        </div>
                                        <div className='mb-3'>
                                            <label className='form-label'>Description</label>
                                            <textarea
                                                className='form-control'
                                                id='description'
                                                name='description'
                                                value={project.description}
                                                onChange={(e) => handleOnChange(e)}
                                            />
                                        </div>
                                        <div className='mb-3'>
                                            <label className='form-label'>Status</label>
                                            <select
                                                id='status'
                                                className='form-select'
                                                name='status'
                                                value={project.status}
                                                onChange={(e) => handleOnChange(e)}
                                            >
                                                <option value='NOT_STARTED'>Not Started</option>
                                                <option value='IN_PROGRESS'>In Progress</option>
                                                <option value='DONE'>Completed</option>
                                            </select>
                                        </div>

                                        <div className='mb-3'>
                                            <label className='form-label'>Client</label>
                                            <select
                                                id='clientId'
                                                className='form-select'
                                                name='clientId'
                                                value={project.clientId}
                                                onChange={(e) => handleOnChange(e)}
                                            >
                                                <option value=''>Select Client</option>
                                                {data.getAllClients.map((client) => (
                                                    <option key={client.id} value={client.id}>
                                                        {client.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <button
                                            type='submit'
                                            data-bs-dismiss='modal'
                                            className='btn btn-primary'
                                        >
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default AddProjectModal
