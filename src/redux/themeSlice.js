import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        current: "Dark",
        bg: "#242424" ,
        primary: "#ff5eb5",
        text: "#fff",
        disabled: "#aeaeae",
        black: "#000",
    },
    reducers: {
        change: (state) => {
            state.current = "Light";
            state.bg = "#F5F5F5";
            state.primary = "#ff5eb5";
            state.text = "#000";
            state.disabled = "#aeaeae";
            state.black = "#fff";
        },
        revert: (state) => {
            state.current = "Dark";
            state.bg = "#242424";
            state.primary = "#ff5eb5";
            state.text = "#fff";
            state.disabled = "#aeaeae";
            state.black = "#000";
        }
    }
})

export const { change, revert } = themeSlice.actions;
export default themeSlice.reducer;