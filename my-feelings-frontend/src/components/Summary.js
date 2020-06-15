import React from 'react';

import { Button, Alert } from 'react-bootstrap';

const Summary = ({ success, setForm, formData, navigation, onSubmit }) => {
    const { go } = navigation;

    if(success) {
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

    else {
        return (
            <div>
                <Alert key="alert-danger" variant="danger">
                    <Alert.Heading>Oh oh</Alert.Heading>
                    <p>Your feeling has not been saved due to an issue with the server</p>
                </Alert>
                <Button variant="primary" size="sm" onClick={() => onSubmit()}>Retry</Button>
                <Button variant="primary" size="sm" onClick={() => go("Mood")}>Create a new feeling</Button>
            </div>     
        );
    }
   
}

export default Summary;