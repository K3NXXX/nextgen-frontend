import globalSlice from '@/redux/slices/globalSlice'
import { configureStore } from '@reduxjs/toolkit'
export const store = configureStore({
    reducer: { globalSlice },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
