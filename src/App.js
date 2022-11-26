import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import About from './pages/About';
import AboutLink from './components/AboutLink';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {

    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route path="/"
                            element={
                                <>
                                    <FeedbackForm />
                                    <FeedbackStats />
                                    <FeedbackList />
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
