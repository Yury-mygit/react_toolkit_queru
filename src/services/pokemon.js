import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

import (createApi, fetchBaseQuery)

export const pokemonApi = createApi({
    reduserPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

export const { useGetPokemonByNameQuery } = pokemonApi