import React from 'react';

import FeelingView from './FeelingView'
import { Table } from 'react-bootstrap';

const FeelingHistory = ({feelings}) => {
    if(feelings === undefined) {
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
                            <FeelingView key={index} feeling={feeling} />     
                        );
                    })
                }
                </tbody> 
            </Table>
        )
    }
}

export default FeelingHistory;