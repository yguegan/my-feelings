import React from 'react';

import CanvasJSReact from '../assets/canvasjs.react';

const MoodStatistics = ({statistic}) => {

    if(statistic === undefined) {
        return (
            <span>Loading...</span>
        )
    }

    const parsedStatistic = JSON.parse(statistic);

    const CanvasJSChart = CanvasJSReact.CanvasJSChart;

    const statisticMap = new Map();
    let totalFeelings = 0;

    for (let i = 0; i < parsedStatistic.length; i++) {
        statisticMap.set(parsedStatistic[i][0], parsedStatistic[i][1]);
        totalFeelings += parsedStatistic[i][1];
    };

    const calculatePercentage = (value=0, total) => {
        return (value*100.0)/total;
    };

    const options = {
        animationEnabled: false,
        data: [{
            type: "doughnut",
            showInLegend: true,
            indexLabel: "{name}: {y}",
            yValueFormatString: "#,###'%'",
            dataPoints: [
                { name: "Very bad mood", y: calculatePercentage(statisticMap.get("1"), totalFeelings) },
                { name: "Bad mood", y: calculatePercentage(statisticMap.get("2"), totalFeelings) },
                { name: "Not too bad mood", y: calculatePercentage(statisticMap.get("3"), totalFeelings) },
                { name: "So so mood", y: calculatePercentage(statisticMap.get("4"), totalFeelings) },
                { name: "Good mood", y: calculatePercentage(statisticMap.get("5"), totalFeelings) },
                { name: "Great mood", y: calculatePercentage(statisticMap.get("6"), totalFeelings) },
                { name: "Excellent mood", y: calculatePercentage(statisticMap.get("7"), totalFeelings) }
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