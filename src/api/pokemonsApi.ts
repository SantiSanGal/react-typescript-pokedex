import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonsApi = createApi({
    reducerPath: 'pokemons',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://pokeapi.co/api/v2/'
    }),
    tagTypes: ['Pokemons'],
    endpoints: (builder) => ({
        getPokemons: builder.query({
            query: (page = 0) => `pokemon?limit=10&offset=${page * 10}`,
            providesTags: (_result, _error, page) => [{ type: 'Pokemons', id: page }],
        })
    })
})

export const { useGetPokemonsQuery } = pokemonsApi;