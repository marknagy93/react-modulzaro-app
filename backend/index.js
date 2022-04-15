const cors = require('cors');
const { urlencoded } = require('express');
const express = require('express');
const app = express();
app.use(express.json());
app.use(cors());

const appPort = 8080;

const cars = [
    {
        id: 1,
        imgUrl: 'https://www.autosajandek.hu/termekek/th/2035Ar101132.jpg',
        brand: 'Opel',
        model: 'Astra H',
        fuel: 'diesel',
        condition: 'new',
    },
    {
        id: 2,
        imgUrl: 'https://www.autosajandek.hu/termekek/th/2620Br101806.jpg',
        brand: 'Volkswagen',
        model: 'Golf IV',
        fuel: 'gasoline',
        condition: 'used',
    },
    {
        id: 3,
        imgUrl: 'https://www.autosajandek.hu/termekek/th/2126Ar101401.jpg',
        brand: 'Seat',
        model: 'Ibiza',
        fuel: 'gasoline',
        condition: 'new',
    },
    {
        id: 4,
        imgUrl: 'https://www.holvezessek.hu/gallerys/11919.jpg',
        brand: 'Audi',
        model: 'A4',
        fuel: 'diesel',
        condition: 'new',
    },
    {
        id: 5,
        imgUrl: 'https://avatarfiles.alphacoders.com/184/thumb-184365.jpg',
        brand: 'Toyota',
        model: 'Supra',
        fuel: 'gasoline',
        condition: 'used',
    }
];

app.get('/api/v1/carlist/port', (req, res) => {
    res.send(`The app is running on this port: ${appPort}!`);
});

app.get('/api/v1/carlist/cars', (req, res) => {
    const sortedArray = cars.sort((first, second) => first.name < second.name ? 1 : -1);
    res.status(200).send(sortedArray);
});

app.get('/api/v1/carlist/cars/:id', (req, res) => {
    const car = cars.find((oneCar) => oneCar.id === parseInt(req.params.id));
    car
    ?  res.status(200).send(car)
    : res.status(404).send({
        message: `There was no car with given id ${req.params.id}`, 
        countryCode: 'HU',
    });
});

app.post('/api/v1/carlist/cars', (req, res) => {
    checkDetailsOfRequest({ req, res });
    cars.push({
        ...req.body,
        id: cars.length + 1,
    });

    res.status(200).send('The car creation was successfully!');
});

app.put('/api/v1/carlist/cars/:id', (req, res) => {
    checkDetailsOfRequest({ req, res });

    const index = getCar({ id: req.params.id });

    cars[index] = {
        ...cars[index],
        ...req.body,
    };

    res.status(200).send('The update was successfully!');
});

app.delete('/api/v1/carlist/cars/:id', (req, res) => {
    checkDetailsOfRequest({ req, res });

    const index = getCar({ id: req.params.id });

    cars.splice(index, 1);

    res.status(200).send('The deletion of the car was successfully');
});

function getCar({ id }) {
    const car = cars.find((car) => car.id === parseInt(id));
    return cars.indexOf(car);
}

function checkDetailsOfRequest({ req, res }) {
    if (req.body?.fuel) {
        const fuelError =  isFuelValueCorrect({ fuel: req.body.fuel });
        !fuelError && res.status(400).send("The car fuel property can only be [gasoline, diesel]");
    }

    if (req.body?.condition) {
        const conditionError =  isConditionValueCorrect({ condition: req.body.condition });
        !conditionError && res.status(400).send("The car condition property can only be [new, used]");
    }

    if (req.params?.id) {
        const idNotFoundError = isElementWithGivenIdExist({ id: req.params.id });
        !idNotFoundError && res.status(404).send("Car with the given id was not found");
    }
}

function isElementWithGivenIdExist({ id }) {
    return cars.find((car) => car.id === parseInt(id));
}

function isFuelValueCorrect({ fuel }) {
    const rightValues = ['gasoline', 'diesel'];

    return rightValues.includes(fuel);
}

function isConditionValueCorrect({ condition }) {
    const rightValues = ['new', 'used'];

    return rightValues.includes(condition);
}

app.listen(appPort, () => console.log('app is listening on 8080-port!'));