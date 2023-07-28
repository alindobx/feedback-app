import Card from '../shard/Card';
import {FaTimes,FaEdit} from 'react-icons/fa';
import { useContext } from 'react';
import FeedbackContext from "../../../context/FeedbackContext";


export default function Feedbackitem({item}) {

    //Data Context
    const  {deleteFeedback,editFeedback } = useContext(FeedbackContext)
    //HandleClick

    return (
        <Card>
            <div className="num-display">{ item.ratings }</div>
            <button onClick={() => editFeedback(item)} className='edit'><FaEdit/></button>
            <button onClick = {() => deleteFeedback(item.id)} className ="close">
            <FaTimes color="purple"/> 
            </button>
            <div className="text-display">{ item.text }</div>   
        </Card>
    )
}