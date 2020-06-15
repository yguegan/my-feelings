import React from 'react';

import { Button, Form } from 'react-bootstrap';

const OptionalComment = ({ setValue, navigation, onSubmit }) => {
      
    return (
        <div>
            <header>
                <h1>Do you have something specific to say today ?</h1>
            </header>
            <section>
                <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Optional comments</Form.Label>
                        <Form.Control as="textarea" rows="3" name="additionalComment" onChange={setValue}/>
                    </Form.Group>
                </Form>
                <Button variant="success" size="sm" onClick={() => onSubmit()}>Submit</Button>
            </section>
        </div>       
    );
}

export default OptionalComment;