// function SingleComments(props){
//     console.log("singal comment props >", props);

//     return (
//             <form className='comment-item'>
//                 <div className='comment-item-dele'>X</div>
//                 <input type='text'/>
//                 <input type='submit' hidden />
//             </form>
//     )
// }
// export default SingleComments;



import {useState, useEffect} from 'react';//ամեն անգամ երբ գա նոր տեքստ մենք մենք է տեղավորենք
//  փոփոխականի մեջ, դրա համար օգտագործում ենք հուկերը
import './SingleComments.css'
import {commentDelete} from '../../redux/about/actions'
import  { useDispatch} from 'react-redux';


function SingleComment({data}){// ամեն կոմենտի համար ստանում ենք տեքստը և Id
    // console.log("single comment props >", props);
    const [commentText, setCommentText]=useState('');
    const {text,id} = data;
    const dispatch = useDispatch();

    const handleUpdate = (e)=>{
        e.preventDefault();
        console.log('submit ->>', commentText);
    }

    const handleDelete = (e) =>{
        // console.log("click>>" );
        e.preventDefault();
        dispatch(commentDelete(id));

    }


    useEffect(()=>{//ամեն անգամ երբ փոխվի տեքստը այն կավելացվի
      if(text){
          setCommentText(text);
      }  
    },[text]);

    const hendleInput = (e) =>{//այսինքն երբ մենք կգրենք ինչոր բան հին կոմենտից հետո
                               //այն աֆտոմատ փոխանցվելու է ընթացիք ստեյթ
                               //փոփոխական commentText-ը
        setCommentText(e.target.value);
    }

    return (
            <form onSubmit={handleUpdate} className='comment-item'>
                <span onClick= {handleDelete} className='comment-item-delete'>X</span>
                <input type='text' value={commentText} onChange={hendleInput}/>
                <input type='submit' hidden />
            </form>
    )
}
export default SingleComment;

//երբ մենք գրում ենք կոմենտ այն աֆտոմատ լինում է ռենդեր և ավելանում
//փոփոխական commentText-ի մեջ

//հիմա ուզում ենք թարմացնել երբ ուզում ենք մեր կոմենտը,
//ուստի ֆորմի մեջ բացում ենք onSubmit ֆունքցիան