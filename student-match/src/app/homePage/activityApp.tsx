import React, {useState} from 'react';
import "./homePage.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ActivityHome from './activityHome';
import ActivityForm from './activityForm/activityForm';
import { Activity } from "@/app/homePage/types";

const App: React.FC = () => {
    const [activities, setActivities] = useState<Activity[]>([]);

    const handleActivitySubmit = (activity: Activity) => {
        setActivities((prevActivities) => [...prevActivities, activity]);
        console.log('Activity submitted:', activity);
    };

    return (
        <Router>
            <Routes>
                <Route path="/homePage" element={<ActivityHome />} />
                <Route path="/activityForm" element={<ActivityForm onSubmit={handleActivitySubmit}/>} />
            </Routes>
        </Router>
    );
};

export default App;