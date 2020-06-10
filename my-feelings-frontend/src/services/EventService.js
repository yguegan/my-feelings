import ConfigurationParameters from "../ConfigurationParameters"

class EventService {

    async addEvent(event) {
      return fetch(ConfigurationParameters.BASE_URL_ENDPOINT, {
        method: "POST",
        headers: {
              "Content-Type": "application/json"
          },
        body: JSON.stringify(event)
      })
    }

    async getHistoricAndStatistics(event) {
      return fetch(ConfigurationParameters.BASE_URL_ENDPOINT, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((data) => data.json())
      .catch((error) => {
        console.log(error);
        return {}
      })
    }
}

export default EventService;