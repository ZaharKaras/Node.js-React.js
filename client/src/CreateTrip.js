import React, { useState } from 'react';
import axios from 'axios';


function CreateTrip(){

    const[name, setName] = useState('')
    const[price, setPrice] = useState('')
    const[rating, setRating] = useState('')
    const[image, setImage] = useState(null)


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('price', parseInt(price));
            formData.append('rating', parseInt(rating))
            formData.append('img', image);

            const response = await axios.post('http://localhost:5000/api/trip', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
            setName('');
            setPrice('');
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
                    <h2>Add trip</h2>
                    <div className="mb-2 w-100">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="enter name" className="form-control w-100" onChange={e => setName(e.target.value)}/>
                    </div>
                    <div className="mb-2 w-100">
                        <label htmlFor="price">Price</label>
                        <input type="number" id="price" placeholder="enter price" className="form-control w-100" onChange={e => setPrice(e.target.value)}/>                        
                    </div>
                    <div className="mb-2 w-100">
                        <label htmlFor="rating">Rating</label>
                        <input type="number" id="rating" placeholder="enter rating" className="form-control w-100" onChange={e => setRating(e.target.value)}/>
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
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateTrip;
