import {ADD_HEADER_EMAIL} from "./type";

const initialState = {
    email:'',
};

const projectReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_HEADER_EMAIL:
            return {
                ...state,
                email: action.payload,
            };
        default:
            return state
    }
};

export default projectReducer;