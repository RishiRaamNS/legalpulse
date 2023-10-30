import React from 'react';
import { useState } from 'react';
import Getstartnavbar from '../components/getstartnavbar';
import Getstartbottomnav from '../components/getstartbottomnav';
import { Link } from 'react-router-dom';
export default function Addrole() {
  const roles=[
    'Advocate',
    'ADR Practitioner',
    'Alternative Dispute Resolution (ARD) Specialist',
    'Arbitrator',
    'Attorney',
    'Banking and Finance Lawyer',
    'Barrister',
    'Counsel',
    'Consumer Rights Lawyer',
    'Constitutional Lawyer',
    'Corporate Counsel',
    'Criminal Lawyer',
    'Civil Rights Lawyer',
    'Cybersecurity and Privacy Lawyer',
    'Document Writer',
    'Environmental Attorney',
    'Elder Law Attorney',
    'Family Lawyer',
    'Family Mediator',
    'Government Lawyer',
    'Healthcare Attorney',
    'Human Rights Activist',
    'Immigration Attorney',
    'Intellectual Property Lawyer',
    'International Humanitarian Law Expert',
    'Judge',
    'Mediator',
    'Notary',
    'Labour and Employment Lawyer',
    'Law costs draftsman',
    'Law clerk',
    'Law professor',
    'Lawyer',
    'Legal Advocate',
    'Legal Assistant',
    'Legal Cashier',
    'Legal Consultant',
    'Legal Ethics Advisor',
    'Legal Executive',
    'Legal Journalist',
    'Legal Researcher',
    'Legal Secretary',
    'Patent Attorney',
    'Personal injury lawyer',
    'Prosecutor',
    'Property Lawyer',
    'Public Defender',
    'Real Estate Attorney',
    'Solicitor',
    'Tax Lawyer',
];

const [selectedRole,setSelectedRole]=useState('');

const handleRoleChange=(event)=>{
    setSelectedRole(event.target.value);
};
  return (
    <div className='addrole'>
<Getstartnavbar />
        <div className='choose-role'>
            <h1>Got it. Now, add a title to tell the world what you do. </h1>
            <p>It's the very thing clients see, so make it count. Stand out by describing your own words.</p>
            <h3>Your Professional role</h3>
            <select value={selectedRole} onChange={handleRoleChange}>
                <option value="">Select your role</option>
                {roles.map((role,index)=>(
                    <option key={index} value={role}>
                        {role}
                    </option>
                ))}
            </select>
        </div>
        <Link to="/getting-started/experience">
        <Getstartbottomnav botButton="Next, add your experience" />
        </Link>
    </div>
  )
}

