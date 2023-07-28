import Card from './shard/Card';
import { useState, useContext, useEffect } from 'react';
import Button from "./shard/Button"
import RatingSelect from './RatingSelect'
import FeedbackContext from '../../context/FeedbackContext';

export default function Feedbackform() {
    const [text, setText ] = useState("")
    const [ratings, setRating ] = useState(10)
    const [btnDisabled, setBtnDisabled ] = useState(true)
    const [message, setMessage ] = useState('')  
    const [submitText, setSubmitText ] = useState("Send")
    const { addFeedback, feedbackEdit, updateFeedback, setFeedbackEdit } = useContext(FeedbackContext)

    useEffect(() => {
        console.log(feedbackEdit)
        if(feedbackEdit.edit === true){
            setBtnDisabled(false)
            setRating(feedbackEdit.item.ratings)
            setText(feedbackEdit.item.text) 
            setSubmitText("Edit")
        }
    },[feedbackEdit])

    //Events
    const handleTextChange = (e) => {
        const inputContent = e.target.value;
        console.log("base",inputContent)
    //validation
        if (inputContent === "") {
            setBtnDisabled(true)
            setMessage(null)
        }else if(inputContent !== "" && inputContent.trim().length <= 10) {
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        }else{
            setBtnDisabled(false)
            setMessage(null)
        }
            setText(inputContent);
    }

        const handleSubmit = (e) => {
            e.preventDefault();
            if(text.trim().length > 10){
                const newFeedback = {
                    text,
                    ratings
                }

                if(feedbackEdit.edit === true) {
                   updateFeedback(feedbackEdit.item.id, newFeedback)
                   
                }else{
                    addFeedback(newFeedback)
                }
                    setText("")
                    setSubmitText("Submit")
                }
        }

        
    return(
        <Card>
            <form onSubmit ={handleSubmit}>
                <h2>How would your rate your service with us?</h2>
                <RatingSelect select={setRating} selected={ratings} />
                <section className ="input-group">
                    <input onChange ={handleTextChange} value={text} type="text" placeholder="Write"/>
                    <Button type="submit" sDisabled = {btnDisabled} >{submitText}</Button>
                </section>
                {message && <div className = 'message'>{message}</div>}
            </form>
        </Card>
    )
}