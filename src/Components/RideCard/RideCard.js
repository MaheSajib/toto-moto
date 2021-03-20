import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './RiderCard.css';

const RideCard = (props) => {
    const {name, img} = props.name;
    return (
        <div className="card-detail">
            <Card style={{ width: '15rem' }}>
                <Card.Img className="rider-logo" variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="text-center"><Link to={`/ride/${name}`} >{name}</Link></Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RideCard;