// src/Sidebar.js
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const SidebarContainer = styled.div`
    width: ${props => (props.isSidebarOpen ? '200px' : '0')}; /* Set width to 200px when open */
    background-color: #181920;
    padding: 20px;
    color: #FFFFFF;
    position: fixed;
    height: 100%;
    overflow: hidden; /* Hide overflow when collapsed */
    transition: width 0.3s; /* Smooth transition for width change */
`;

const NavItem = styled.div`
    padding: 10px 0;
    color: #FFFFFF;
    font-size: 14px;
    display: flex;
    align-items: center;
`;

const Icon = styled.span`
    color: #8E8E93;
    margin-right: 10px;
`;

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
    return (
        <SidebarContainer isSidebarOpen={isSidebarOpen}>
            <button onClick={toggleSidebar} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#FFFFFF' }}>
                <FontAwesomeIcon icon={isSidebarOpen ? faChevronLeft : faChevronRight} />
            </button>
            {isSidebarOpen && ( // Only render the content if the sidebar is open
                <>
                    <h1>Ivvy</h1>
                    <p><strong>Testing Inc</strong></p>
                    <p style={{ color: '#8E8E93' }}>Starter • 1 member</p>
                    <NavItem><Icon>📅</Icon>Meetings</NavItem>
                    <NavItem><Icon>🤖</Icon>Agents (Beta)</NavItem>
                    <NavItem><Icon>✅</Icon>Tasks</NavItem>
                    <NavItem><Icon>🔗</Icon>Shared with you</NavItem>
                    <NavItem><Icon>📚</Icon>Learn</NavItem>
                </>
            )}
        </SidebarContainer>
    );
};

export default Sidebar;
