import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Feedback from './components/Feedback';

const App = () => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is a great website',
        },
        {
            id: 2,
            text: 'I love the website',
        },
        {
            id: 3,
            text: 'The website is awesome',
        }
    ]);

    return (
        <div>
            <Header />
            <div className="container">
                <Feedback feedback={feedback} />
            </div>
        </div>
    );
};

export default App;
