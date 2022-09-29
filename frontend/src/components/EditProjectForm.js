import {useState} from "react";
import {useUpdateProject} from "../hooks/useMutationData";


const EditProjectForm = ({project}) => {
    const [currentProject, setCurrentProject] = useState(project);

    // const [updateProject] = useMutation(UPDATE_PROJECT, {
    //     variables: { id: project.id, name, description, status },
    //     refetchQueries: [{ query: GET_PROJECT, variables: { id: project.id } }],
    // });
    //

    const updateProject = useUpdateProject()

    const onSubmit = (e) => {
        e.preventDefault()

        if (!currentProject.name || !currentProject.description || !currentProject.status) {
            return alert("Please fill out all fields");
        }

        updateProject({
            variables: {
                projectId: project.id,
                // 根据后端update所需要的参数，注意下面的赋值！
                update: {
                    name: currentProject.name,
                    description: currentProject.description,
                    status: currentProject.status,
                    clientId: currentProject.client.id
                }
            }
        })
    };

    const handleOnChange = e => {
        const { name, value } = e.target
        setCurrentProject({
            ...currentProject,
            [name]: value
        })
    }

    return (
        <div className="mt-5">
            <h3>Update Project Details</h3>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name='name'
                        value={currentProject.name}
                        onChange={(e) => handleOnChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        id="description"
                        name='description'
                        value={currentProject.description}
                        onChange={(e) => handleOnChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Status</label>
                    <select
                        id="status"
                        className="form-select"
                        name='status'
                        value={currentProject.status}
                        onChange={(e) => handleOnChange(e)}
                    >
                        <option value="NOT_STARTED">Not Started</option>
                        <option value="IN_PROGRESS">In Progress</option>
                        <option value="DONE">Completed</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default EditProjectForm
