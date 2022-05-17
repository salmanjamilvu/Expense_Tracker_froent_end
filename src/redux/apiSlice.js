import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseURL = "http://localhost:5000/api/expense"

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    //get categories
    getCategories: builder.query({
      query: () => ({
        url: ``,
        method: 'GET'
      }),
      providesTags : ['transaction'],
    }),
    //get labels
    getLabels: builder.query({
      query: () => ({
        url: `/labels`,
        method: 'GET'
      }),
      providesTags : ['transaction']
    }),
    //add new transaction
    addTransaction: builder.mutation({
      query : (data) =>({
        url : '/transaction',
        method : 'POST',
        body: data
      }),
      invalidatesTags : ['transaction']
    }),
    //Delete Transaction
    deleteTransaction : builder.mutation({
      query : (id) => ({
        url : `/transaction/${id}`,
        method : 'DELETE'
      }),
      invalidatesTags : ['transaction']
    })
  }),
})


export const { useGetCategoriesQuery, useGetLabelsQuery, useAddTransactionMutation, useDeleteTransactionMutation } = apiSlice