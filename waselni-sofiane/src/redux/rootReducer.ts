import { combineReducers } from '@reduxjs/toolkit'
import authReducer from './features/auth/auth'

const rootReducer = combineReducers({
    authReducer
})

export default rootReducer