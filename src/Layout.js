// src/Layout.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar'; // Import the Sidebar component
import Meetings from './Meetings'; // Import the Meetings component
import RightPanel from './RightPanel'; // Import the RightPanel component

const Container = styled.div`
    display: flex;
    height: 100vh;
    background-color: #1A1B21;
`;

const MainContent = styled.div`
    width: 60%;
    margin-left: 20%;
    padding: 20px;
    color: #FFFFFF;
`;

const Header = styled.header`
    background-color: #1A1B21;
    padding: 20px;
    color: #FFFFFF;
`;

const Layout = () => {
    const [isGroupsOpen, setIsGroupsOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State to control sidebar visibility

    // Function to toggle the sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(prevState => !prevState);
    };

    return (
        <Container>
            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} /> {/* Pass state and function */}
            <MainContent>
                <Header>
                    <h2>Meetings</h2>
                    <p style={{ color: '#8E8E93' }}>This Week</p>
                </Header>
                <Meetings /> {/* Use the Meetings component here */}
            </MainContent>
            <RightPanel /> {/* Add the RightPanel component here */}
        </Container>
    );
};

export default Layout;
