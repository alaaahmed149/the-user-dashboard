import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export interface User {
    id: number;
    name: {
        firstname: string;
        lastname: string;
    };  
    email: string;
    role: string;
    phone: string;
    address: {
        city: string;
        street: string;
        number: number;
    }
  }
export const userApi = createApi({
    reducerPath: "userApi", 
    baseQuery: fetchBaseQuery({baseUrl: "https://fakestoreapi.com/"}),
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => "users"
        }),
        getUser: builder.query<User, string>({
            query: (id) => `users/${id}`
        })
    })
})

export const {useGetUsersQuery, useGetUserQuery} = userApi;