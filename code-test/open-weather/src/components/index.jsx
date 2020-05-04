import React, { Component, Fragment } from "react";
import http from "../services/httpService";
import config from "../config.json";
import "./index.scss";
import AccordionForecast from "./accordionForecast";
import ProgressBar from "../common/progress-bar/progressBar";
import CustomAccordion from "../common/accordion";

class Index extends CustomAccordion {
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

    async getCurrentWeather() {
        const response = await http.get(
            `${config.weatherAPI}London&units=metric&appid=${config.apiKey}`
        );
        const { data } = response;
        this.setState({ currentWeather: data });
    }

    async getFiveDayForecast() {
        const response = await http.get(
            `${config.forecastAPI}London&units=metric&appid=${config.apiKey}`
        );
        const { list } = response.data;
        this.responseFormatter(list);
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

    daysFilter(array, params) {
        return array.filter((item) => {
            return item.dt_txt.includes(params);
        });
    }

    getTime(params) {
        const date = params ? new Date(params * 1000) : new Date();
        const hours = date.getHours();
        const minutes = "0" + date.getMinutes();
        const seconds = "0" + date.getSeconds();
        const formattedTime =
            hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
        return formattedTime;
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

    render() {
        const { cards, currentWeather, percentage } = this.state;

        return (
            <main className="weather-container">
                <header>
                    <div className="top">
                        <div className="day">
                            <p>{currentWeather.name}</p>
                        </div>
                        <div className="widget">
                            <p>{this.getTime()}</p>
                        </div>
                        <div className="temperature">
                            <p>
                                {currentWeather.main?.temp.toFixed()}{" "}
                                <sup>o</sup>
                            </p>
                        </div>
                    </div>
                    <div className="bottom">
                        <ProgressBar percentage={percentage} />
                    </div>
                </header>

                <div className="card-container">
                    {cards.map((card, index) => (
                        <AccordionForecast
                            key={index}
                            card={card}
                            cards={cards}
                        />
                    ))}
                </div>
            </main>
        );
    }
}

export default Index;
