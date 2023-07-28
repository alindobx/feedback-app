import { useContext } from 'react'
import FeedbackContext from "../../../context/FeedbackContext";

export default function FeedbackStats() {
    const {feedback} = useContext(FeedbackContext)
    //Calculate ratings avg
    const average = 
        feedback.length === 0
        ? 0
        : feedback.reduce((acc, { rating } ) => acc + rating, 0) / feedback.length
    
    return (
        <>
            <section className="feedback-stats">
                <h4>{feedback.length} Reviews</h4>
                <h4>Average Rating : { average.toFixed(1).replace(/[.,]0$/, '')}</h4>
            </section>
        </>
    )
}