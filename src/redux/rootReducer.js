import { combineReducers } from "redux";//սրանով մենք միացնում ենք
//բոլոր ռեդյուսերները մեր կոմպոնենտների:
import contactReducer from "./contact/contact.reducer";
import { likesReducer } from "./about/reducer";




const rootReducer = combineReducers({//այստեղ մենք գրելու ենք բոլոր մեր ռեդուսերները
    contact:contactReducer,
    likes:likesReducer,
    text: likesReducer,
    comments:likesReducer,
    likesReducer
})

export default rootReducer;