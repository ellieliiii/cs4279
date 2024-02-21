import React, { useState } from 'react';
import "../homePage.css";
import Activity from '../types';

interface ActivityFormProps {
    onSubmit: (activity: Activity) => void;
}

const ActivityForm: React.FC<ActivityFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        date: '',
        organizer: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newActivity: Activity = {
            id: Date.now(),
            ...formData,
        };
        onSubmit(newActivity);
        setFormData({
            title: '',
            description: '',
            date: '',
            organizer: '',
        });
    };

    return (
        <div>
            <h2 className='activity_header'>Post a New Activity</h2>
            <form className='activity_form' onSubmit={handleSubmit}>
                <label className='activity_header' htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
                <label className='activity_header' htmlFor="description">Description:</label>
                <textarea id="description" name="description" value={formData.description} onChange={handleChange}></textarea>
                <label className='activity_header' htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} />
                <label className='activity_header' htmlFor="organizer">Organizer:</label>
                <input type="text" id="organizer" name="organizer" value={formData.organizer} onChange={handleChange} />
                <button className="activity_button" type="submit">Post Activity</button>
                <button className="activity_button">Cancel</button>
            </form>
        </div>
    );
};

export default ActivityForm;