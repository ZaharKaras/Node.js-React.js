import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";


function Trip(){

    const [trip, setTrips] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/trip')
        .then(res => setTrips(res.data))
        .catch(err => console.log(err))
    }, [])

    const handleDelte = async (id) => {
        try{
            await axios.delete(`http://localhost:5000/api/trip/${id}`)
            window.location.reload()
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">

                <Link to="/create" className="btn btn-success">
                    Add
                </Link>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>img</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            trip.map((data, i) => (
                                <tr key={i}>
                                    <td> {data.name} </td>
                                    <td> {data.price} </td>
                                    <td> {data.rating} </td>
                                    <td> <img src={`/server/static/${data.img}`} alt="image" /> </td>
                                    <td>
                                        <Link to={`update/${data.id}`} className="btn btn-primary">Update</Link>
                                        <button className="btn btn-danger ms-2" onClick={e => handleDelte(data.id)}>Delete</button>
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

export default Trip