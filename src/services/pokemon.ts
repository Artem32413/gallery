import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { photo } from './types'
export type { photo } from './types'

export const photoApi = createApi({
  reducerPath: 'photoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://test-front.framework.team/' }),
  endpoints: (builder) => ({
    getPhotoByName: builder.query<photo, string>({
      query: () => `paintings`,
    }),
  }),
  
})
export const { useGetPhotoByNameQuery } = photoApi