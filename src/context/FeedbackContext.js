import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext =  createContext()

export const FeedbackProvider = ({children}) => {
    //State
    const [ feedback, setFeedback ] = useState([])
    const [ feedbackEdit, setFeedbackEdit ] = useState({
        item: {},
        edit: false,
    })
    //Utility Functions
        //Update Feedback
        const updateFeedback = (id,updItem) => {
            setFeedback( 
                feedback.map((item) => (item.id === id ? 
                {...item,...updItem} : item))
            )
            setFeedbackEdit({
                item : {
                    backgroundColor : "blue"
                }
            }
            )

            console.log(setFeedbackEdit)
        }


        //Edit Feedback
        const editFeedback = (item) => {
            setFeedbackEdit({
                item,
                edit: true,
                color: 'white',
                backgroundColor: 'red'
            })
        }
        //Add Feedback
        const addFeedback = (newFeedback) => {    
            newFeedback.id = uuidv4();
            setFeedback([newFeedback, ...feedback])
        }
        //Delete Feedback
        const deleteFeedback = (id) => {
            if(window.confirm('Are you sure you want to delete?')) {
                setFeedback(feedback.filter((item) => item.id !== id))
            }
        }

    return <FeedbackContext.Provider value ={{
        feedback,// variable State
        feedbackEdit,//Object variable State
        setFeedbackEdit,//ObjectState
        deleteFeedback,//Function
        addFeedback, //Function
        editFeedback, //Function
        updateFeedback // Function
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext