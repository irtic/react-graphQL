import { types } from "../types/types";
/*
    {
        uid: 'asdsadadaeqe321e,
        name: 'Sergio'
    }
*/


export const autReducer = (state = {}, action) => {
    
    switch (action.type) {

        case types.login:
            return {
                uid: action.payload.uid,
                name:action.payload.displayName
            }
        case types.logout: 
            return { }
        
        default:
            return state;
    }
}