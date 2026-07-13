import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const AddCar = () => {

    const [input, changeInput] = useState({
        registration_number: "",
        brand: "",
        model: "",
        vehicle_type: "",
        fuel_type: "",
        transmission: "",
        seating_capacity: "",
        rent_per_day: "",
        city: "",
        availability_status: "Available"
    });

    const inputHandler = (event) => {
        changeInput({
            ...input,
            [event.target.name]: event.target.value
        });
    };

    const readValues = () => {

        axios.post("YOUR_API_URL", input)
            .then((response) => {
                alert(response.data.message);
                console.log(response.data);

                changeInput({
                    registration_number: "",
                    brand: "",
                    model: "",
                    vehicle_type: "",
                    fuel_type: "",
                    transmission: "",
                    seating_capacity: "",
                    rent_per_day: "",
                    city: "",
                    availability_status: "Available"
                });

            })
            .catch((error) => {
                alert(error.response?.data?.message || "Something went wrong");
                console.log(error);
            });

    };

    return (
        <div>

            <Navbar />
            <div className="container mt-5">

                <div className="row justify-content-center">

                    <div className="col col-lg-6 col-md-8 col-sm-12">

                        <div className="card shadow">

                            <div className="card-header bg-dark text-white text-center">
                                <h3>Add Car</h3>
                            </div>

                            <div className="card-body">

                                <div className="mb-3">
                                    <label className="form-label">Registration Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="registration_number"
                                        value={input.registration_number}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Brand</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="brand"
                                        value={input.brand}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Model</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="model"
                                        value={input.model}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Vehicle Type</label>
                                    <select
                                        className="form-select"
                                        name="vehicle_type"
                                        value={input.vehicle_type}
                                        onChange={inputHandler}
                                    >
                                        <option value="">Select</option>
                                        <option>Hatchback</option>
                                        <option>Sedan</option>
                                        <option>SUV</option>
                                        <option>MUV</option>
                                        <option>Luxury</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Fuel Type</label>
                                    <select
                                        className="form-select"
                                        name="fuel_type"
                                        value={input.fuel_type}
                                        onChange={inputHandler}
                                    >
                                        <option value="">Select</option>
                                        <option>Petrol</option>
                                        <option>Diesel</option>
                                        <option>Electric</option>
                                        <option>Hybrid</option>
                                        <option>CNG</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Transmission</label>
                                    <select
                                        className="form-select"
                                        name="transmission"
                                        value={input.transmission}
                                        onChange={inputHandler}
                                    >
                                        <option value="">Select</option>
                                        <option>Manual</option>
                                        <option>Automatic</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Seating Capacity</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="seating_capacity"
                                        value={input.seating_capacity}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Rent Per Day</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="rent_per_day"
                                        value={input.rent_per_day}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">City</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="city"
                                        value={input.city}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Availability Status</label>
                                    <select
                                        className="form-select"
                                        name="availability_status"
                                        value={input.availability_status}
                                        onChange={inputHandler}
                                    >
                                        <option>Available</option>
                                        <option>Booked</option>
                                        <option>Maintenance</option>
                                    </select>
                                </div>

                                <div className="text-center">
                                    <button
                                        className="btn btn-success"
                                        onClick={readValues}
                                    >
                                        Add Car
                                    </button>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default AddCar;