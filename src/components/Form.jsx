import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './form.css';

const Form = ({ onChange, fuelValue, setFuelValue, fuelValues, conditionValue, setConditionValue, conditionValues, submitNewCar}) => (
    <form onChange={ onChange }>
                <FormGroup className='center' style={{ marginTop: '60px', marginBottom: '60px', paddingTop: '50px', paddingBottom: '50px', display: 'flex', flexDirection: 'column'}}>
                    <FormControl sx={{ width: '25ch' }}>
                        <OutlinedInput placeholder="Car Brand:" id="carBrand" />
                        <FormHelperText>
                            Required!
                        </FormHelperText>
                    </FormControl>
                    <FormControl sx={{ width: '25ch', marginTop: '10px' }}>
                        <OutlinedInput placeholder="Car Model:" id="carModel" />
                        <FormHelperText>
                            Required!
                        </FormHelperText>
                    </FormControl>
                    <FormControl sx={{ width: '25ch', marginTop: '10px' }}>
                        <OutlinedInput placeholder="ImageURL:" id="carImage" />
                        <FormHelperText>
                            Image size must be (200x200)!
                        </FormHelperText>
                    </FormControl>
                    <TextField
                        id="outlined-select-currency"
                        select
                        value={fuelValue}
                        onChange={(e) => setFuelValue(e.target.value)}
                        helperText="Select Fuel Type"
                        style={{width: '100%', maxWidth: '240px', marginTop: '10px'}}
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
                        style={{width: '100%', maxWidth: '240px', marginTop: '10px'}}
                    >
                        {conditionValues.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Button 
                    size='small'
                    onClick={ submitNewCar } 
                    style={{width: '100%', maxWidth: '240px', marginTop: '10px'}}
                    id="button"
                    variant="contained">
                        SAVE
                    </Button>
                </FormGroup>
                </form>
);

export default Form;