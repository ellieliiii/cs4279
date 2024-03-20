import React, { useState } from "react";
import "../homePage.css";
import Activity from "../types";
import { useNavigate } from "react-router-dom";

interface OrgFormProps {
    onSubmit: (org: Activity) => void;
}

const OrgForm: React.FC<OrgFormProps> = ({ onSubmit }) => {
    const navigate = useNavigate();
    const [orgs, setOrgs] = useState<Activity[]>([]);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        date: "",
        organizer: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newOrg: Activity = {
            id: Date.now(),
            ...formData,
        };
        onSubmit(newOrg);
        setFormData({
            title: "",
            description: "",
            date: "",
            organizer: "",
        });
        navigate("/homePage");
    };

    const handleCancel = () => {
        // Redirect to the home activity page
        navigate("/homePage");
    };

    return (
        <div>
            <h2 className="org_header">Register a New Organization</h2>
            <form className="org_form" onSubmit={handleSubmit}>
                <label htmlFor="title">Organization Name:</label>
                <br className="title_break"></br>
                <input
                    className="org_input"
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />
                <label htmlFor="description">Description:</label>
                <br className="desc_break"></br>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                ></textarea>
                <label htmlFor="organizer">Main Contact:</label>
                <br className="title_break"></br>
                <input
                    className="org_input"
                    type="text"
                    id="organizer"
                    name="organizer"
                    value={formData.organizer}
                    onChange={handleChange}
                />
                <br></br>
                <br></br>
                <br></br>
                <button className="org_button" type="submit">
                    Register Organization
                </button>
                <button className="org_button" onClick={handleCancel}>
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default OrgForm;
