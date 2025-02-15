import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDataType } from "../../model";

interface AuthStates {
    userSignUpData: UserDataType,
    userSignInData: {
        email:string,
        password:string
    }
    forgetPasswordMail: string,
    isOptSend:boolean
}

const initialState: AuthStates = {
    userSignUpData: {
        name: "",
        password: "",
        email: "",
        country: "",
        mobileNo: "",
        countrycode: "",
    },
    userSignInData:{
        email: "",
        password: ""
    },
    forgetPasswordMail: "",
    isOptSend: false
    
}


export const AuthSlice = createSlice({
    name: 'AuthSlice',
    initialState,
    reducers: {
        addSignUpUserData: (state, action: PayloadAction<{ name: string, value: string }>) => {
            const { name, value } = action.payload;
            state.userSignUpData = {
                ...state.userSignUpData, [name]: value
            }
        },
        addSignInUserData:(state, action: PayloadAction<{ name: string; value: string }>) => {
            const { name, value } = action.payload;
            state.userSignInData = {
                ...state.userSignInData, [name]: value
            }
        },
        addForgetPasswordmail:(state,action: PayloadAction<string>)=>{
            state.forgetPasswordMail = action.payload
        },
        sendOtp:(state)=>{
            state.isOptSend = !state.isOptSend
        }
    }
})


export const { addSignUpUserData , addSignInUserData , addForgetPasswordmail ,sendOtp} = AuthSlice.actions;
export default AuthSlice.reducer;
