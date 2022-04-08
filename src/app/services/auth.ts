import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'

export interface User {
    first_name: string
    last_name: string
    email: string
    phone: string
    age: number
    gender: string
}

export interface UserResponse {
    token: string,
    refreshToken: string
}

export interface LoginRequest {
    email: string
    password: string
}

export const api = createApi({
    baseQuery: fetchBaseQuery({

        baseUrl: 'http://localhost:8080/',

        prepareHeaders: (headers, { getState }) => {
            headers.set('Access-Control-Allow-Origin', '*')
            headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT')
            headers.set('Content-Type', 'application/json')
            // By default, if we have a token in the store, let's use that for authenticated requests
            const token = (getState() as RootState).auth.token
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }

            return headers
        },
    }),
    endpoints: (builder) => ({
        login: builder.mutation<UserResponse, LoginRequest>({
            query: (credentials) => ({
                url: '/api/v1/auth/login',
                method: 'POST',
                body: credentials
            }),
        }),
        protected: builder.mutation<{ message: string }, void>({
            query: () => 'protected',
        }),
    }),
})

export const { useLoginMutation, useProtectedMutation } = api