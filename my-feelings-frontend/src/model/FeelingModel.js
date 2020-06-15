class FeelingModel {
    constructor(selectedMood = "", selectedFeelings = [], additionalComment = "") {
        this.selectedMood = selectedMood;
        this.selectedFeelings = selectedFeelings;
        this.additionalComment = additionalComment;
    }
}

export default FeelingModel;