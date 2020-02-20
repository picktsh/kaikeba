import React, {Component} from "react";
import "./HomePage.less";
import Dialog from "./Dialog";

export default class HomePage extends Component {
	render() {
		return (
			<div className="homePage">
				<h3>HomePage</h3>
				<Dialog/>
			</div>
		);
	}
}
