import "./accordion.scss";

import React, { Component } from "react";

class CustomAccordion extends Component {
    
    toggleAccordion = (item) => {
        const current = item[0];
        const cards = [...this.props.cards];

        if (current.isOpen === true) {
            current.isOpen = false;
            let index = cards.indexOf(current);
            cards[index] = current;
        } else {
            cards.forEach((item) => {
                item[0].isOpen = false;
                current.isOpen = true;
            });
        }
        this.setState({ cards });
    };

    render() {
        const { card, renderHeader, renderBody } = this.props;

        return (
            <div
                onClick={() => this.toggleAccordion(card)}
                className={
                    !card[0].isOpen
                        ? "cardz transition"
                        : "cardz transition open"
                }
            >
                <div className="header">{renderHeader}</div>

                <div className={!card[0].isOpen ? "body" : "body open"}>
                    {renderBody}
                </div>
            </div>
        );
    }
}

export default CustomAccordion;
