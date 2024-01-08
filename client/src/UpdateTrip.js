import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UpdateTrip() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');
    const [image, setImage] = useState(null);
    const { id } = useParams();

    // Получение данных о поездке по id при загрузке компонента
    useEffect(() => {
        async function fetchTrip() {
            try {
                const response = await axios.get(`http://localhost:5000/api/trip/${id}`);
                const tripData = response.data;

                // Устанавливаем значения полученных данных в состояния
                setName(tripData.name || '');
                setPrice(tripData.price || '');
                setRating(tripData.rating || '');
            } catch (error) {
                console.error(error);
            }
        }

        fetchTrip();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            if (name !== '') formData.append('name', name);
            if (price !== '') formData.append('price', parseFloat(price));
            if (rating !== '') formData.append('rating', parseInt(rating));
            if (image) formData.append('img', image);

            const response = await axios.put(`http://localhost:5000/api/trip/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);

            setName('');
            setPrice('');
            setRating('');
            setImage(null);
        } catch (error) {
            console.error(error);
        }
    };

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);
    };

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3 d-flex flex-column align-items-center">
                <form onSubmit={handleSubmit}>
                    <h2>Update trip</h2>
                    <div className="mb-2 w-100">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="enter name"
                            className="form-control w-100"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-2 w-100">
                        <label htmlFor="price">Price</label>
                        <input
                            type="number"
                            id="price"
                            placeholder="enter price"
                            className="form-control w-100"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div className="mb-2 w-100">
                        <label htmlFor="rating">Rating</label>
                        <input
                            type="number"
                            id="rating"
                            placeholder="enter rating"
                            className="form-control w-100"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                        />
                    </div>
                    <div className="mb-2 w-100">
                        <label htmlFor="image">Image</label>
                        <input
                            type="file"
                            id="image"
                            className="form-control w-100"
                            onChange={handleImageChange}
                        />
                    </div>
                    <button className="btn btn-success">Update</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateTrip;
