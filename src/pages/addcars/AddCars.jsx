import React, { useState, useEffect } from "react";
import Form from "../../components/Form";
import './addcars.css';
import { Link } from "react-router-dom";

const carToCreate = {};

const AddCars = () => {
    const [fuelValue, setFuelValue] = useState('gasoline');
    const [firstFuel, setFirstFuel] = useState('');
    const [conditionValue, setConditionValue] = useState('new');
    const [firstCondition, setFirstCondition] = useState('');
    const fuelValues = [
        {
            label: 'gasoline',
            value: 'gasoline',

        },
        {
            label: 'diesel',
            value: 'diesel',

        },
    ];
    const conditionValues = [
        {
            label: 'new',
            value: 'new',

        },
        {
            label: 'used',
            value: 'used',

        },
    ];

    useEffect(() => {

        if (firstFuel !== fuelValue) {
            carToCreate['fuel'] = fuelValue;
        }
        setFirstFuel(fuelValue);

        if (firstCondition !== conditionValue) {
            carToCreate['condition'] = conditionValue;
        }
        setFirstCondition(conditionValue);

    }, [firstFuel, fuelValue, firstCondition, conditionValue,]);

    const gatheringInfoAboutCar = ({ target: { id, value, checked } }) => {
        const mapNameToProperty = {
            carBrand: 'brand',
            carModel: 'model',
            carImage: 'imgUrl',
            carYear: 'year',
        };

        const property = mapNameToProperty[id];

        carToCreate[property] = value === 'on' ? checked : value;
    };

    const submitNewCar = async () => {
        await fetch(`http://localhost:8080/api/v1/carlist/cars/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(carToCreate),
        });
    };

    return (
        <div className="addCar">
            <div className="form">
                <h1>ADD CAR</h1>
                <Form
                    onChange={gatheringInfoAboutCar}
                    fuelValue={fuelValue}
                    fuelValues={fuelValues}
                    setFuelValue={setFuelValue}
                    conditionValue={conditionValue}
                    conditionValues={conditionValues}
                    setConditionValue={setConditionValue}
                    submitNewCar={submitNewCar}
                />
                <Link to='/cars'>
                    BACK
                </Link>
            </div>
        </div>
    );
};

export default AddCars;