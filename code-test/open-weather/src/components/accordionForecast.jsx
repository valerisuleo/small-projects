import React, { Component, Fragment } from "react";
import CustomAccordion from "../common/accordion";
import "./accordionForecast.scss";
import "bootstrap/dist/css/bootstrap.css";

class AccordionForecast extends Component {
    renderHeader() {
        const { date, main, weather } = this.props.card[0];
        const { icon } = weather;
        const subString = date.slice(0, 3);

        return (
            <div className="accordion-header">
                <div>
                    <p>{subString.toUpperCase()}</p>
                </div>

                <div>
                    <p>
                        {main.temp.toFixed()}
                        <sup>o</sup>
                    </p>
                </div>

                <div>
                    <img
                        src={`http://openweathermap.org/img/wn/${icon}.png`}
                        alt="weather-icon"
                    />
                </div>
            </div>
        );
    }

    renderBody() {
        const { card } = this.props;

        return (
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col">Time</th>
                        <th scope="col">temperature</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {card.map((item, index) => (
                        <tr key={index}>
                            <td className="align-middle">
                                {item.hours.slice(0,5)}
                            </td>
                            <td className="align-middle">
                                {item.main.temp.toFixed()} <sup>o</sup>
                            </td>
                            <td className="align-middle">
                                <img
                                    src={`http://openweathermap.org/img/wn/${item.weather.icon}.png`}
                                    alt="weather-icon"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }

    render() {
        const { card, cards } = this.props;

        return (
            <CustomAccordion
                card={card}
                cards={cards}
                renderHeader={this.renderHeader()}
                renderBody={this.renderBody()}
            />
        );
    }
}

export default AccordionForecast;
