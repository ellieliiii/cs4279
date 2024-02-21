import React from 'react';
import "./homePage.css";
import Activity from './types';

interface ActivityListProps {
    activities: Activity[];
}

const ActivityList: React.FC<ActivityListProps> = ({ activities }) => {
    return (
        <div className='activity_header'>
            <h2>Activity List</h2>
            <ul>
                {activities.map((activity) => (
                    <li key={activity.id}>
                        <strong>{activity.title}</strong>
                        <p>{activity.description}</p>
                        <p>Date: {activity.date}</p>
                        <p>Organizer: {activity.organizer}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ActivityList;