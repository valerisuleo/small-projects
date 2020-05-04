# Test NovaFutur



## Requirement

### Weather App

The aim of this test is to build a simple react app that displays the current weather info in London and weather forecasts for the next 5 days. The app should show a counter and a progress bar of 1 minute after it reaches the end it will refresh the weather information and start again.

## What went well?

![snack screenshot](https://www.dropbox.com/s/xkugamqjssawkub/ezgif.com-video-to-gif.gif?raw=1)


- I really enjoyed the test;
- I built a custom accordion;
- I am pretty happy with the layout and responsiveness;

> Bonus: I wanted to push myself a bit more so I decided to reshape the response into an `array of array` in order to display the daily forecast inside the body of the accordion:

```
daysFilter(array, params) {
        return array.filter((item) => {
            return item.dt_txt.includes(params);
        });
    }

    responseFormatter(list) {
        let days = list.map((el) => {
            return el.dt_txt.slice(0, 10);
        });
        days = [...new Set(days)];
        days = days.slice(1);

        const responseMapped = list.map((item) => {
            return {
                dt_txt: item.dt_txt,
                date: new Date(item.dt * 1000).toDateString(),
                hours: this.getTime(item.dt),
                isOpen: false,
                weather: item.weather[0],
                main: item.main,
            };
        });

        const forecastFiveDays = days.map((el) => {
            return this.daysFilter(responseMapped, el);
        });
        this.setState({ cards: forecastFiveDays });
    }
```


### Axios Interceptors

I did use  an interceptor to handle *unexpected* error globally:

```
axios.interceptors.response.use(null, error => {
    const { status } = error.response;
    const expectedError = status >= 400 && status < 500;

    if (!expectedError) {
        console.error('oops...UNEXPECTED ERROR')
    }

    return Promise.reject(error);
});
```


### Reusable Http Service

1. `touch httpService.js`
2. In this file we want to move everything refering to `axios`

	```
	import axios from "axios";
	
	axios.interceptors.response.use(null, error => {
	    const { status } = error.response;
	    const expectedError = status >= 400 && status < 500;
	
	    if (!expectedError) {
	        console.error("oops...UNEXPECTED ERROR");
	    }
	    return Promise.reject(error);
	});
	
	export default {
	    get: axios.get,
	    post: axios.post,
	    put: axios.put,
	    delete: axios.delete
	};
	```

### Extracting a Config Module

Having this `api.openweathermap.org/data/2.5/weather?q=London&appid=a1a8c55c025244908170eb3fe0450d50` at the top is pretty ugly!

	
```
{
	"weatherAPI": "https://api.openweathermap.org/data/2.5/weather?q=",
	"forecastAPI": "https://api.openweathermap.org/data/2.5/forecast?q=",
	"apiKey": "a1a8c55c025244908170eb3fe0450d50"
}
```

## Progress Bar

To me, it seems as if I only really need two elements to make up our progress bar. These elements are:

- A parent div that holds another div inside of it. Lets name this one ProgressBar.

	```
	import React from "react";
	import Filler from "./filler";
	import "./progressBar.scss";
	
	const ProgressBar = (props) => {
	    const { percentage } = props;
	    return (
	        <div className="progress-barz">
	            <Filler percentage={percentage}></Filler>
	        </div>
	    );
	};
	
	export default ProgressBar;
```

- A div that acts as the filler inside of the parent div. This div will be styled with color, and will fill up an x percentage of the container horizontally and vertically. Lets name this one Filler.

	```
	import React from "react";
	import "./progressBar.scss";
	
	const Filler = (props) => {
	    const { percentage } = props;
	    let classes = percentage < 0 ? "filler hide" : "filler";
	    return <div className={classes} style={{ width: `${percentage}%` }}></div>;
	};
	
	export default Filler;
	```

The only thing left to do is binding all this stuff to the `state`:

```
    state = {
        currentWeather: {},
        cards: [],
        percentage: 100,
    };

    componentDidMount() {
        this.fetchApiData();
        this.fireAndReloadBar();
    }

    fetchApiData() {
        this.getCurrentWeather();
        this.getFiveDayForecast();
    }

    fireAndReloadBar() {
        setInterval(() => {
            if (this.state.percentage <= 0) {
                this.setState({ percentage: 100 });
                setTimeout(() => {
                    this.handleIncrement();
                    this.fetchApiData();
                }, 1000);
            } else {
                this.handleIncrement();
            }
        }, 1000);
    }

    handleIncrement() {
        this.setState({
            percentage: this.state.percentage - 1.66,
        });
    }
 
____________________________________________________________________
    
<div className="bottom">
    <ProgressBar percentage={percentage} />
</div>
```

## What could be improved?

- Saving a default state if something is wrong when we try to fetch data from the api


## What went badly?

- I spent way too much time try to make work the accordion.
