import globalSlice from '@/redux/slices/globalSlice'
import { configureStore } from '@reduxjs/toolkit'
import projectSlice from './slices/projectSlice'
export const store = configureStore({
    reducer: { globalSlice, projectSlice },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
