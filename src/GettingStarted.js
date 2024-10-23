// src/GettingStarted.js
import React from 'react';
import styled from 'styled-components';

const GettingStartedContainer = styled.div`
    position: fixed; /* Position it fixed to the viewport */
    bottom: 50px; /* Distance from the bottom of the viewport */
    left: 20px; /* Distance from the left of the viewport */
    width: 150px; /* Set a width slightly less than the sidebar */
    background-color: #2A2B31; /* Background color */
    color: #FFFFFF;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Optional shadow for depth */
    z-index: 100; /* Ensure it appears above other content */
    transition: opacity 0.3s; /* Smooth transition for visibility */
`;

const Title = styled.h3`
    margin: 0 0 10px 0; /* Margin for the title */
`;

const GettingStartedItem = styled.p`
    margin: 5px 0; /* Margin for each item */
    color: #9C27B0; /* Different color for getting started items */
`;

const GettingStarted = ({ isVisible }) => {
    return (
        <GettingStartedContainer style={{ opacity: isVisible ? 1 : 0, pointerEvents: isVisible ? 'auto' : 'none' }}>
            <Title>Getting Started</Title>
            <GettingStartedItem>Complete onboarding</GettingStartedItem>
            <GettingStartedItem>Capture your first meeting</GettingStartedItem>
            <GettingStartedItem>Edit meeting notes</GettingStartedItem>
        </GettingStartedContainer>
    );
};

export default GettingStarted;
