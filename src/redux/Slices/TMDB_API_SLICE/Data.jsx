import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../../utils/api'
export const TMDB_API = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    tagTypes:['data'],
    endpoints: (builder) => ({
        getData: builder.query({
            query: (url) => (`${url}`),
            providesTags:['data']
        }),
        getMovies: builder.query({
            query: URL => URL,
            providesTags: ['data']
        }),
        getTvShows: builder.query({
            query: URL => URL,
            providesTags: ['data']
        })
    })
})

export const { useGetDataQuery, useGetMoviesQuery, useGetTvShowsQuery } = TMDB_API
