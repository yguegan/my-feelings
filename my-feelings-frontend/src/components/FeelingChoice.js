import React from 'react';

import { Form, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

const FeelingChoice = ({ setValue, navigation }) => {
    const { next } = navigation;

    const handleOptionChange = (value, event) => {
        //Need to create this adapted target due to a restriction in the library for the checkbox element (taking only true/false instead of the array of values)
        const adaptedEventTarget = {
            name: "selectedFeelings",
            value: value
        }
        setValue({
            target: adaptedEventTarget
        });
    }
      
    return (
        <div>
            <header>
                <h1>How do you feel today ?</h1>
            </header>
            <section>
                <Form>
                    <Form.Group>
                        <ToggleButtonGroup type="checkbox" name="selectedFeelings" onChange={handleOptionChange}>
                            <ToggleButton
                            type="checkbox"
                            variant="outline-dark"
                            value="Depressed"
                            >
                            Depressed
                            </ToggleButton>

                            <ToggleButton
                            type="checkbox"
                            variant="outline-dark"
                            value="Optimistic"
                            >
                            Optimistic
                            </ToggleButton>

                            <ToggleButton
                            type="checkbox"
                            variant="outline-dark"
                            value="Bored"
                            >
                            Bored
                            </ToggleButton>

                            <ToggleButton
                            type="checkbox"
                            variant="outline-dark"
                            value="Happy"
                            >
                            Happy
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Form.Group>
                </Form>
                <Button variant="secondary" size="sm" onClick={next}>Next</Button>
            </section>
        </div>       
        );
    }

export default FeelingChoice;