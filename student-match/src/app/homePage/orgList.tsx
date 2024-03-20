import React from 'react';
import "./homePage.css";
import Activity from './types';

interface OrgListProps {
    orgs: Activity[];
}

const OrgList: React.FC<OrgListProps> = ({ orgs }) => {
    return (
        <div className='org_header'>
            <h2>Student Organizations</h2>
            <p>Let us know which groups you're interested in so we can find some people to connect you with!</p>
            <ul>
                {orgs.map((org) => (
                    <li className='org_list' key={org.id}>
                        <button className='org_listing'>
                            <strong className='org_title'>{org.title}</strong>
                            <p>{org.description}</p>
                            <p><i>Main Contact: {org.organizer}</i></p>
                        </button>
                    </li>
                ))}
                <li className='org_list'>
                    <button className='org_listing'>
                        <strong className='org_title'>VandyHacks</strong>
                        <p>VandyHacks is an organization dedicated to fostering hacker culture and
                            building a computer science community at Vanderbilt University.</p>
                        <p><i>Main Contact: kennedi.m.anderson@vanderbilt.edu</i></p>
                    </button>
                </li>
                <li className='org_list'>
                    <button className='org_listing'>
                        <strong className='org_title'>VPAC</strong>
                        <p>The Vanderbilt Performing Arts Community (VPAC) is the umbrella organization that oversees
                            all performing arts groups on Vanderbilt's campus.</p>
                        <p><i>Main Contact: angela.j.brinckerhoff@vanderbilt.edu</i></p>
                    </button>
                </li>
                <li className='org_list'>
                    <button className='org_listing'>
                        <strong className='org_title'>Change++</strong>
                        <p>We deliver professional-grade software for impactful charitable organizations while
                            supporting aspiring software engineers, designers, and managers. </p>
                        <p><i>Main Contact: kylie.m.burgess@vanderbilt.edu</i></p>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default OrgList;