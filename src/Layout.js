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
    width: ${props => (props.isSidebarOpen ? '50%' : '60%')}; /* Adjust width based on sidebar state */
    margin-left: ${props => (props.isSidebarOpen ? '20%' : '10%')}; /* Adjust margin based on sidebar state */
    padding: 20px; /* Add padding */
    color: #FFFFFF;
`;

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State to control sidebar visibility

    // Function to toggle the sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(prevState => !prevState);
    };

    return (
        <Container>
            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <MainContent isSidebarOpen={isSidebarOpen}>
                <h2>Meetings</h2>
                <p style={{ color: '#8E8E93' }}>This Week</p>
                <Meetings /> {/* Use the Meetings component here */}
            </MainContent>
            <RightPanel /> {/* Add the RightPanel component here */}
        </Container>
    );
};

export default Layout;
