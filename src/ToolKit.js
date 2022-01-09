import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {updateEmailAction} from './actions'

export default function ToolKit() {

    const {name, email, mobile} = useSelector((state)=>{
        return state
    })
    
    const dispatch = useDispatch()

    const updateMobile = () => {
        dispatch({type:'UPDATE_MOBILE',payload:9887620007})
    }

    const updateEmail = () => {
        dispatch(updateEmailAction('tayloramitverma@gmail.com'))
    }

    return (
        <div>
            Hello Profile
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Mobile: {mobile}</p>
            <button onClick={()=>updateMobile()}>Update Mobile</button>
            <button onClick={()=>updateEmail()}>Update Email</button>
        </div>
    )
}
