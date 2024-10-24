import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    background-color: #2A2B31;
    color: #FFFFFF;
    padding: 15px;
    margin: 10px 0;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const MeetingCard = ({ children }) => {
    return <Card>{children}</Card>;
};

export default MeetingCard;

