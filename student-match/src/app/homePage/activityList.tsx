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
                    <li className='activity_list' key={activity.id}>
                        <button className='activity_listing'>
                            <strong className='activity_title'>{activity.title}</strong>
                            <p className='activity_desc'>{activity.description}</p>
                            <p className='activity_info'><i>Date: {activity.date}</i></p>
                            <p className='activity_info'><i>Organizer: {activity.organizer}</i></p>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ActivityList;