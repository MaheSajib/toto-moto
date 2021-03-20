import React, { useEffect, useState } from 'react';
import map from '../../images/Map.png';
import './SearchRide.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router';
import fakeData from '../../fakeData/fakeData.json';

const SearchRide = () => {
    const { name, locationFrom, locationTo } = useParams();
    console.log(useParams());
    const [rideCard, setRideCart] = useState([]);
    useEffect(() => {
        const searchResult = fakeData.find(ride => ride.name === name);
        console.log(searchResult);
        setRideCart(searchResult);
    }, [name]);
    return (
        <div class="container ">
            <div class="row g-2">
                <div class="col-4">
                    <div class="p-3 border bg-danger">
                        <ul>
                            <li>
                                <div className="px-3">Mirpur</div>
                            </li>
                            <li>
                                <div className="px-3">Dhanmondi</div>
                            </li>
                        </ul>
                    </div>
                    <div class="p-5 border bg-light d-flex justify-content-between">
                        <img class="LogoSm" src={rideCard.img} alt="" />
                        <h5>{rideCard.name}</h5>

                        <h5><FontAwesomeIcon icon={faUserFriends} />4</h5>
                        <h5>$67</h5>
                    </div>
                    <div class="p-5 border bg-light d-flex justify-content-between">
                        <img class="LogoSm" src={rideCard.img} alt="" />
                        <h5>{rideCard.name}</h5>

                        <h5><FontAwesomeIcon icon={faUserFriends} />4</h5>
                        <h5>$67</h5>
                    </div>
                    <div class="p-5 border bg-light d-flex justify-content-between">
                        <img class="LogoSm" src={rideCard.img} alt="" />
                        <h5>{rideCard.name}</h5>

                        <h5><FontAwesomeIcon icon={faUserFriends} />4</h5>
                        <h5>$67</h5>
                    </div>
                </div>
                <div className="col-8">
                    <img src={map} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SearchRide;