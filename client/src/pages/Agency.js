import {observer} from 'mobx-react-lite'
import React, { useContext } from 'react'
import TripList from '../components/TripList';
import { Container } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';
import { Context } from '../index';

const Agency = observer(() => {
    const {trip} = useContext(Context)



    return (
        <Container>
            <Row className="mt-2">
                <Col md={9}>
                    <TripList/>
                </Col>
            </Row>
        </Container>
    );
});

export default Agency;