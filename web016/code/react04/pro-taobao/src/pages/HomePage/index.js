import React, { Component } from "react";
import PageLayout from "../../layout/PageLayout";
import homePage1 from "../../static/homePage1.png";
import homePage2 from "../../static/homePage2.png";
import "./index.scss";

export default class HomePage extends Component {
    render() {
        return (
            <PageLayout _className="homePage">
                <img src={homePage1} alt="" />
                <img src={homePage2} alt="" />
                首页
            </PageLayout>
        );
    }
}
