const feelings = [];

exports.persistFeeling = function(feeling) {
    feelings.push(feeling)
};

exports.getFeelings = function() {
    return feelings;
};

exports.getStatistics = function() {
    const mapStatistics = new Map();
    feelings.forEach(feeling => {
        if(mapStatistics.get(feeling.selectedMood)) {
            mapStatistics.set(feeling.selectedMood, mapStatistics.get(feeling.selectedMood)+1);
        }
        else {
            mapStatistics.set(feeling.selectedMood, 1);
        }
    });
    return mapStatistics;
}