import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Student() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchAllStudents = async () => {
            try {
                const res = await axios.get('http://localhost:3000/')
                setStudents(res.data)
            }catch(error) {
                console.log(error)
            }
        };
        
        fetchAllStudents();

    }, [])

    const handleDelete = async (id) => {
        try {
            await axios.delete('http://localhost:3000/student/'+id)
            window.location.reload()
        } catch(err) {
            console.log(err);
        }

    }

    return (
        <div className='d-flex vh-100 vw-100 bg-secondary justify-content-center align-items-center'>
            <div className="w-50 bg-white rounded p-3">
                <Link to="/create" className="btn btn-success">Add+</Link>
                <table className='table'>
                    <thead className='thead-light'>
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={index}>
                                <td>{student.name}</td>
                                <td>{student.surname}</td>
                                <td>{student.email}</td>
                                <td>
                                    <Link to={`update/${student.id}`} className='btn btn-primary'>Update</Link>
                                    <button className='btn btn-danger m-2' onClick={e => handleDelete(student.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Student
