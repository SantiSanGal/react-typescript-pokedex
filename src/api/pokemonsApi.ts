import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonsApi = createApi({
    reducerPath: 'pokemons',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://pokeapi.co/api/v2/'
    }),
    tagTypes: ['Pokemons'],
    endpoints: (builder) => ({
        getPokemons: builder.query({
            query: ({ page = 0, type = null }) => {
                if (type && type !== 'allpokemons') {
                    return `${type}`;
                } else {
                    return `pokemon?limit=10&offset=${page * 10}`;
                }
            },
            transformResponse: (response: any, meta, arg) => {
                if (response.results) { // sin type
                    return {
                        count: response.count,
                        results: response.results,
                    };
                } else if (response.pokemon) {// con type
                    return {
                        count: response.pokemon.length,
                        results: response.pokemon.map((p: any) => p.pokemon),
                    };
                }
                return response;
            },
            providesTags: (result, error, { page, type }) => [{ type: 'Pokemons', id: page, filter: type }],
        })
    })
});

export const { useGetPokemonsQuery } = pokemonsApi;