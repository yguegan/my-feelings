import React from 'react';

import { Form, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

const FeelingChoice = ({ formData, navigation }) => {
    const {selectedFeelings} = formData;
    const { next } = navigation;

    const handleOptionChange = (changeEvent) => {
        if(changeEvent.target.checked && (selectedFeelings.indexOf(changeEvent.target.value) < 0)) {
            selectedFeelings.push(changeEvent.target.value);
        }
        else if (!changeEvent.target.checked){
            selectedFeelings.splice(selectedFeelings.indexOf(changeEvent.target.value), 1);
        }
    };
      
    return (
        <div>
            <header>
                <h1>How do you feel today ?</h1>
            </header>
            <section>
                <Form>
                    <Form.Group>
                        <ToggleButtonGroup type="checkbox" name="feelingChoice">
                            <ToggleButton
                            type="checkbox"
                            variant="outline-dark"
                            value="Depressed"
                            onChange={handleOptionChange}
                            >
                            Depressed
                            </ToggleButton>

                            <ToggleButton
                            type="checkbox"
                            variant="outline-dark"
                            value="Optimistic"
                            onChange={handleOptionChange}
                            >
                            Optimistic
                            </ToggleButton>

                            <ToggleButton
                            type="checkbox"
                            variant="outline-dark"
                            value="Bored"
                            onChange={handleOptionChange}
                            >
                            Bored
                            </ToggleButton>

                            <ToggleButton
                            type="checkbox"
                            variant="outline-dark"
                            value="Happy"
                            onChange={handleOptionChange}
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