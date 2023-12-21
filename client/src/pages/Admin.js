import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateTrip from '../components/modals/CreateTrip';

const Admin = () => {
    const [tripVisible, setTripVisible] = useState(false)


    return (
        <Container className='d-flex flex-column'>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setTripVisible(true)}
                >
                Add Trip
            </Button>
            <CreateTrip show={tripVisible} onHide={() => setTripVisible(false)}/>
        </Container>
        
    );
};

export default Admin;