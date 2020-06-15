import React from 'react';

import CanvasJSReact from '../assets/canvasjs.react';

const MoodStatistics = ({statistic}) => {

    if(statistic === undefined) {
        return (
            <span>Loading...</span>
        )
    }

    const CanvasJSChart = CanvasJSReact.CanvasJSChart;

    const options = {
        animationEnabled: false,
        data: [{
            type: "doughnut",
            showInLegend: true,
            indexLabel: "{name}: {y}",
            yValueFormatString: "#,###'%'",
            dataPoints: [
                { name: "Very bad mood", y: statistic[1] ? statistic[1].percentageOfFeelings : 0 },
                { name: "Bad mood", y: statistic[2] ? statistic[2].percentageOfFeelings : 0 },
                { name: "Not too bad mood",y: statistic[3] ? statistic[3].percentageOfFeelings : 0 },
                { name: "So so mood", y: statistic[4] ? statistic[4].percentageOfFeelings : 0 },
                { name: "Good mood", y: statistic[5] ? statistic[5].percentageOfFeelings : 0 },
                { name: "Great mood", y: statistic[6] ? statistic[6].percentageOfFeelings : 0 },
                { name: "Excellent mood", y: statistic[7] ? statistic[7].percentageOfFeelings : 0 }
            ]
        }]
    }
    return (
    <div>
        <CanvasJSChart options = {options}/>
    </div>
    );
}

export default MoodStatistics;