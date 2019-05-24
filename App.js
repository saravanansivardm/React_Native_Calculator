/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Button,
	TouchableOpacity
} from "react-native";

const instructions = Platform.select({
	ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
	android:
		"Double tap R on your keyboard to reload,\n" +
		"Shake or press menu button for dev menu"
});

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			resultText: "",
			calcultationText: ""
		};
		this.operations = ["DEL", "+", "-", "*", "/"];
	}
	calcultateResult() {
		const text = this.state.resultText;
		this.setState({
			calcultationText: eval(text)
		});
	}
	validate() {
		const text = this.state.resultText;
		switch (text.slice(-1)) {
			case "+":
			case "-":
			case "*":
			case "/":
				return false;
		}
		return true;
	}
	onBtnPressed(text) {
		if (text == "=") {
			return this.validate() && this.calcultateResult();
		}

		this.setState({
			resultText: this.state.resultText + text
		});
	}
	Operatesfn(operation) {
		switch (operation) {
			case "DEL":
				let text = this.state.resultText.split("");
				text.pop();
				this.setState({
					resultText: text.join("")
				});
				break;

			case "+":
			case "-":
			case "*":
			case "/":
				const lastChar = this.state.resultText.split("").pop();

				if (this.operations.indexOf(lastChar) > 0) return;

				if (this.state.text == "") return;
				this.setState({
					resultText: this.state.resultText + operation
				});
		}
	}
	render() {
		let rows = [];
		let num = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [".", 0, "="]];
		for (let i = 0; i < 4; i++) {
			let row = [];
			for (let j = 0; j < 3; j++) {
				row.push(
					<TouchableOpacity
						key={num[i][j]}
						onPress={() => this.onBtnPressed(num[i][j])}
						style={styles.btns}
					>
						<Text style={styles.btnText}>{num[i][j]}</Text>
					</TouchableOpacity>
				);
			}
			rows.push(
				<View key={i} style={styles.row}>
					{row}
				</View>
			);
		}

		let op = [];
		for (let k = 0; k < 5; k++) {
			op.push(
				<TouchableOpacity
					key={this.operations[k]}
					onPress={() => this.Operatesfn(this.operations[k])}
					style={styles.btns}
				>
					<Text style={[styles.btnText, styles.btnwhite]}>
						{this.operations[k]}
					</Text>
				</TouchableOpacity>
			);
		}

		return (
			<View style={styles.container}>
				<View style={styles.result}>
					<Text style={styles.resultText}>{this.state.resultText}</Text>
				</View>
				<View style={styles.calcultation}>
					<Text style={styles.calcultationText}>
						{this.state.calcultationText}
					</Text>
				</View>
				<View style={styles.buttons}>
					<View style={styles.numbers}>{rows}</View>
					<View style={styles.operations}>{op}</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	btnText: {
		fontSize: 30,
		color: "white"
	},
	btnwhite: {
		color: "white"
	},
	resultText: {
		fontSize: 30,
		color: "black"
	},
	btns: {
		flex: 1,
		alignItems: "center",
		alignSelf: "stretch",
		justifyContent: "center"
	},
	calcultationText: {
		fontSize: 24,
		color: "black"
	},
	row: {
		flexDirection: "row",
		flex: 1,
		justifyContent: "space-around",
		alignItems: "center"
	},
	result: {
		flex: 2,
		alignItems: "flex-end",
		backgroundColor: "white",
		justifyContent: "center"
	},
	calcultation: {
		flex: 1,
		alignItems: "flex-end",
		justifyContent: "center",
		backgroundColor: "white"
	},
	buttons: {
		flex: 7,
		flexDirection: "row"
	},
	numbers: {
		flex: 3,
		backgroundColor: "#434343"
	},
	operations: {
		flex: 1,
		alignItems: "stretch",
		justifyContent: "space-around",
		backgroundColor: "#636363"
<<<<<<< HEAD
	},
	new_operations: {
		flex: 1,
		alignItems: "stretch",
		justifyContent: "space-around",
		backgroundColor: "#636363"
=======
>>>>>>> 3ab9e60df2dd12e2725753b366ddb673e951238c
	}
});
