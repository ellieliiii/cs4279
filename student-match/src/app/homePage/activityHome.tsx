import React, { useState } from 'react';
import "./homePage.css";
import ActivityList from './activityList';
import ActivityForm from './activityForm/activityForm'
import Activity from "@/app/homePage/types";

const ActivityHome: React.FC = () => {
    const [showActivityForm, setShowActivityForm] = useState(false);
    const [activities, setActivities] = useState<Activity[]>([]);

    const handleActivitySubmit = (activity: Activity) => {
        setActivities((prevActivities) => [...prevActivities, activity]);
        console.log('Activity submitted:', activity);
    };
    const handleButtonClick = () => {
        setShowActivityForm(true);
    };

    return (
        <div className="activity_tab">
            <div style={{ flex: 1, marginRight: '20px' }}>
                {/* Render the button when ActivityForm is not shown */}
                {!showActivityForm && (
                    <button className="activity_button" onClick={handleButtonClick}>add a new activity!</button>
                )}
            </div>
            <div style={{ flex: 1 }}>
                {/* Conditionally render ActivityList or ActivityForm based on state */}
                {showActivityForm ? (
                    <ActivityForm onSubmit={handleActivitySubmit}/>
                ) : (
                    <ActivityList activities={activities} />
                )}
            </div>
        </div>
    );
};

export default ActivityHome;