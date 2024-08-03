import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
   switchAddProjectForm: string
}

const initialState: IInitialState = {
    switchAddProjectForm: "info"
}

export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
       setSwitchAddProjectForm (state, action) {
        state.switchAddProjectForm = action.payload
       }
    },
})

export const {
    setSwitchAddProjectForm
} = projectSlice.actions

export default projectSlice.reducer
