import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseAPi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    endpoints: (builder) => ({
        "getTasks": builder.query({
            query: () => "/tasks"
        })
    })
})
export const { useGetTasksQuery } = baseAPi;
export default baseAPi;