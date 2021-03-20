import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router-dom';
import map from '../../images/Map.png'
import './Destination.css';



const Destination = () => {
    const {name} = useParams();
    const { register, handleSubmit } = useForm();
    let history = useHistory();
    const onSubmit = (data) => {
        console.log(data)
        history.push("/searchRide/"+name+"/")
        console.log(name)
    };
    return (
        <div className="location-from container">
            <div className="search-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p>Pick Form</p>
                    <input name="pickFrom" defaultValue="Mirpur 1" ref={register} />
                    <br/>
                    <p>Pick To</p>
                    <input name="pickTo" defaultValue=" Dhanmondi" ref={register({ required: true })} />
                    <br/>
                    <input className="form-control bg-danger text-white" type="submit" value="Search" />
                </form>

            </div>
            <div>
                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14608.036944846619!2d90.36710722023403!3d23.74705004446391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhanmondi%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1616277109816!5m2!1sen!2sbd" width="600" height="450" style={{border: 0}}  loading="lazy"></iframe>
            </div>
        </div>
    );
};

export default Destination;