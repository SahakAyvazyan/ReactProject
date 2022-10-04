import {createStore,applyMiddleware} from "redux";
import rootReducer from './rootReducer';
import thunk from "redux-thunk";

const middleware = applyMiddleware(thunk);

export const store = createStore(rootReducer,middleware)//Եվ պետք է փոխանցել ընդհանուր ռեդուսերը
//Արդեն ստեղծեցինք մեր պահեստանոցը