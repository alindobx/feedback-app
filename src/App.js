import React from 'react'
import Header from './pages/components/Header/Header'
import FeedbackList from './pages/components/FeedBackList/FeedbackList';
import FeedbackStats from './pages/components/FeedbackStats/FeedbackStats';
import Feedbackform from './pages/components/Feedbackform';
import AboutPage from './pages/AboutPage';
import {Route,Routes } from 'react-router-dom'
import AboutIconLink from './pages/components/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext'

function App() {
    return (
        <>
        <FeedbackProvider>
            <Header/>
                <div className = "container" >
                <Routes>
                    <Route
                        path = '/' element={
                            <>
                                <Feedbackform/>
                                <FeedbackStats/>
                                <FeedbackList/>
                            </>
                        }></Route>
                    <Route path= '/about' element={<AboutPage/>}/>
                </Routes>
                </div>   
                <AboutIconLink/>
         </FeedbackProvider>
        </>
    )
}

export default App