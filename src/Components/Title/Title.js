import { useDispatch, useSelector} from 'react-redux';
//useDispatch այն օգտագորժվելու է mapDispatchToProps ֆունկցիայի փոխարեն
                               
//useSelector օգտագործելու ենք mapStateToProps ֆունկցիայի փոխարեն
import { inputText } from '../../redux/about/actions';
import './Title.css'

function Title(props){
    console.log('props title >', props);
    const text = useSelector(state => {
        const { text } = state;
        return text.text;
    });
    const dispatch = useDispatch();

    const handleChange = (e) =>{
        dispatch(inputText(e.target.value))//մեր տեքստը ռեդյուսրին փոխանցելու համար
    }

    return (
        <div className='card-title'>
           <div className='card-titel-top'>
               <input className='inputtitel' type='text' onChange={handleChange}/>
           </div>
           {/* <p>{text}</p> */}
        </div>
    )
}
export default Title;

//օգտագործելով երկու հուկերը ինտեգրեցինք պահեստին ռեդաքսի
//հուկերը օգտագործելով արդեն չենք օգտագործում ֆունքցիա conect-ը