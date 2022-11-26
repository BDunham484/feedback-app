import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import About from './pages/About';
import AboutLink from './components/AboutLink';
import { FeedbackProvider } from './context/FeedbackContext';

import FeedbackData from "./data/feedbackData";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)


    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }

    }

    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route path="/"
                            element={
                                <>
                                    <FeedbackForm handleAdd={addFeedback} />
                                    <FeedbackStats />
                                    <FeedbackList handleDelete={deleteFeedback} />
                                </>
                            } />
                        <Route path='/about' element={<About />} />
                    </Routes>
                    <AboutLink />
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App;
