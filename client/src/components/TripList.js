import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import { Row } from "react-bootstrap";
import TripItem from "./TripItem";

const TripList = observer(() => {
    const {trip} = useContext(Context)


    return (
        <Row className="d-flex">
            {trip.trips.map(trip => 
                <TripItem key={trip.id} trip={trip}/>
            )}
        </Row>
    );
});

export default TripList;