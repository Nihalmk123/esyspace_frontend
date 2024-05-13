import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Trash, PencilSquare } from 'react-bootstrap-icons'; 
const ManageMeetingRooms = () => {
    const [bookedRooms, setBookedRooms] = useState([]);
    const [usernames, setUsernames] = useState({});

    useEffect(() => {
        // Fetch data from the API
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/getroombookings');
                console.log('Response data:', response.data);

                if (Array.isArray(response.data.events)) {
                    setBookedRooms(response.data.events);
                } else {
                    console.error('Invalid data format received from API');
                }

                if (response.data.usernames) {
                    setUsernames(response.data.usernames);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const getUsername = (userId) => {
        console.log(userId)
        console.log(usernames[userId])
        return usernames[userId] || 'Unknown';
    };

    return (
        <>
            <h2 className='text-center mb-5'>Manage Meeting Rooms</h2>
            <section className="intro">
                <div className="bg-image h-100" style={{ backgroundColor: "#f5f7fa" }}>
                    <div className="mask d-flex align-items-center h-100">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-body p-0">
                                            <div className="table-responsive table-scroll" data-mdb-perfect-scrollbar="true" style={{ position: "relative", height: "500px" }}>
                                                <table className="table table-striped mb-0">
                                                    <thead style={{ backgroundColor: "#ff0000", color: "#fff" }}>
                                                        <tr>
                                                            <th scope="col" >User Name</th>
                                                            <th scope="col">Event Name</th>
                                                            <th scope="col">Start Date and Time</th>
                                                            <th scope="col">End Date and Time</th>
                                                            <th scope="col">Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {bookedRooms && bookedRooms.map(room => (
                                                            <tr key={room.id}>
                                                                <td>{getUsername(room.user)}</td>
                                                                <td>{room.title}</td>
                                                                <td>{room.start}</td>
                                                                <td>{room.end}</td>
                                                                <td>
                                                                    <div className="d-flex flex-wrap">
                                                                    <Trash className="text-danger mx-2 mb-2 mb-md-0 mr-md-2 cursor-pointer" /> {/* Use React Bootstrap Trash icon */}
                                                                    <PencilSquare className="text-success cursor-pointer" /> {/* Use React Bootstrap PencilSquare icon */}
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ManageMeetingRooms;
