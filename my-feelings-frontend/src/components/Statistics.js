import React, {Component} from 'react';

import EventService from "../services/EventService";

import MoodStatistics from "./MoodStatistics";
import FeelingHistory from "./FeelingHistory";

class Statistics extends Component {

    constructor() {
        super();
        this.eventService = new EventService();
        this.state = { feelingsStatsAndHistory: {} };
      }
    
      componentDidMount() {
        this.eventService.getHistoricAndStatistics().then((jsonData => this.setState({ feelingsStatsAndHistory: jsonData })));
      }
    
      render() {
        return (
            <div>
                <header>
                    <h1>My moods statistics</h1>
                    <MoodStatistics statistic={this.state.feelingsStatsAndHistory.statistic}></MoodStatistics>
                </header>

                <section>
                    <FeelingHistory feelings={this.state.feelingsStatsAndHistory.feelings}></FeelingHistory>
                </section>
            </div>  
        );
      }
}

export default Statistics;