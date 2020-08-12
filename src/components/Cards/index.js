import React, { Component } from "react";
import Slider from "../../components/Sliders";
import Item from "../../components/Items";
import CardHeader from "../../components/Header/CardHeader";
import "../../sass/global/components/_component.card.scss";

class Card extends Component {
    render() {
        const {
            type,
            data,
            mode,
            marginTop,
            className,
            borderBottom,
            titleHeader,
            displayTimeBox,
            posterTitle,
            posterImg,
            lstTab,
            btnExternal,
            logoHeader
        } = this.props;

        if (type === "horizontal") {
            return (
                <div
                    className={`ccs-card-horizontal ${className}`}
                    style={{ marginTop: marginTop }}
                >
                    <CardHeader
                        type="header"
                        titleHeader={titleHeader}
                        logoHeader={logoHeader}
                        displayTimeBox={displayTimeBox}
                    />
                    <Slider typeSlider={1} className="list-product-horizontal--slider">
                        {data.map((item, index) => {
                            return (
                                <Item
                                    type={1}
                                />
                            );
                        })}
                    </Slider>
                </div>
            );
        } else if (type === "brand") {
            return (
                <div
                    className={`ccs-card-brand ${className}`}
                    style={{ marginTop: marginTop }}
                >
                    <CardHeader
                        type="header"
                        titleHeader={titleHeader}
                        displayTimeBox={displayTimeBox}
                        borderBottom={borderBottom}
                    />
                    <Slider typeSlider={1} className="list-brand-slider">
                        {data.map((item, index) => {
                            return (
                                <Item
                                    type={2}
                                />
                            );
                        })}
                    </Slider>
                </div>
            );
        } else if (type === "article") {
            return (
                <div
                    className={`ccs-card-article ${className}`}
                    style={{ marginTop: marginTop }}
                >
                    <CardHeader
                        type="header"
                        titleHeader={titleHeader}
                        displayTimeBox={displayTimeBox}
                        borderBottom={borderBottom}
                        btnExternal={btnExternal}
                    />
                    <div className="ccs-card-content">
                        {data.map((item, index) => {
                            return (
                                <Item
                                    type={4}
                                />
                            );
                        })}
                    </div>
                </div>
            );
        } else if (type === "vertical") {
            return (
                <div
                    className={`
                    ccs-card-vertical 
                    ${className}
                    ${ mode === "reverse" ? "ccs-card-vertical--reverse" : ""}
                    `}
                    style={{ marginTop: marginTop }}
                >
                    <div className="ccs-card-left">
                        <CardHeader
                            type="poster"
                            posterTitle={posterTitle}
                            posterImg={posterImg}
                        />
                    </div>
                    <div className="ccs-card-right">
                        <CardHeader
                            type="tab"
                            data={lstTab}
                        />
                        <div className="card-right--content">
                            <Slider typeSlider={2}>
                                {data.map((item, index) => {
                                    return (
                                        <Item
                                            type={3}
                                        />
                                    );
                                })}
                            </Slider>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }

    }
}
export default Card;