import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function CreateStudent() {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/create', { name, surname, email })
            navigate('/')
        } catch (error) {
            console.log(error)

        }
    }
    return (
        <div className='d-flex vh-100 vw-100 bg-secondary justify-content-center align-items-center'>
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <h2>Add Student</h2>
                    <div className='mb-2'>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter name' className='form-control'
                            onChange={e => setName(e.target.value)} />

                    </div>

                    <div className='mb-2'>
                        <label htmlFor="">Surname</label>
                        <input type="text" placeholder='Enter surname' className='form-control'
                            onChange={e => setSurname(e.target.value)} />

                    </div>

                    <div className='mb-2'>
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='Enter email' className='form-control'
                            onChange={e => { setEmail(e.target.value) }} />

                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateStudent
