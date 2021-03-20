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
                <img src={map} alt="" />
            </div>
        </div>
    );
};

export default Destination;