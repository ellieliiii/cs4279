import React, { useEffect, useState } from 'react';
import "./homePage.css";
import OrgList from './orgList';
import OrgForm from './orgForm/orgForm'
import { Org } from "@/app/homePage/types";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const OrgHome: React.FC = () => {
    const [showOrgForm, setShowOrgForm] = useState(false);
    const [orgs, setOrgs] = useState<Org[]>([]);

    useEffect(() => {
        async function fetchOrgs() {
            const url = "https://3-140-189-217.nip.io/api/org";
            const response = await fetch(url, {
                method: "GET",
            });
            if (response.status == 200) {
                const data = await response.json();
                const list: Org[] = [];
                for (let i = 0; i < data.length; ++i) {
                    const orgObject: Org = {
                        orgId: data[i].orgId,
                        title: data[i].title,
                        description: data[i].description,
                        creator: data[i].creator,
                        membershipIds: data[i].membershipIds
                    };
                    list.push(orgObject);
                }
                setOrgs(list);
            }
        }
        fetchOrgs(); 
    }, []); 

    const handleOrgSubmit = (org: Org) => {
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