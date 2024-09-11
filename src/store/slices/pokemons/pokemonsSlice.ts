import { createSlice } from "@reduxjs/toolkit";

export const pokemonsSlice = createSlice({
    name:'pokemons',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false
    },
    reducers: {
        
    }
})