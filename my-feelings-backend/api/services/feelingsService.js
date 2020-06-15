const feelings = [];

exports.persistFeeling = function(feeling) {
    feelings.push(feeling)
};

exports.getFeelings = function() {
    return feelings;
};

exports.getStatistics = function() {
    const statistics = {};

    totalFeelings = feelings.length;

    feelings.forEach(feeling => {
        if(statistics[feeling.selectedMood]) {
            statistics[feeling.selectedMood].numberOfFeelings += 1;
            statistics[feeling.selectedMood].percentageOfFeelings = (statistics[feeling.selectedMood].numberOfFeelings*100)/totalFeelings;
        }
        else {
            statistics[feeling.selectedMood] = {
                numberOfFeelings: 1,
                percentageOfFeelings: 100/totalFeelings
            };
        }
    });
    return statistics;
}