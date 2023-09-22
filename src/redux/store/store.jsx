import { configureStore } from "@reduxjs/toolkit";
import { TMDB_API } from "../Slices/TMDB_API_SLICE/Data";

export const store = configureStore({
    reducer: {
        [TMDB_API.reducerPath]: TMDB_API.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(TMDB_API.middleware,)
})
