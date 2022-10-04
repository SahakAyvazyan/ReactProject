import { INCREMENT, DECREMENT,INPUT_TEXT,COMENT_CREATE,COMMENT_DELETE } from "./types";

const initialState = {
    likes: 0,
    text: '',
    comments: []
}

export const likesReducer = (state = initialState, action) =>{//Ցանկացած ռեդուսեր
    // ընդունում է սթեյթը և էքշնը և վերադարձնում սթեյթ

    switch(action.type){
        case INCREMENT:
           return{
               ...state,
               likes: state.likes + 1
           }
         case DECREMENT:
             return{
                 ...state,
                 likes: state.likes - 1
             }
         case INPUT_TEXT:
             return{
                    ...state,//կատարում ենք վիճակի կոպիան
                    text: action.text//թարմացնում ենք տեքստը
                }   
         case COMENT_CREATE:
             return{
                        ...state,
                        comments: [...state.comments, action.data]
                }
        case COMMENT_DELETE:
                    return(() =>{
                      const { id } = action;
                      const { comments } = state;
                      const itemIndex = comments.findIndex(res => res.id === id)
          
                      const nextComments = [
                          ...comments.slice(0, itemIndex),
                          ...comments.slice(itemIndex + 1)
                      ];
                      return{
                          ...state,
                          comments: nextComments
                          // comments: [...state.comments, action.data]
                      }
                    })();
           default:
               return state;
    }
}  