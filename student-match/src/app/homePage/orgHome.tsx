import React, { useState } from 'react';
import "./homePage.css";
import OrgList from './orgList';
import OrgForm from './orgForm/orgForm'
import Activity from "@/app/homePage/types";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const OrgHome: React.FC = () => {
    const [showOrgForm, setShowOrgForm] = useState(false);
    const [orgs, setOrgs] = useState<Activity[]>([]);

    const handleOrgSubmit = (org: Activity) => {
        setOrgs((prevOrgs) => [...prevOrgs, org]);
        console.log('Activity submitted:', org);
        setShowOrgForm(false);
    };
    const handleButtonClick = () => {
        setShowOrgForm(true);
    };

    return (
        <div className="org_tab">
            <br></br>
            <div style={{ flex: 1, marginRight: '20px' }}>
                {/* Render the button when ActivityForm is not shown */}
                {!showOrgForm && (
                    <button className="org_button" onClick={handleButtonClick}>register a new student org!</button>
                )}
            </div>
            <div style={{ flex: 1 }}>
                {/* Conditionally render ActivityList or ActivityForm based on state */}
                {showOrgForm ? (
                    <Router>
                        <OrgForm onSubmit={handleOrgSubmit}/>
                    </Router>
                ) : (
                    <OrgList orgs={orgs} />
                )}
            </div>
        </div>
    );
};

export default OrgHome;