import React, { useEffect, useState } from 'react';
import map from '../../images/Map.png';
import './SearchRide.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router';
import fakeData from '../../fakeData/fakeData.json';

const SearchRide = () => {
    const { name, pickFrom, pickTo } = useParams();
    console.log(useParams());
    const [rideCard, setRideCart] = useState([]);
    useEffect(() => {
        const searchResult = fakeData.find(ride => ride.name === name);
        console.log(searchResult);
        setRideCart(searchResult);
    }, [name]);
    return (
        <div class=" container ">
            <div class="row g-2 search-result">
                <div class="col">
                    <div class="p-3 border bg-danger">
                        <ul>
                            <li>
                                <div className="px-3 detailName">{pickFrom}</div>
                            </li>
                            <li>
                                <div className="px-3 detailName">{pickTo}</div>
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
                <div className="col">
                    <iframe className="map" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14608.036944846619!2d90.36710722023403!3d23.74705004446391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhanmondi%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1616277109816!5m2!1sen!2sbd" width="600" height="450" style={{border: 0}}  loading="lazy"></iframe>
                </div>
            </div>
        </div>
    );
};

export default SearchRide;