import { useState } from "react";
import "./MergeNav.css";

const MergeNav = ({ handlePage, date }) => {
    const [activeTab, setActiveTab] = useState('Overview');
    const handleTab = (tab) => {
        setActiveTab(tab);
        handlePage(tab);
    }
    return (
        <>
            <div className="navbar">
                <p className={`nav-link ${activeTab === 'Overview' ? 'active' : ''}`} onClick={() => handleTab('Overview')} >Overview</p>
                <p className={`nav-link ${activeTab === 'List' ? 'active' : ''}`} onClick={() => handleTab('List')}>List</p>
                <p className={`nav-link ${activeTab === 'Account' ? 'active' : ''}`} onClick={() => handleTab('Account')}>Account</p>
                <p className={`nav-link ${activeTab === 'Timeline' ? 'active' : ''}`} onClick={() => handleTab('Timeline')}>Logout</p>
                <p className={`nav-link ${activeTab === 'Calendar' ? 'active' : ''}`} onClick={() => handleTab('Calendar')}>Calendar</p>
            </div>
            <div className="date_div">
                <div className="date">{date}</div>
                <div className="today">Today</div>
            </div>
        </>
    )
}

export default MergeNav
