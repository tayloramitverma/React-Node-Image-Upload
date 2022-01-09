import { createReducer } from '@reduxjs/toolkit'
import {updateEmailAction} from '../actions'
const initialState = {
    name:'Amit Verma',
    email:'beingamitverma@gmail.com',
    mobile:9782751890
}

export default createReducer(initialState, (builder)=>{
    builder.addCase('UPDATE_MOBILE', (state,action)=>{
        state.mobile = action.payload
    })

    builder.addCase(updateEmailAction, (state,action)=>{
        state.email = action.payload
    })
})