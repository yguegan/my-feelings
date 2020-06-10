import React from 'react';

import { Badge } from 'react-bootstrap';

const Feeling = ({feeling}) => {
    let smileyElement;
    switch(feeling.selectedMood) {
        case '1':
            smileyElement = <span role="img" aria-label="Very bad">&#128543;</span>;
            break;
        case '2':
            smileyElement = <span role="img" aria-label="Bad">&#128530;</span>;
            break;
        case '3':
            smileyElement = <span role="img" aria-label="Not too bad">&#128533;</span>;
            break;
        case '4':
            smileyElement = <span role="img" aria-label="So so">&#128528;</span>;
            break;
        case '5':
            smileyElement = <span role="img" aria-label="Good">&#128527;</span>;
            break;
        case '6':
            smileyElement = <span role="img" aria-label="Great">&#128512;</span>;
            break;
        case '7':
            smileyElement = <span role="img" aria-label="Excellent">&#128513;</span>;
            break;
        default:
            smileyElement = "";
    }

    return (
        <tr>
            <td>{smileyElement}</td>
            <td>
                {
                    feeling.selectedFeelings.map((feelingValue, index) => {
                        return (
                            <Badge key={index} pill variant="primary" size="lg">
                                {feelingValue}
                            </Badge>
                        );
                    })
                }
                </td>
            <td>{feeling.additionalComment}</td>
        </tr>      
    );
}

export default Feeling;