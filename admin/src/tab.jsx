import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import theme from "@iobroker/adapter-react-v5/Theme";
import Utils from "@iobroker/adapter-react-v5/Components/Utils";
import TabApp from "./tab-app";

let themeName = Utils.getThemeName();

function build() {
	ReactDOM.render(
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme(themeName)}>
				<TabApp
					adapterName="react_adapter_test2"
					onThemeChange={(_theme) => {
						themeName = _theme;
						build();
					}}
				/>
			</ThemeProvider>
		</StyledEngineProvider>,
		document.getElementById("root"),
	);
}

build();
