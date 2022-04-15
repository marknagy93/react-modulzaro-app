import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './form.css';

const style = {
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50vw',
    maxWidth: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Form = ({ onChange, fuelValue, setFuelValue, fuelValues, conditionValue, setConditionValue, conditionValues, submitNewCar }) => {

    const [open, setOpen] = useState(false);
    const [brand, setBrand] = useState('');
    const [errorHide, setErrorHide] = useState(false);
    const [errorBrandMsg, setErrorBrandMsg] = useState('');
    const [errorModelMsg, setErrorModelMsg] = useState('');
    const [errorYearMsg, setErrorYearMsg] = useState('');
    const [errorUrlMsg, setErrorUrlMsg] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [carUrl, setCarUrl] = useState('');
    const [modalHide, setModalHide] = useState(true);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleBrandChange = (e) => {
        e.preventDefault();
        setBrand(e.target.value);
    };
    const handleModelChange = (e) => {
        e.preventDefault();
        setModel(e.target.value);
    };
    const handleYearChange = (e) => {
        e.preventDefault();
        setYear(e.target.value);
    };
    const handleUrlChange = (e) => {
        e.preventDefault();
        setCarUrl(e.target.value);
    };

    const submitValidation = () => {
        const brandValue = brand;
        const modelValue = model;
        const yearValue = year;
        const carUrlValue = carUrl;

        if (brandValue.length === 0) {
            setErrorBrandMsg("Brand field required!");
            setErrorHide(true);
        } else if (modelValue.length === 0) {
            setErrorModelMsg("Model field required!");
            setErrorHide(true);
        } else if (yearValue.length === 0) {
            setErrorYearMsg("Year field required!");
            setErrorHide(true);
        } else if (carUrlValue.length === 0) {
            setErrorUrlMsg("ImageURL field required!");
            setErrorHide(true);
        } else {
            setErrorBrandMsg('');
            setErrorModelMsg('');
            setErrorYearMsg('');
            setErrorUrlMsg('');
            setErrorHide(false);
            submitNewCar();
            setModalHide(false);
        }
    }

    return (
        <form onChange={onChange}>
            <FormGroup className='center' style={{ marginTop: '60px', marginBottom: '60px', paddingTop: '50px', paddingBottom: '50px', display: 'flex', flexDirection: 'column' }}>
                <FormControl sx={{ width: '25ch' }}>
                    <OutlinedInput value={brand} type="text" onChange={handleBrandChange} placeholder="Car Brand:" id="carBrand" error={errorHide} />
                    <FormHelperText>
                        Required!
                    </FormHelperText>
                    <FormHelperText error={errorHide}>
                        {errorBrandMsg}
                    </FormHelperText>
                </FormControl>
                <FormControl sx={{ width: '25ch', marginTop: '10px' }}>
                    <OutlinedInput value={model} type="text" onChange={handleModelChange} placeholder="Car Model:" id="carModel" error={errorHide} />
                    <FormHelperText>
                        Required!
                    </FormHelperText>
                    <FormHelperText error={errorHide}>
                        {errorModelMsg}
                    </FormHelperText>
                </FormControl>
                <FormControl sx={{ width: '25ch', marginTop: '10px' }}>
                    <OutlinedInput value={year} onChange={handleYearChange} placeholder="Car Year:" id="carYear" type='number' error={errorHide} />
                    <FormHelperText>
                        Required!
                    </FormHelperText>
                    <FormHelperText error={errorHide}>
                        {errorYearMsg}
                    </FormHelperText>
                </FormControl>
                <FormControl sx={{ width: '25ch', marginTop: '10px' }}>
                    <OutlinedInput value={carUrl} type="text" onChange={handleUrlChange} placeholder="ImageURL:" id="carImage" error={errorHide} />
                    <FormHelperText>
                        (Suggested image size: 200x200)
                    </FormHelperText>
                    <FormHelperText error={errorHide}>
                        {errorUrlMsg}
                    </FormHelperText>
                </FormControl>
                <TextField
                    id="outlined-select-currency"
                    select
                    value={fuelValue}
                    onChange={(e) => setFuelValue(e.target.value)}
                    helperText="Select Fuel Type"
                    style={{ width: '100%', maxWidth: '240px', marginTop: '10px' }}
                >
                    {fuelValues.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="outlined-select-currency"
                    select
                    value={conditionValue}
                    onChange={(e) => setConditionValue(e.target.value)}
                    helperText="Select Condition"
                    style={{ width: '100%', maxWidth: '240px', marginTop: '10px' }}
                >
                    {conditionValues.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <Button
                    size='small'
                    onClick={() => { submitValidation(); handleOpen(); }}
                    style={{ width: '100%', maxWidth: '240px', marginTop: '10px' }}
                    id="button"
                    variant="contained">
                    SAVE
                </Button>
                <Modal
                    hidden={modalHide}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Car Successfully Added!
                        </Typography>
                        <iframe style={{ width: '100%' }} title="tick" src="https://embed.lottiefiles.com/animation/93824"></iframe>
                    </Box>
                </Modal>

            </FormGroup>
        </form>
    );
};

export default Form;