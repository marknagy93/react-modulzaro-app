import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import './cars.css';
import CarsTable from '../../components/CarsTable';
import Alert from '@mui/material/Alert';
import { Link } from 'react-router-dom';


const Cars = () => {
    const [cars, setCars] = useState([]);
    const [selectedCar, setSelectedCar] = useState({});
    const [isRenderDetail, setIsRenderDetail] = useState(false);
    const [errormsg, setErrormsg] = useState('');
    const [container, setContainer] = useState(null);
    const customEventType = 'errorWasAccoured';


    useEffect(() => {
        setContainer(document.getElementById('carContainer'));
        container && container.addEventListener(customEventType, (e) => {
            setErrormsg(e.detail.errorMessage);
        }, {});

        selectedCar.id && setIsRenderDetail(true);

    }, [container, selectedCar]);

    const fetchCars = () => {
        fetch('http://localhost:8080/api/v1/carlist/cars')
            .then((result) => result.json())
            .then((data) => {
                setCars(data);
                setSelectedCar(data[0]);
            })
            .catch((error) => {
                console.log('error msg', error);
            });
    };

    const getCarById = (id) => {
        fetch(`http://localhost:8080/api/v1/carlist/cars/${id}`)
            .then((result) => result.status === 200 ? result.json() : result.text())
            .then((data) => {
                const result = !typeof data === 'object' && JSON.parse(data);
                if (result.message) {
                    container.dispatchEvent(
                        new CustomEvent(customEventType, {
                            detail: {
                                errorMessage: result.message,
                                wasSuccess: false,
                            }
                        }));
                }
                else {
                    setSelectedCar(data);
                }
            })
            .catch((error) => {
                console.log('error msg', error);
            });
    };

    const handleListItemClick = (index) => {
        getCarById(index);
    }

    const updateCarData = async (body, id) => {
        await fetch(`http://localhost:8080/api/v1/carlist/cars/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        });
    }

    const deleteCar = async (carId) => {
        const response = await fetch(`http://localhost:8080/api/v1/carlist/cars/${carId}`, {
            method: 'DELETE',
        });
        if (response.status === 200) {
            const car = cars.find((oneCar) => oneCar.id === carId);
            const index = cars.indexOf(car);
            const newCarArray = [...cars];
            newCarArray.splice(index, 1);
            setCars(newCarArray);
        }
    };

    const editSaved = (valueChange) => {
        const correctFuelValues = ['gasoline', 'diesel'];
        const correctConditionValues = ['new', 'used'];
        const requestBody = {
            [valueChange.field]: valueChange.value,
        };
        if (valueChange.field === 'fuel') {
            correctFuelValues.includes(valueChange.value)
                && updateCarData(requestBody, valueChange.id);
        }

        if (valueChange.field === 'condition') {
            correctConditionValues.includes(valueChange.value)
                && updateCarData(requestBody, valueChange.id);
        } else {
            updateCarData(requestBody, valueChange.id);
        }
    };

    const DetailCardRendering = () => {
        if (selectedCar) {
            return (<CarsTable
                rows={cars}
                edit={editSaved}
                deleteElement={(e, params) => deleteCar(params.id)} />)
        }
    }

    return (
        <div className='cars' id="carContainer">
            <div className='carTable'>
                <Link to='/home'>
                    BACK
                </Link>
                <Button id="carList" onClick={fetchCars}>
                    SHOW CARS
                </Button>
                <Link to='/addcars'>
                    ADD CAR
                </Link>
                {errormsg && <Alert severity="error">{errormsg}</Alert>}
                {
                    isRenderDetail && DetailCardRendering()
                }
            </div>
        </div>
    );
};

export default Cars;