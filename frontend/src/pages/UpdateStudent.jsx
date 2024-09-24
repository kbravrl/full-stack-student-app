import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function UpdateStudent() {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const {id} = useParams();
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        axios.put('http://localhost:3000/update/'+id, { name, surname, email })
        .then(res => {
            console.log(res)
            navigate('/')
        }).catch(err => console.log(err))
    }
    return (
        <div className='d-flex vh-100 vw-100 bg-secondary justify-content-center align-items-center'>
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <h2>Update Student</h2>
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
                        onChange={e => {setEmail(e.target.value)}} />

                    </div>
                    <button className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateStudent
