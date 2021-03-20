import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData.json'
import RideCard from '../RideCard/RideCard';
import './Home.css';

const Home = () => {
    const [name, setName] = useState([]);
    useEffect(() =>{
        setName(fakeData);
    }, [name])
    return (
        <div className="container card-detail">
            {
                name.map(nm => <RideCard name={nm}></RideCard>)
            }

        </div>
    );
};

export default Home;