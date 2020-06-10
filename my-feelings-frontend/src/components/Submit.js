import React from 'react';

import EventService from "../services/EventService"

import { Button, Alert } from 'react-bootstrap';

const Submit = ({ setForm, formData, navigation }) => {
    const { go } = navigation;
    
    const eventService = new EventService();
    eventService.addEvent(formData);

    return (
        <div>
            <Alert key="alert-success" variant="success">
                <Alert.Heading>Congratulation</Alert.Heading>
                <p>Your feeling has been saved successfully</p>
            </Alert>
            <Button variant="primary" size="sm" onClick={() => go("Mood")}>Create a new feeling</Button>
        </div>     
    );
}

export default Submit;