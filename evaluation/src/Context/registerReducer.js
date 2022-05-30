// write reducer for the registartion reducer
export const initState={
    isUser:false,
    data:{
        username: "",
        email: "",
        address: "",
        mobile: "",
    },
}
export const authReducer = (state,action)=>{
    switch(action.type){
        case "REGISTERED":{
            return {
                ...state,
                isUser: true,
                username: action.payload.username,
                email: action.payload.email,
                address: action.payload.address,
                mobile: action.payload.mobile
            }
        }
        case "NOT_REGISTERED":{
            return {
                ...state,
                isUser: false,
                username: "",
                email: "",
                address: "",
                mobile: "",
            }
        }
        default: {
            return state
        }
    }
}