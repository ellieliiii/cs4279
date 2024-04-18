import React, { useEffect, useState } from 'react';
import "./homePage.css";
import ActivityList from './activityList';
import ActivityForm from './activityForm/activityForm'
import { Activity } from "@/app/homePage/types";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const ActivityHome: React.FC = () => {
    const [showActivityForm, setShowActivityForm] = useState(false);
    const [activities, setActivities] = useState<Activity[]>([]);

    useEffect(() => {
        async function fetchActivities() {
            const url = "https://3-140-189-217.nip.io/api/act";
            const response = await fetch(url, {
                method: "GET",
            });
            if (response.status == 200) {
                const data = await response.json();
                const list: Activity[] = [];
                for (let i = 0; i < data.length; ++i) {
                    const actObject: Activity = {
                        actId: data[i].actId,
                        title: data[i].title,
                        description: data[i].description,
                        date: data[i].date,
                        organizer: data[i].organizer,
                        membershipIds: data[i].membershipIds
                    };
                    list.push(actObject);
                }
                setActivities(list);
            }
        }
        fetchActivities(); 
    }, []); 

    const handleActivitySubmit = (activity: Activity) => {
        setActivities((prevActivities) => [...prevActivities, activity]);
        console.log('Activity submitted:', activity);
        setShowActivityForm(false);
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
                    <Router>
                        <ActivityForm onSubmit={handleActivitySubmit}/>
                    </Router>
                ) : (
                    <ActivityList activities={activities} />
                )}
            </div>
        </div>
    );
};

export default ActivityHome;