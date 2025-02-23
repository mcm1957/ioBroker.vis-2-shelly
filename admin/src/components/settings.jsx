import React from "react";
import { withStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import I18n from "@iobroker/adapter-react-v5/i18n";

/**
 * @type {() => Record<string, import("@mui/styles/withStyles").CreateCSSProperties>}
 */
const styles = () => ({
	input: {
		marginTop: 0,
		minWidth: 400,
	},
	button: {
		marginRight: 20,
	},
	card: {
		maxWidth: 345,
		textAlign: "center",
	},
	media: {
		height: 180,
	},
	column: {
		display: "inline-block",
		verticalAlign: "top",
		marginRight: 20,
	},
	columnLogo: {
		width: 350,
		marginRight: 0,
	},
	columnSettings: {
		width: "calc(100% - 370px)",
	},
	controlElement: {
		//background: "#d2d2d2",
		marginBottom: 5,
	},
});

/**
 * @typedef {object} SettingsProps
 * @property {Record<string, string>} classes
 * @property {Record<string, any>} native
 * @property {(attr: string, value: any) => void} onChange
 */

/**
 * @typedef {object} SettingsState
 * @property {undefined} [dummy] Delete this and add your own state properties here
 */

/**
 * @extends {React.Component<SettingsProps, SettingsState>}
 */
class Settings extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	/**
	 * @param {AdminWord} title
	 * @param {string} attr
	 * @param {string} type
	 */
	renderInput(title, attr, type) {
		return (
			<TextField
				label={I18n.t(title)}
				className={`${this.props.classes.input} ${this.props.classes.controlElement}`}
				value={this.props.native[attr]}
				type={type || "text"}
				onChange={(e) => this.props.onChange(attr, e.target.value)}
				margin="normal"
			/>
		);
	}

	/**
	 * @param {AdminWord} title
	 * @param {string} attr
	 * @param {{ value: string; title: AdminWord }[]} options
	 * @param {React.CSSProperties} [style]
	 */
	renderSelect(title, attr, options, style) {
		return (
			<FormControl
				className={`${this.props.classes.input} ${this.props.classes.controlElement}`}
				style={{
					paddingTop: 5,
					...style,
				}}
			>
				<Select
					value={this.props.native[attr] || "_"}
					onChange={(e) => this.props.onChange(attr, e.target.value === "_" ? "" : e.target.value)}
					input={<Input name={attr} id={attr + "-helper"} />}
				>
					{options.map((item) => (
						<MenuItem key={"key-" + item.value} value={item.value || "_"}>
							{I18n.t(item.title)}
						</MenuItem>
					))}
				</Select>
				<FormHelperText>{I18n.t(title)}</FormHelperText>
			</FormControl>
		);
	}

	/**
	 * @param {AdminWord} title
	 * @param {string} attr
	 * @param {React.CSSProperties} [style]
	 */
	renderCheckbox(title, attr, style) {
		return (
			<FormControlLabel
				key={attr}
				style={{
					paddingTop: 5,
					...style,
				}}
				className={this.props.classes.controlElement}
				control={
					<Checkbox
						checked={this.props.native[attr]}
						onChange={() => this.props.onChange(attr, !this.props.native[attr])}
						color="primary"
					/>
				}
				label={I18n.t(title)}
			/>
		);
	}

	render() {
		return (
			<form className={this.props.classes.tab}>
				{this.renderCheckbox("option1", "option1")}
				<br />
				{this.renderInput("option2", "option2", "text")}
			</form>
		);
	}
}

export default withStyles(styles)(Settings);
