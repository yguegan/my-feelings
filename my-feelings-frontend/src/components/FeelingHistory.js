import React from 'react';

import Feeling from './Feeling'
import { Table } from 'react-bootstrap';

const FeelingHistory = ({feelings}) => {
    if(feelings === undefined) {
        console.log("empty");
        return (<span>Loading...</span>)
    }
    else {
        return (
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>Mood</th>
                        <th>Feelings</th>
                        <th>Additional comment</th>
                    </tr>
                </thead>
                <tbody>
                {
                    feelings.map((feeling, index) => {
                        return (
                            <Feeling key={index} feeling={feeling} />     
                        );
                    })
                }
                </tbody> 
            </Table>
        )
    }
}

export default FeelingHistory;