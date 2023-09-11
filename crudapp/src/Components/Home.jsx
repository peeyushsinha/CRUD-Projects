import React, { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3000/users")
      .then(res => setData(res.data))
      .catch(err => console.log(err));

  }, [])

  const handleDelete = (id) => {
    const confirm = window.confirm("Would you like to Delete?");
    if (confirm) {
      axios.delete("http://localhost:3000/users/" + id)
        .then(res => { window.location.reload();})
        .catch(err => console.log(err));
    }

  }
  return (
    <div className='d-flex  flex-column justify-content-center align-items-center bg-dark vh-100'>

      <div className=' bg-dark text-light w-100 text-center'>C.R.U.D APPLICATION PROJECT</div>
      <h1 className='mb-4 bg-info text-dark w-100 text-center'>T.A.S.C-Database(Terrorists List)</h1>
      <div className='w-75 rounded bg-light border shadow p-4 table-responsive'>
        <div className='d-flex justify-content-end '> <Link to="/create" className='btn btn-success'>Add +</Link></div>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((d, index) => (
                <tr key={index}>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.email}</td>
                  <td>{d.phone}</td>
                  <td>
                    <Link to={`/read/${d.id}`}><button className='btn btn-sm btn-info me-2'> Read </button></Link>
                    <Link to={`/update/${d.id}`}><button className='btn btn-sm btn-primary me-2'> Edit </button></Link>
                    <button onClick={() => handleDelete(d.id)} className='btn btn-sm btn-danger'>Delete</button>
                  </td>

                </tr>
              ))

            }
          </tbody>
        </table>
      </div>

    </div>
  )

}

export default Home