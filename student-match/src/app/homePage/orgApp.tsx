import React, {useState} from 'react';
import "./homePage.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OrgHome from './orgHome';
import OrgForm from './orgForm/orgForm';
import { Org } from "@/app/homePage/types";

const App: React.FC = () => {
    const [orgs, setOrgs] = useState<Org[]>([]);

    const handleOrgSubmit = (org: Org) => {
        setOrgs((prevOrgs) => [...prevOrgs, org]);
    };

    return (
        <Router>
            <Routes>
                <Route path="/homePage" element={<OrgHome />} />
                <Route path="/orgForm" element={<OrgForm onSubmit={handleOrgSubmit}/>} />
            </Routes>
        </Router>
    );
};

export default App;