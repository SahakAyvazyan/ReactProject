import { connect } from 'react-redux';
import './Likes.css'
import {incrementLikes,decrementLikes} from '../../redux/about/actions'



function Likes(props) {
    console.log("render>",props);
    return (
        <div className="button-controls">
            <button onClick={props.onIncrementLikes}>❤ {props.likes}</button>
            <button disabled={props.likes === 0} onClick={props.onDecrementLikes}>Dislike</button>
        </div>
    )
}

function mapStateToProps(state){
    const {likes} = state;
    return {
        likes: likes.likes
    }
}

function mapDispatchToProps(dispatch){ 
    return {
        onIncrementLikes: () => dispatch(incrementLikes()), 
        onDecrementLikes: () => dispatch(decrementLikes())            
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(Likes);
                        
//այսպես ստանում ենք մեր ֆունքցիաները mapDispatchToProps
//այստեղ միացնում ենք մեր կոմպոնետը redux-ին հատուկ ֆունկցիայով connect
//Օգտագործում ենք հատուկ ֆունկցիա mapStateToProps,որպեսզի կարողանանք ուղղարկել մեր պահեստից redux-Ի
//մեր կոմպոնենտին
//Նույնը անում ենք մեր մեթոդների հետ և օգտագործում mapDispatchToProps
                        