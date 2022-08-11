import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const StuffysApi = createApi({
    reducerPath:'StuffysApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:9001/'
    }),
    endpoints:(builder)=>({
        getAllRecords: builder.query({
            query:()=>({
                url: 'module',
                method: 'GET'
            })
        }),
        createModule: builder.mutation({
            query:(record)=>({
                url: 'module',
                method: 'POST',
                body: record,
                headers:{
                    'Content-Type' : 'application/json; charset=UTF-8'
                }
            })
        })
    })
})

export const { useGetAllRecordsQuery, useCreateModuleMutation } = StuffysApi;