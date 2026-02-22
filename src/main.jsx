import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material";
import AppRouter from "./router/AppRouter";
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from "react-router-dom";
import {store} from "./store/store";
import {Provider} from "react-redux";

const theme = createTheme({
    palette: {
        primary: {
            main: '#FDCCC5',   //primary pink
            secondary: '#FB9D90' //secondary pink
        },
        background: {
            paper: "#CDCDCD",  //stoke
            default: "#FFFFFF",  //white
            secondary: "#EAEAEA",  //disable
        },
        text: {
            main: '#7A7A7A',  //Tertiary
            primary: "#000",  //primary black
            secondary: "#3F3F3F",  //secondary dark grey
        },
    },
    typography: {
        fontFamily: [
            "Raleway",
            'sans-serif',
        ].join(','),
    }
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <AppRouter />
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);