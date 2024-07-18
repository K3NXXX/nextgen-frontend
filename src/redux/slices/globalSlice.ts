import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
    isSideMenuOpened: boolean
    isUIConfigureOpened: boolean
    UIConfigureColor: string
    sideNavType: 'transparent' | 'opaque'
    navBarFixed: boolean
    openProjectAddForm: boolean
}

const initialState: IInitialState = {
    isSideMenuOpened: false,
    isUIConfigureOpened: false,
    UIConfigureColor: '#0075ff',
    sideNavType: 'transparent',
    navBarFixed: true,
    openProjectAddForm: false,
}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setSideMenuOpened(state, action) {
            state.isSideMenuOpened = action.payload
        },
        setIsUIConfigureOpened(state, action) {
            state.isUIConfigureOpened = action.payload
        },
        setUIConfigureColor(state, action) {
            state.UIConfigureColor = action.payload
        },
        setSideNavType(state, action) {
            state.sideNavType = action.payload
        },
        setNavBarFixed(state, action) {
            state.navBarFixed = action.payload
        },
        setOpenProjectAddForm(state, action) {
            state.openProjectAddForm = action.payload
        },
    },
})

export const {
    setSideMenuOpened,
    setIsUIConfigureOpened,
    setUIConfigureColor,
    setSideNavType,
    setNavBarFixed,
    setOpenProjectAddForm
} = globalSlice.actions

export default globalSlice.reducer
