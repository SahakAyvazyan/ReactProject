// import SingleComment from '../SingleComments/SingleComments';
// import { useState } from 'react';
// import './Comments.css'

// function Comments(props){
//     const [textComment, setTextComment]=useState('');
//     console.log("comment props >", props);

// const hendleInput = (e) => {
//     console.log("inpt >>>", e.target.value);
//     setTextComment(e.target.value);
// }

// const handeleSubmit = (e) => {//submiti ժամանակ մենք form-ի մենք ատմենա ենք տալիս իրա դեֆոլդային վիճակը,որպեսզի էջը չվերբեռնվի
                            
//     e.preventDefault();//դրա համար է
//     // console.log('textComent>>>', textComment);//ուղղարկում ենք textComment-ի վիճակը
//     console.log('submit textComment>>', textComment)
// }

//     return (
//         <div className='card-comments'>
//             <form onSubmit={handeleSubmit} className='comment-item-create'>
//                 <input type='text' value={textComment} onChange={hendleInput}/>
//                 <input type='submit' hidden />
//             </form>
//             <SingleComment/>
//         </div>
//     )
// }
// export default Comments;

import { useState } from 'react';//որպեսզի ստանանք դեֆոլդ վիճակ
import SingleComment from '../../Components/SingleComments/SingleComments'; //իմպորտ անելուց 
                                             //հետո մեր կոմպոնենտը տեղափոխվում ենք app.js
import { commentCreate } from '../../redux/about/actions';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';//Յուրաատուկ id է տալիս
// import { comments } from '../../redux/about/reducer';
import './Comments.css'

function Comments(props){
    const [textComment, setTextComment]=useState('');
    // console.log("comment props >", props);
    const comments = useSelector(state => {
        // console.log('redux state >', state );
        const {comments} = state;
        return comments.comments //այստեղով արդեն կպահպանի բոլոր կոմենտները
    });
    console.log('comments >' , comments);

    const dispatch = useDispatch();

    const hendleInput = (e) => {
        // console.log("inpt >>>", e.target.value);
        setTextComment(e.target.value);

    }

    const handeleSubmit = (e) => {//submiti ժամանակ մենք form-ի մենք ատմենա
        // ենք տալիս իրա դեֆոլդային վիճակը
                            
        e.preventDefault();//դրա համար է
        // console.log('textComent>>>', textComment);//ուղղարկում ենք textComment-ի վիճակը
        const id = uniqid();
        dispatch(commentCreate(textComment, id));
        setTextComment(e.target.value="");


    }

    return (
        <div className='card-comments'>
            <form onSubmit={handeleSubmit} className='comment-item-create'>
                <input type='text' className='card-input' value={textComment} onChange={hendleInput}/>
                <input type='submit' hidden />
            </form>
            {!!comments.length && comments.map(res =>{
                    return <SingleComment key={res.id} data={res}/>
                })}
        </div>
    )
}
export default Comments;

//վելյուն տալիս ենք սկզբնական արժեքը
//հենդլսաբմիտում դիսպաչ ենք անում մեր էքշնը և փոխանցում տվյալները,դրանք են հենց քոմենթները և id
//ինփութներից հետո ավելացնում ենք մեր կոմենտները,որպեսզի տեսնենք էկրանին
//այնուհետև գնում ենք SingleComment render ենք անում ամեն մի առանձին կոմենտը