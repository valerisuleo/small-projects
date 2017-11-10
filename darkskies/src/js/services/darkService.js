angular
  .module('darkSkyApi')
  .service('darkService', DarkService);

DarkService.$inject = ['$http'];
function DarkService($http) {

  this.getForecastService = function getForecast(lat, lng) {
    return $http
    .get('/api/forecasts?exclude=[daily,hourly,minutely,alerts]', { params: { lat, lng }})
    .then((response) => {

      const sky = response.data;
      const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// ____________________________________place____________________________________
      sky.place = function() {
        return {
          // country: this.timezone.split('/')[0].replace(/_/g, ' '),
          city: this.timezone.split('/')[1].replace(/_/g, ' ')};
      };
      // console.log(sky.place());

// __________________________________getToDay___________________________________
      sky.getToDay = function () {
        const today = new Date();

        var showToday = weekdays[today.getUTCDay()];
        return showToday;
      };

// ________________________________daysOfTheWeek________________________________
      sky.daysOfTheWeek = function () {

        const dailySky = [];
        const dailyTemperature = sky.daily.data;
        // console.log('dailyTemperature', dailyTemperature);
        const apparentTemperatureHigh = [];

        dailyTemperature.forEach((data) => {
          apparentTemperatureHigh.push(data.apparentTemperatureHigh);
        });
        console.log('apparentTemperatureHigh', apparentTemperatureHigh);

        weekdays.forEach((weekday, index) => {
          dailySky.push({
            weekday: weekdays[index],
            value: apparentTemperatureHigh[index]
          });
        });
        // console.log('dailySky', dailySky);
        sky.whatever = dailySky;
        // return dailySky;
      };

      sky.daysOfTheWeek();


// ____________________________temperatureConverted_____________________________
      sky.temperature = function () {
        const temperatureConverted = 5 / 9 * (this.currently.temperature - 32);
        return Math.round(temperatureConverted) + '°';
      };
      // console.log(sky.temperature());



// ________________________________timeConverter________________________________
      sky.time = function() {
        const timeConverter = new Date(0);
        if (this.offset === 2) {
          timeConverter.setUTCSeconds(this.currently.time + (this.offset * 1800));
        } else {
          timeConverter.setUTCSeconds(this.currently.time);
        }
        return timeConverter;
      };
// _____________________________________________________________________________
      return sky;
    });
  };
}
