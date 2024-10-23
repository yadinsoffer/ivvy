// src/GettingStarted.js
import React from 'react';
import styled from 'styled-components';

const GettingStartedContainer = styled.div`
    background: rgba(255, 255, 255, 0.1); /* Semi-transparent white */
    border-radius: 10px; /* Rounded edges */
    padding: 20px;
    margin-top: 20px; /* Space from the above content */
    backdrop-filter: blur(10px); /* Glass effect */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Shadow for depth */
`;

const NavItem = styled.div`
    padding: 10px 0;
    color: #9C27B0;
    font-size: 14px;
`;

const GettingStarted = () => {
    return (
        <GettingStartedContainer>
            <h3 style={{ color: '#9C27B0' }}>Getting Started</h3>
            <NavItem style={{ textDecoration: 'line-through', color: '#8E8E93' }}>Complete onboarding</NavItem>
            <NavItem>Capture your first meeting</NavItem>
            <NavItem>Edit meeting notes</NavItem>
        </GettingStartedContainer>
    );
};

export default GettingStarted;

