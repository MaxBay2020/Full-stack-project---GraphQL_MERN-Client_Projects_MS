import {useState} from "react";
import {FaUser} from 'react-icons/fa'
import {useAddClient} from "../hooks/useMutationData";

const AddClientModel = () => {

    const [client, setClient] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const { addClient } = useAddClient(client)

    const onSubmit = () => {
        addClient()

    }

    const handleOnChange = (e) => {
        const {name, value} = e.target
        setClient({
            ...client,
            [name]: value
        })
    }

    return (
        <>
            <button
                type='button'
                className='btn btn-secondary'
                data-bs-toggle='modal'
                data-bs-target='#addClientModal'
            >
                <div className='d-flex align-items-center'>
                    <FaUser className='icon' />
                    <div>Add Client</div>
                </div>
            </button>

            <div
                className='modal fade'
                id='addClientModal'
                aria-labelledby='addClientModalLabel'
                aria-hidden='true'
            >
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title' id='addClientModalLabel'>
                                Add Client
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
                                        value={client.name}
                                        onChange={(e) => handleOnChange(e)}
                                    />
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>Email</label>
                                    <input
                                        type='email'
                                        className='form-control'
                                        id='email'
                                        name='email'
                                        value={client.email}
                                        onChange={(e) => handleOnChange(e)}
                                    />
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>Phone</label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='phone'
                                        name='phone'
                                        value={client.phone}
                                        onChange={(e) => handleOnChange(e)}
                                    />
                                </div>

                                <button
                                    type='submit'
                                    data-bs-dismiss='modal'
                                    className='btn btn-secondary'
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddClientModel
