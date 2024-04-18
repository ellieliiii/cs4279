import React from 'react';
import "./homePage.css";
import { Org } from "@/app/homePage/types";

interface OrgListProps {
    orgs: Org[];
}

const OrgList: React.FC<OrgListProps> = ({ orgs }) => {
    return (
        <div className='org_header'>
            <h2>Student Organizations</h2>
            <p>Let us know which groups you're interested in so we can find some people to connect you with!</p>
            <ul>
                {orgs.map((org) => (
                    <li className='org_list' key={org.orgId}>
                        <button className='org_listing'>
                            <strong className='org_title'>{org.title}</strong>
                            <p>{org.description}</p>
                            <p><i>Main Contact: {org.creator}</i></p>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrgList;