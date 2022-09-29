import {useGetAllClients} from "../hooks/useQueryData";
import ClientRow from "./ClientRow";
import Spinner from "./Spinner";
import AddClientModel from "./AddClientModel";


const Clients = () => {

    const {data, loading, error} = useGetAllClients()


    if(loading)
        return <Spinner />

    if(error)
        return <p>Something went wrong...</p>


    const renderClientTable = () => (
        <table className='table table-hover mt-3'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
            {
                data.getAllClients.map(client => (
                    <ClientRow key={client.id} client={client} />
                ))
            }
            </tbody>
        </table>
    )

    return (
        <div>
            <AddClientModel />
            {
                !loading && !error && renderClientTable()
            }
        </div>
    )
}

export default Clients
