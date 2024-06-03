import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
    isSideMenuOpened: boolean
}

const initialState: IInitialState = {
    isSideMenuOpened: true,
}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setSideMenuOpened(state, action) {
            state.isSideMenuOpened = action.payload
        },
    },
})

export const { setSideMenuOpened } = globalSlice.actions

export default globalSlice.reducer
