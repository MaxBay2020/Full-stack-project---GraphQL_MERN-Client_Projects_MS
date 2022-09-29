import {FaTrash} from 'react-icons/fa'
import {useDeleteClient} from "../hooks/useMutationData";

const ClientRow = ({client}) => {

    const { deleteClient, data, loading, error } = useDeleteClient(client?.id)

    const handleDeleteClient = () => {
        deleteClient()
    }

    return (
        <tr>
            <td>{client.name}</td>
            <td>{client.email}</td>
            <td>{client.phone}</td>
            <td>
                <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDeleteClient()}
                >
                    <FaTrash />
                </button>
            </td>
        </tr>
    )
}

export default ClientRow
