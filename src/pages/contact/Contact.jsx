import React from 'react';
import './contact.css';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-page">
                <h1>CONTACT</h1>
                <h2>LEAVE US A MESSAGE!</h2>
                <Card style={{ maxWidth: 700, margin: "0 auto", padding: "20px 5px", backgroundColor: "rgb(0, 0, 0, 0.8)", marginBottom: "3%" }}>
                    <CardContent>
                        <form>
                            <Grid container spacing={1}>
                                <Grid xs={12} item>
                                    <TextField style={{ backgroundColor: "white" }} placeholder="Name" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField style={{ backgroundColor: "white" }} type="email" placeholder="Email" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField style={{ backgroundColor: "white" }} type="message" multiline rows={10} placeholder="Type your message here" fullWidth variant="outlined" required />
                                </Grid>
                                <Grid xs={12} item>
                                    <Button id="submitBtn" type="submit">Submit</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
                <Link to='/home'>
                    BACK
                </Link>
            </div>
        </div>
    );
};

export default Contact;