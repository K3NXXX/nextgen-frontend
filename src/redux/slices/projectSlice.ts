import { IAddProjectForm } from '@/types/project.types'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"

interface IInitialState {
    switchAddProjectForm: string
    projects: []
}

const initialState: IInitialState = {
    switchAddProjectForm: 'info',
    projects: []

}


export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        setSwitchAddProjectForm(state, action) {
            state.switchAddProjectForm = action.payload
        },
    }
})

export const { setSwitchAddProjectForm } = projectSlice.actions

export default projectSlice.reducer
