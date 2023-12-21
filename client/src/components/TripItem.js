import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import { TRIP_ROUTE } from "../utils/consts";
import { useNavigate } from "react-router-dom";

const TripItem = ({trip}) => {
    const navigate = useNavigate()
    return (
        <Col md={3} className={"mt-3"} onClick={() => navigate(TRIP_ROUTE + '/' + trip.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + trip.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <div>{trip.rating}</div>
                    </div>
                </div>
                <div>{trip.name}</div>
            </Card>
        </Col>
    );
};

export default TripItem;