import React from 'react';

import { Form, Button, ButtonGroup, ToggleButton } from 'react-bootstrap';

const MoodChoice = ({ setValue, navigation }) => {
    const { next } = navigation;
  
    return (
        <div>
            <header>
                <h1>How is your mood today ?</h1>
            </header>
            <section>
                <Form>
                    <Form.Group controlId="formFeeling">
                        <ButtonGroup toggle>
                            <ToggleButton
                                key={1}
                                type="radio"
                                variant="outline-danger" 
                                size="lg"
                                name="selectedMood"
                                value="1"
                                onChange={setValue}
                            >
                                <span role="img" aria-label="Very bad">&#128543;</span>
                            </ToggleButton>

                            <ToggleButton
                                key={2}
                                type="radio"
                                variant="outline-danger" 
                                size="lg"
                                name="selectedMood"
                                value="2"
                                onChange={setValue}
                            >
                                <span role="img" aria-label="Bad">&#128530;</span>
                            </ToggleButton>

                            <ToggleButton
                                key={3}
                                type="radio"
                                variant="outline-danger" 
                                size="lg"
                                name="selectedMood"
                                value="3"
                                onChange={setValue}
                            >
                                <span role="img" aria-label="Not too bad">&#128533;</span>
                            </ToggleButton>

                            <ToggleButton
                                key={4}
                                type="radio"
                                variant="outline-primary" 
                                size="lg"
                                name="selectedMood"
                                value="4"
                                onChange={setValue}
                            >
                                <span role="img" aria-label="So so">&#128528;</span>
                            </ToggleButton>

                            <ToggleButton
                                key={5}
                                type="radio"
                                variant="outline-success" 
                                size="lg"
                                name="selectedMood"
                                value="5"
                                onChange={setValue}
                            >
                                <span role="img" aria-label="Good">&#128527;</span>
                            </ToggleButton>

                            <ToggleButton
                                key={6}
                                type="radio"
                                variant="outline-success" 
                                size="lg"
                                name="selectedMood"
                                value="6"
                                onChange={setValue}
                            >
                                <span role="img" aria-label="Great">&#128512;</span>
                            </ToggleButton>

                            <ToggleButton
                                key={7}
                                type="radio"
                                variant="outline-success" 
                                size="lg"
                                name="selectedMood"
                                value="7"
                                onChange={setValue}
                            >
                                <span role="img" aria-label="Excellent">&#128513;</span>
                            </ToggleButton>
                        </ButtonGroup>
                    </Form.Group>
                </Form>
                <Button variant="secondary" size="sm" onClick={next}>Next</Button>
            </section>
        </div>       
        );
}

export default MoodChoice;